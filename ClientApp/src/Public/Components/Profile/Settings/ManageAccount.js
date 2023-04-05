import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import accountService from "../../Service/AccountService";
import {Form, message} from "antd";

function ChangeStatus() {
    const navigate = useNavigate();
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

    const changeStatus = async (values) => {
        let id = sessionStorage.getItem('id');

        var status = document.getElementById("option-status").value;

        // let data = {
        //     status: status
        // }

        await accountService.changeStatus(id, status)
            .then((res) => {
                console.log("change status", res.data)
                alert("Change status success!")
                navigate('/login')
            })
            .catch((err) => {
                console.log(err)
                message.error("Change status error! Please try again")
            })
    };

    useEffect(() => {
        isUser();
    }, []);

    return (
        <div>
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
                <Form className="row g-3">
                    <div className="col-md-4">
                        <label className="">Choose status for your account!</label>
                        <div className="text-danger">If you choose to make a change,
                            you won't be able to undo it</div>
                        <div className="text-warning mb-3">Please think carefully before doing this...</div>
                        <div className="mb-3">
                            <select className="form-select form-control" id="option-status" aria-label="State">
                                <option value="0">Status</option>
                                <option value="2">BLOCKED</option>
                                <option value="4"><span className="text-danger">DELETED</span></option>
                            </select>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mb-3" data-toggle="modal" data-target="#changeStatus">Submit</button>
                    </div>
                </Form>
            </main>

            <div className="modal fade" id="changeStatus" tabIndex="-1" role="dialog"
                 aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Change Status</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5 className="text-center">Are you sure with your choice?</h5>
                            <Form id="change-status-form" onFinish={changeStatus}>
                                <div className="d-flex justify-content-around">
                                    <button type="submit" className="btn w-25 btn-danger">Delete</button>
                                    <button type="button" className="btn w-25 btn-secondary" data-dismiss="modal">Back
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeStatus
