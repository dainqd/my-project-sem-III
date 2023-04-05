import React from 'react'
import Header from '../../../Shared/Admin/Header/Header'
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar'
import { Button, Form, Input, message } from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import insuranceService from '../../../Service/InsuranceService';

function CreateInsurance() {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        var category = document.getElementById("category_id").value;
        var status = document.getElementById("status").value;

        let data = {
            category_id:category,
            name: values.name,
            price: values.price,
            thumbnail: values.thumbnail,
            description: values.description,
            status: status,
        }
        console.log(data)
        await insuranceService.adminCreateInsurance(data)
            .then((res) => {
                console.log("create insurance", res.data)
                message.success("Create insurance success")
                navigate("/insurance/list")
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const Category = [
        {
            id:  1,
            type: "Home Insurance"
        },
        {
            id: 2,
            type: "Life Insurance"
        },
        {
            id:  3,
            type: "Motor Insurance"
        },
        {
            id: 4,
            type: "Medical Insurance"
        }
    ]

    const StatusInsurance = [
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
                    <h1>Create Insurance</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item">Insurance</li>
                            <li className="breadcrumb-item active">Create Insurance</li>
                        </ol>
                    </nav>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Create Insurance</h5>
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
                                            <label htmlFor="validationDefault01" className="form-label">Name</label>
                                            <Form.Item
                                                name="name"
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
                                            <label htmlFor="validationDefault01" className="form-label">Price</label>
                                            <Form.Item
                                                name="price"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your price!',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input allowClear style={{ width: "140%", height: "40px" }} />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault01" className="form-label">Thumbnail</label>
                                            <Form.Item
                                                name="thumbnail"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your thumbnail!',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input allowClear type='text' style={{ width: "140%", height: "40px" }} />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault01" className="form-label">Description</label>
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
                                                <Input allowClear type='text' style={{ width: "140%", height: "40px" }} />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault04" className="form-label">GENDER</label>
                                            <select className="form-select" id="category_id">
                                                {Category.map((item, index) => (
                                                    <option key={index} value={item.id}>
                                                        {item.type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault04" className="form-label">Status</label>
                                            <select className="form-select" id="status">
                                                {
                                                    StatusInsurance.map((status, index) => (
                                                        <option key={index}>
                                                            {status.type}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className="col-12">
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

export default CreateInsurance
