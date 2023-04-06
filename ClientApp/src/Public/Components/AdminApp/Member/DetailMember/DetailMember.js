import { Button, Form, Input, message } from 'antd';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import memberService from '../../../Service/MemberService';
import Header from '../../../Shared/Admin/Header/Header';
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar';


function DetailMember() {

    const { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [member, setData] = useState([]);

    useEffect(() => {
        const detailsMember = async () => {
            await memberService.adminDetailMember(id)
                .then((res) => {
                    console.log("details member", res.data);
                    form.setFieldsValue({ id: res.data.id })
                    form.setFieldsValue({ avatar: res.data.avatar })
                    form.setFieldsValue({ fullName: res.data.fullName });
                    form.setFieldsValue({ position: res.data.position })
                    form.setFieldsValue({ email: res.data.email });
                    form.setFieldsValue({ phoneNumber: res.data.phoneNumber });
                    form.setFieldsValue({ birthday: res.data.birthday });
                    form.setFieldsValue({ gender: res.data.gender });
                    form.setFieldsValue({ introduce: res.data.introduce });
                    form.setFieldsValue({ description: res.data.description });
                    form.setFieldsValue({ status: res.data.status });
                    setData(res.data);
                })
                .catch((err) => {
                    console.log(err)
                })
        };
        detailsMember();
    }, [form, id])


    const onFinish = async (values) => {
        let gender = document.getElementById("gender").value;
        let status = document.getElementById("status").value;

        let updateData = {
            avatar: values.avatar,
            fullName: values.fullName,
            position:  values.position,
            email: values.email,
            phoneNumber:  values.phoneNumber,
            birthday: values.birthday,
            gender: gender,
            introduce: values.introduce,
            description: values.description,
            status: status
        }
        await memberService.adminUpdateMember(values.id, updateData)
            .then((res) => {
                console.log("data", res.data)
                alert("Update success")
                navigate("/member/list")
            })
            .catch((err) => {
                console.log(err)
                message.error("Update error")
            })
    };

    const gender = [
        {
            id: "MALE",
            type: "MALE"
        },
        {
            id: "FEMALE",
            type: "FEMALE"
        },
        {
            id: "OTHER",
            type: "OTHER"
        },

    ]

    const status = [
        {
            id: "ACTIVE",
            type: "ACTIVE"
        },
        {
            id: "INACTIVE",
            type: "INACTIVE"
        },

    ]

    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main" style={{backgroundColor:"#f6f9ff"}}>
                <div className="pagetitle">
                    <h1>Detail Member</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item">Member</li>
                            <li className="breadcrumb-item active">Detail Member</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Detail Member</h5>
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

                                        <div className="col-md-6">
                                            <label>
                                                AVATAR
                                            </label>
                                            <Form.Item
                                                name="avatar">
                                                <Input  />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                FULLNAME
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
                                            <label>
                                                POSITION
                                            </label>
                                            <Form.Item
                                                name="position"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your position!',
                                                    },
                                                ]}>
                                                <Input />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                EMAIL
                                            </label>
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
                                                       ]}>
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
                                                BIRTHDAY
                                            </label>
                                            <Form.Item
                                                name="birthday"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your name!',
                                                    },
                                                ]}
                                            >
                                                <Input type='data'/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                GENDER
                                            </label>
                                            <div>
                                                <select className="form-select form-control" id="gender">
                                                    {
                                                        gender.map((item, index) => (
                                                            <option key={index} value={member.gender===item.id ? member.gender : item.id }
                                                                    selected={member.gender===item.id ? "selected" : " " }
                                                            >
                                                                {item.type}
                                                            </option>
                                                        ))
                                                    }
                                                </select>
                                            </div>

                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                INTRODUCE
                                            </label>
                                            <Form.Item
                                                name="introduce"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your introduce!',
                                                    },
                                                ]}
                                            >
                                                <Input  />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                DESCRIPTION
                                            </label>
                                            <Form.Item
                                                name="description"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your description!',
                                                    },
                                                ]}
                                            >
                                                <Input  />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                STATUS
                                            </label>
                                            <div className="">
                                                <select className="form-select" id="status">
                                                    {
                                                        status.map((item, index) => (
                                                            <option key={index} value={item.type}
                                                                    selected={member.status===item.type ? "selected" : " "}
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

export default DetailMember
