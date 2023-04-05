import { Button, Form, Input, message } from 'antd';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import insuranceService from '../../../Service/InsuranceService';
import Header from '../../../Shared/Admin/Header/Header';
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar';


function DetailInsurance() {

    const { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const [insure, setData] = useState([]);

    useEffect(() => {
        const detailsInsurance = async () => {
            await insuranceService.adminDetailInsurance(id)
                .then((res) => {
                    console.log("details insurance", res.data);
                    form.setFieldsValue({ id: res.data.id })
                    form.setFieldsValue({ name: res.data.name })
                    form.setFieldsValue({ price: res.data.price });
                    form.setFieldsValue({ thumbnail: res.data.thumbnail })
                    form.setFieldsValue({ description: res.data.description });
                    form.setFieldsValue({ category: res.data.category_id });
                    form.setFieldsValue({ status: res.data.status });
                    setData(res.data);

                })
                .catch((err) => {
                    console.log(err)
                })
        };
        detailsInsurance();
    }, [form, id])

    const onFinish = async (values) => {
        var category = document.getElementById("category_id").value;
        var status = document.getElementById("status").value;

        let updateData = {
            thumbnail: values.thumbnail,
            name: values.name,
            price:  values.price,
            description: values.description,
            category_id: parseInt(category),
            status: status
        }

        console.log(updateData)

        await insuranceService.adminUpdateInsurance(values.id, updateData)
            .then((res) => {
                console.log("data", res.data)
                alert("Update success")
                navigate("/insurance/list")
            })
            .catch((err) => {
                console.log(err)
                message.error("Update error")
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

    console.log(insure.category_id)

    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main" style={{backgroundColor:"#f6f9ff"}}>
                <div className="pagetitle">
                    <h1>Detail Insurance</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item">Insurance</li>
                            <li className="breadcrumb-item active">Detail Insurance</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Detail Insurance</h5>
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
                                                <Input disabled className="form-control"/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                THUMBNAIL
                                            </label>
                                            <Form.Item
                                                name="thumbnail"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your thumbnail!',
                                                    },
                                                ]}>
                                                <Input className="form-control"/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-3">
                                            <label>
                                                NAME
                                            </label>
                                            <Form.Item
                                                name="name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your name!',
                                                    },
                                                ]}
                                            >
                                                <Input  className="form-control"/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-3">
                                            <label>
                                                PRICE
                                            </label>
                                            <Form.Item
                                                name="price"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your price!',
                                                    },
                                                ]}
                                            >
                                                <Input className="form-control"/>
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
                                                <Input className="form-control"/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                CATEGORY
                                            </label>
                                            <div>
                                                <select className="form-select" id="category_id">
                                                    {
                                                        Category.map((item, index) => (
                                                            <option key={index} value={insure.category_id===item.id ? insure.category_id : item.id }
                                                                    selected={insure.category_id===item.id ? "selected" : " " }
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
                                                STATUS
                                            </label>
                                           <div className="">
                                               <select className="form-select" id="status">
                                                   {
                                                       StatusInsurance.map((item, index) => (
                                                           <option key={index} value={item.type}
                                                                   selected={insure.status===item.type ? "selected" : " "}
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
                                            <Button type="primary" htmlType="submit" className="mt-3 ">
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

export default DetailInsurance
