import React from 'react'
import Header from '../../../Shared/Admin/Header/Header'
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar'
import { Button, Form, Input, } from 'antd'
import { DatePicker, Space } from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import memberService from '../../../Service/MemberService';

function CreateMember() {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        let birthday = document.getElementById("birthday").value;
        let gender = document.getElementById("gender").value;
        let status = document.getElementById("status").value;

        let data = {
            avatar: values.avatar,
            fullName: values.fullName,
            position:  values.position,
            email: values.email,
            phoneNumber:  values.phoneNumber,
            birthday: birthday,
            gender: gender,
            introduce: values.introduce,
            description: values.description,
            status:status
        }

        await memberService.adminCreateMember(data)
            .then((res) => {
                console.log("create member", res.data)
                alert("Create member success")
                navigate("/member/list")
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const Gender = [
        {
            id: "MALE",
            gender: "MALE"
        },
        {
            id: "FEMALE",
            gender: "FEMALE"
        },
        {
            id: "OTHER",
            gender: "OTHER"
        },
    ]

    const StatusMember = [
        {
            id:  "ACTIVE",
            type: "ACTIVE"
        },
        {
            id: "INACTIVE",
            type: "INACTIVE"
        }
    ]

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };


    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main" style={{backgroundColor:"#f6f9ff"}}>
                <div className="pagetitle">
                    <h1>Create Member</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item">Member</li>
                            <li className="breadcrumb-item active">Create Member</li>
                        </ol>
                    </nav>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Create Member</h5>
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
                                            <label htmlFor="validationDefault01" className="form-label">POSITION</label>
                                            <Form.Item
                                                name="position"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your position!',
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
                                            <label htmlFor="validationDefault04" className="form-label">BirthDay</label>
                                            <div>
                                                <Space direction="vertical">
                                                    <DatePicker id="birthday" name='birthday' onChange={onChange} style={{ width: "230%", height: "40px" }} />
                                                </Space>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault04" className="form-label">GENDER</label>
                                            <select className="form-select" id="gender">
                                                {Gender.map((item, index) => (
                                                    <option key={index}>
                                                        {item.gender}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault01" className="form-label">INTRODUCE</label>
                                            <Form.Item
                                                name="introduce"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your introduce!',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input allowClear style={{ width: "140%", height: "40px" }} />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault01" className="form-label">DESCRIPTION</label>
                                            <Form.Item
                                                name="description"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your description!',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input allowClear style={{ width: "140%", height: "40px" }} />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault04" className="form-label">Status</label>
                                            <select className="form-select" id="status">
                                                {
                                                    StatusMember.map((status, index) => (
                                                        <option key={index}>
                                                            {status.type}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className="col-12 mt-5">
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

export default CreateMember
