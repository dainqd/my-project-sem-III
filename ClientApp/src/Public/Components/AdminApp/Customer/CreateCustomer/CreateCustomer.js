import React, {useEffect, useState} from 'react'
import Header from '../../../Shared/Admin/Header/Header'
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar'
import { Button, Form, Input, message } from 'antd'
import customerService from '../../../Service/CustomerService';
import {Link, useNavigate} from 'react-router-dom'
import accountService from '../../../Service/AccountService';

function CreateCustomer() {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        var user = document.getElementById("user_id").value;
        var status = document.getElementById("status").value;

        let data = {
            avatar: values.avatar,
            user_id: parseInt(user),
            fullName: values.fullName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            address: values.address,
            status: status,
        }

        console.log(data)
        await customerService.adminCreateCustomer(data)
            .then((res) => {
                console.log("create customer", res.data)
                message.success("Create customer success")
                navigate("/customer/list")
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const [data, setData] = useState([]);

    const getListAccount = async () => {
        await accountService.adminListAccount()
            .then((res) =>{
                if (res.status === 200){
                    console.log("data", res.data)
                    setData(res.data)
                } else {
                    alert('Error')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const StatusCustomer = [
        {
            id:  "ACTIVE",
            type: "ACTIVE"
        },
        {
            id: "INACTIVE",
            type: "INACTIVE"
        }
    ]

    useEffect(() => {
        getListAccount();
    }, []);

    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main" style={{backgroundColor:"#f6f9ff"}}>
                <div className="pagetitle">
                    <h1>Create Customer</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item">Customer</li>
                            <li className="breadcrumb-item active">Create Customer</li>
                        </ol>
                    </nav>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Create Customer</h5>
                                    <Form
                                        name="basic"
                                        labelCol={{
                                            span: 8,
                                        }}
                                        wrapperCol={{
                                            span: 16,
                                        }}
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                        autoComplete="off"
                                        className="row">

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault01" className="form-label">AVATAR</label>
                                            <Form.Item
                                                name="avatar"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your avatar!',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input allowClear style={{ width: "140%", height: "40px" }} />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault01" className="form-label">FULL NAME</label>
                                            <Form.Item
                                                name="fullName"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your name!',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input allowClear style={{ width: "140%", height: "40px" }} />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault01" className="form-label">EMAIL</label>
                                            <Form.Item
                                                name="email"
                                                rules={[
                                                    {
                                                        type: 'email',
                                                        message: 'The input is not valid E-mail!',
                                                    },
                                                    {
                                                        required: true,
                                                        message: 'Please input your E-mail!',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input allowClear style={{ width: "140%", height: "40px" }} />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault01" className="form-label">PHONE NUMBER</label>
                                            <Form.Item
                                                name="phoneNumber"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your phone number!',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input allowClear type='number' style={{ width: "140%", height: "40px" }} />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault01" className="form-label">ADDRESS</label>
                                            <Form.Item
                                                name="address"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your address!',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input allowClear style={{ width: "140%", height: "40px" }} />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault04" className="form-label">USER</label>
                                            <select className="form-select" id="user_id">
                                                {
                                                    data.map((user, index) => (
                                                        <option key={index} value={user.id}>
                                                            {user.username} - {user.firstName} {user.lastName}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault04" className="form-label">STATUS</label>
                                            <select className="form-select" id="status">
                                                {
                                                    StatusCustomer.map((status, index) => (
                                                        <option key={index}>
                                                            {status.type}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className="mt-5 text-center">
                                            <Form.Item>
                                                <Button htmlType="submit" type="primary">Submit form</Button>
                                            </Form.Item>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CreateCustomer
