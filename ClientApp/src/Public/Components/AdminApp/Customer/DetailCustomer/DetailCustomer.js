import { Button, Form, Input, message } from 'antd';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import accountService from '../../../Service/AccountService';
import customerService from '../../../Service/CustomerService';
import Header from '../../../Shared/Admin/Header/Header';
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar';


function DetailCustomer() {

    const { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [cus, setData] = useState([]);

    useEffect(() => {
        const detailsAccount = async () => {
            await customerService.adminDetailCustomer(id)
                .then((res) => {
                    console.log("details customer", res.data);
                    form.setFieldsValue({ id: res.data.id });
                    form.setFieldsValue({ avatar: res.data.avatar });
                    form.setFieldsValue({ user_id: res.data.user_id })
                    form.setFieldsValue({ fullName: res.data.fullName });
                    form.setFieldsValue({ email: res.data.email });
                    form.setFieldsValue({ phoneNumber: res.data.phoneNumber });
                    form.setFieldsValue({ address: res.data.address });
                    form.setFieldsValue({ status: res.data.status });
                    setData(res.data);
                })
                .catch((err) => {
                    console.log(err)
                })
        };
        detailsAccount();
    }, [form, id])


    const onFinish = async (values) => {
        var status = document.getElementById("status").value;
        let updateData = {
            avatar: values.avatar,
            user_id: values.user_id,
            fullName:  values.fullName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            address: values.address,
            status: status
        }
        console.log(updateData)
        await customerService.adminUpdateCustomer(values.id, updateData)
            .then((res) => {
                console.log("data", res.data)
                alert("Update success")
                navigate("/customer/list")
            })
            .catch((err) => {
                console.log(err)
                message.error("Update error")
            })
    };

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

    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main" style={{backgroundColor:"#f6f9ff"}}>
                <div className="pagetitle">
                    <h1>Detail Customer</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item">Customer</li>
                            <li className="breadcrumb-item active">Detail Customer</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Detail Customer</h5>
                                    <Form className="row"
                                          form={form}
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
                                    >
                                        <div className="col-md-2">
                                            <label>
                                                ID
                                            </label>
                                            <Form.Item
                                                name="id">
                                                <Input disabled />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                AVATAR
                                            </label>
                                            <Form.Item
                                                name="avatar"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your avatar!',
                                                    },
                                                ]}>
                                                <Input />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-3">
                                            <label>
                                                USER_ID
                                            </label>
                                            <Form.Item
                                                name="user_id"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your user_id!',
                                                    },
                                                ]}
                                            >
                                                <Input disabled />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-3">
                                            <label>
                                                FULL NAME
                                            </label>
                                            <Form.Item
                                                name="fullName"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your name!',
                                                    },
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>EMAIL</label>
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
                                            >
                                                <Input />
                                            </Form.Item>
                                        </div>
                                        <div className="col-md-4">
                                            <label>
                                                PHONE NUMBER
                                            </label>
                                            <Form.Item
                                                name="phoneNumber"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your phone!',
                                                    },
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                ADDRESS
                                            </label>
                                            <Form.Item
                                                name="address"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your address!',
                                                    },
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                STATUS
                                            </label>
                                            <div className="">
                                                <select className="form-select" id="status">
                                                    {
                                                        StatusCustomer.map((item, index) => (
                                                            <option key={index} value={item.type}
                                                                    selected={cus.status===item.type ? "selected" : " "}
                                                            >
                                                                {item.type}
                                                            </option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <Form.Item
                                            wrapperCol={{
                                                offset: 8,
                                                span: 16,
                                            }}
                                        >
                                            <Button type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                        </Form.Item>
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

export default DetailCustomer
