import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import accountService from "../Service/AccountService";
import {Form, message} from "antd";

function Profile() {
    const navigate = useNavigate();
    const AuthName = sessionStorage.getItem("username")
    const Token = sessionStorage.getItem("accessToken")

    const [data, setData] = useState([]);

    const checkLogin = async () => {
        if (AuthName == null || Token == null){
            navigate('/login')
        }
    };

    const check_pass = async () => {
        if (document.getElementById('newPassword').value === document.getElementById('renewPassword').value) {
            document.getElementById('change-pass-btn').disabled = false;
        } else {
            document.getElementById('change-pass-btn').disabled = true;
        }
    }

    const isUser = async () => {
        await accountService.findUserByUsername(AuthName)
            .then((res) => {
                if (res.status === 200){
                    console.log("find user" + AuthName, res.data)
                    setData(res.data);
                }
            })
    };

    //api/upload/image

    const updateInfo = async (values) => {
        let id = sessionStorage.getItem('id');

        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var phoneNumber = document.getElementById("phone").value;
        var birthday = document.getElementById("birthday").value;
        var gender = document.getElementById("gender").value;
        var address = document.getElementById("address").value;

        let data = {
            avatar: "",
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            birthday: birthday,
            gender: gender,
            address: address
        }

        await accountService.updateAccount(id, data)
            .then((res) => {
                console.log("update", res.data)
                alert("Update information success!")
            })
            .catch((err) => {
                console.log(err)
                message.error("Update information error! Please try again")
            })
    };

    const changePass = async (values) => {
        let id = sessionStorage.getItem('id');

        var oldPassword = document.getElementById("currentPassword").value;
        var password = document.getElementById("newPassword").value;
        var confirmPassword = document.getElementById("renewPassword").value;

        let data = {
            oldPassword: oldPassword,
            password: password,
            confirmPassword: confirmPassword
        }
        await accountService.changePassAccount(id, data)
            .then((res) => {
                console.log("changepass", res.data)
                alert("Change password success!")
            })
            .catch((err) => {
                console.log(err)
                message.error("Change password error! Please try again")
            })
    };

    useEffect(() => {
        checkLogin();
        isUser();
        check_pass();
    }, []);

    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Profile</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item">Users</li>
                            <li className="breadcrumb-item active">Profile</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <section className="section profile">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                    <img src={data.avatar} alt="Profile" className="rounded-circle" />
                                    <h2>{AuthName}</h2>
                                    <h3>{data.email}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-body pt-3">
                                    <ul className="nav nav-tabs nav-tabs-bordered">
                                        <li className="nav-item">
                                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content pt-2">
                                        <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                            <h5 className="card-title">Profile Details</h5>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label ">Full Name: </div>
                                                <div className="col-lg-9 col-md-8">{data.firstName} {data.lastName}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Username: </div>
                                                <div className="col-lg-9 col-md-8">{data.username}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Gender</div>
                                                <div className="col-lg-9 col-md-8">{data.gender}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Birthday</div>
                                                <div className="col-lg-9 col-md-8">{data.birthday}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Address</div>
                                                <div className="col-lg-9 col-md-8">{data.address}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Phone</div>
                                                <div className="col-lg-9 col-md-8">{data.phoneNumber}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Email</div>
                                                <div className="col-lg-9 col-md-8">{data.email}</div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
                                            {/* Profile Edit Form */}
                                            <Form className="form-update-info" onFinish={updateInfo}>
                                                <div className="row mb-3">
                                                    <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Avatar: </label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <img style={{borderRadius:"50%"}} src={data.avatar} alt="Profile" />
                                                        <div className="pt-2">
                                                            <div className="btn btn-primary btn-sm" >
                                                                <label className="upload position-relative">
                                                                    <p className="mb-0"><i
                                                                        className="bi bi-cloud-arrow-up text-white fs-6"></i>
                                                                    </p>
                                                                    <input
                                                                        className="opacity-0 hidden position-absolute" style={{padding:"8px"}}
                                                                        type="file" name="avt"></input>
                                                                </label>
                                                            </div>
                                                            <Link to="#" className="btn btn-danger btn-sm"
                                                               title="Remove my profile image"><i
                                                                className="bi bi-trash"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">First Name: </label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="firstName" type="text" className="form-control" id="firstName" defaultValue={data.firstName} />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">Last Name: </label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="lastName" type="text" className="form-control" id="lastName" defaultValue={data.lastName} />                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Username: </label>
                                                    <div className="col-md-8 col-lg-9">
                                                        {/*<input name="username" type="text" className="form-control" id="username" defaultValue={data.username} />*/}
                                                        <span className="form-control">{data.username}</span>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="Job" className="col-md-4 col-lg-3 col-form-label">Gender</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="gender" type="text" className="form-control" id="gender" defaultValue={data.gender} />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="Country" className="col-md-4 col-lg-3 col-form-label">Birthday</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="birthday" type="text" className="form-control" id="birthday" defaultValue={data.birthday} />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="address" type="text" className="form-control" id="address" defaultValue={data.address} />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="phone" type="text" className="form-control" id="phone" defaultValue={data.phoneNumber} />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                                </div>
                                            </Form>{/* End Profile Edit Form */}
                                        </div>
                                        <div className="tab-pane fade pt-3" id="profile-settings">
                                            {/* Settings Form */}
                                            <form>
                                                <div className="row mb-3">
                                                    <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="changesMade" defaultChecked />
                                                            <label className="form-check-label" htmlFor="changesMade">
                                                                Changes made to your account
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="newProducts" defaultChecked />
                                                            <label className="form-check-label" htmlFor="newProducts">
                                                                Information on new products and services
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="proOffers" />
                                                            <label className="form-check-label" htmlFor="proOffers">
                                                                Marketing and promo offers
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="securityNotify" defaultChecked disabled />
                                                            <label className="form-check-label" htmlFor="securityNotify">
                                                                Security alerts
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                                </div>
                                            </form>{/* End settings Form */}
                                        </div>
                                        <div className="tab-pane fade pt-3" id="profile-change-password">
                                            {/* Change Password Form */}
                                            <Form className="form-change-password" onFinish={changePass}>
                                                <div className="row mb-3">
                                                    <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="password" type="password" className="form-control" id="currentPassword" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="newpassword" type="password" onKeyUp={check_pass} className="form-control" id="newPassword" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="renewpassword" type="password" onKeyUp={check_pass} className="form-control" id="renewPassword" />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button id="change-pass-btn" type="submit" className="btn btn-primary">Change Password</button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    )
}

export default Profile
