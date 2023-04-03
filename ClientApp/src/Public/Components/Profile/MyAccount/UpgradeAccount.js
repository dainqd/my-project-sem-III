import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import accountService from "../../Service/AccountService";
import customerService from "../../Service/CustomerService";
import {Form, message} from "antd";

function ViewsNoCustomer() {
    const AuthName = sessionStorage.getItem("username")

    const [data, setData] = useState([]);

    const isUser = async () => {
        await accountService.findUserByUsername(AuthName)
            .then((res) => {
                if (res.status === 200){
                    console.log("find user" + AuthName, res.data)
                    setData(res.data);
                }
            })
    };

    const createCustomer = async () => {
        var name = document.getElementById("inputNanme").value;
        var email = document.getElementById("inputEmail").value;
        var phone = document.getElementById("inputPhone").value;
        var address = document.getElementById("inputAddress").value;

        if (name == null || email == null || phone == null){
            message.error("Error, Please try again!")
        }

        let customer = {
            avatar: data.avatar,
            user_id: sessionStorage.getItem('id'),
            fullName: name,
            email: email,
            phoneNumber: phone,
            address: address,
            status: 'ACTIVE'
        }

        await customerService.adminCreateCustomer(customer)
            .then((res) => {
                console.log("customer", res.data)
                localStorage.setItem('isCustomer', 1);
                alert(`Register successful! Thanks you very much!`)
                window.location.reload();
            })
            .catch((err) => {
                console.log(err)
                message.error("Error, Please try again!")
            })
    };

    useEffect(() => {
        isUser();
    }, []);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Sign up to be our potential customer</h5>
                <div className="text"></div>
                <Form className="row g-3" onFinish={createCustomer}>
                    <div className="col-md-6">
                        <label htmlFor="inputNanme" className="form-label">Your Name:</label>
                        <input type="text" className="form-control" id="inputNanme"
                               placeholder="Please enter your name..." />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail" className="form-label">Your Email:</label>
                        <input type="email" className="form-control" id="inputEmail"
                               placeholder="Please enter your email..." />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPhone" className="form-label">Your PhoneNumber:</label>
                        <input type="text" className="form-control" id="inputPhone"
                               placeholder="Please enter your phone..." />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAddress" className="form-label">Address:</label>
                        <input type="text" className="form-control" id="inputAddress"
                               placeholder="Please enter your address..."/>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

function ViewsCustomer() {
    const AuthName = sessionStorage.getItem("username")

    const [data, setData] = useState([]);
    const [customer, setCustomer] = useState([]);

    const isUser = async () => {
        await accountService.findUserByUsername(AuthName)
            .then((res) => {
                if (res.status === 200){
                    console.log("find user" + AuthName, res.data)
                    setData(res.data);
                }
            })
    };

    const checkCustomer = async () => {
        await customerService.detailCustomer(sessionStorage.getItem('id'))
            .then((res) => {
                if (res.status === 200){
                    console.log("customer" + sessionStorage.getItem('id'), res.data)
                    setCustomer(res.data);
                }
            })
    };

    useEffect(() => {
        isUser();
        checkCustomer();
    }, []);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Thank you for choosing to trust and become our loyal customer</h5>
                <div className="text-black mb-3">Here is your registration information</div>
                <span></span>
                <Form className="row g-3" >
                    <div className="col-md-5">
                        <div className="mb-2">Your Name:</div>
                        <div className="form-control">{customer.fullName}</div>
                    </div>
                    <div className="col-md-5">
                        <div className="mb-2">Your email:</div>
                        <div className="form-control">{customer.email}</div>
                    </div>
                    <div className="col-md-5">
                        <div className="mb-2">Your phone:</div>
                        <div className="form-control">{customer.phoneNumber}</div>
                    </div>
                    <div className="col-md-5">
                        <div className="mb-2">Your address:</div>
                        <div className="form-control">{customer.address}</div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

function UpgradeAccount() {
    const navigate = useNavigate();
    const AuthName = sessionStorage.getItem("username")
    const Token = sessionStorage.getItem("accessToken")
    const id = sessionStorage.getItem('id');

    let isCustomer = true;

    const [data, setData] = useState([]);

    const checkLogin = async () => {
        if (AuthName == null || Token == null || id == null){
            navigate('/login')
        }
    };

    const isUser = async () => {
        await accountService.findUserByUsername(AuthName)
            .then((res) => {
                if (res.status === 200){
                    console.log("find user" + AuthName, res.data)
                    setData(res.data);
                }
            })
    };

    const checkCustomer = async () => {
        await customerService.detailCustomer(id)
            .then((res) => {
                if (res.status === 200){
                    console.log("customer" + id, res.data);
                    localStorage.setItem('isCustomer', 1);
                }
            })
    };

    useEffect(() => {
        isUser();
        checkLogin();
        checkCustomer();
    }, []);

    if (localStorage.getItem('isCustomer') == null)
    {
        isCustomer = false;
    }

    console.log(isCustomer);

    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main" style={{backgroundColor:"#f6f9ff"}}>
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
                <div className="">{isCustomer ? <ViewsCustomer/> : <ViewsNoCustomer />}</div>
            </main>
        </>

    )
}

export default UpgradeAccount
