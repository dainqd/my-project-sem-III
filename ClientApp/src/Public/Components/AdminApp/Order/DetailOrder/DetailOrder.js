import { Button, Form, Input, message } from 'antd';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import orderService from '../../../Service/OrderService';
import Header from '../../../Shared/Admin/Header/Header';
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar';


function DetailOrder() {

    const { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const [order, setData] = useState([]);

    useEffect(() => {
        const detailOrder = async () => {
            await orderService.adminDetailOrder(id)
                .then((res) => {
                    console.log("details order", res.data);
                    form.setFieldsValue({ id: res.data.id })
                    form.setFieldsValue({ name: res.data.name })
                    form.setFieldsValue({ phoneNumber: res.data.phoneNumber })
                    form.setFieldsValue({ totalMoney: res.data.totalMoney });
                    form.setFieldsValue({ address: res.data.address })
                    form.setFieldsValue({ customer_id: res.data.customer_id });
                    form.setFieldsValue({ insurance_id: res.data.insurance_id });
                    form.setFieldsValue({ status: res.data.status });
                    setData(res.data);

                })
                .catch((err) => {
                    console.log(err)
                })
        };
        detailOrder();
    }, [form, id])

    const onFinish = async (values) => {
        var status = document.getElementById("status").value;

        let updateData = {
            name: values.name,
            phoneNumber: values.phoneNumber,
            totalMoney:  parseFloat(values.totalMoney),
            address: values.address,
            customer_id: parseInt(values.customer_id),
            insurance_id: parseInt(values.insurance_id),
            status: status
        }

        console.log(updateData)

        await orderService.adminUpdateOrder(values.id, updateData)
            .then((res) => {
                console.log("data", res.data)
                alert("Update success")
                navigate("/order/list")
            })
            .catch((err) => {
                console.log(err)
                message.error("Update error")
            })
    };

    const StatusOrder = [
        {
            id:  "PREPARING",
            type: "PREPARING"
        },
        {
            id: "DELIVERY",
            type: "DELIVERY"
        },
        {
            id:  "SUCCESS",
            type: "SUCCESS"
        },
        {
            id: "FAIL",
            type: "FAIL"
        }
    ]

    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main" style={{backgroundColor:"#f6f9ff"}}>
                <div className="pagetitle">
                    <h1>Detail Order</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item">Order</li>
                            <li className="breadcrumb-item active">Detail Order</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Detail Order</h5>
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
                                                NAME
                                            </label>
                                            <Form.Item
                                                name="name">
                                                <Input disabled className="form-control"/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-3">
                                            <label>
                                                PHONE NUMBER
                                            </label>
                                            <Form.Item
                                                name="phoneNumber" >
                                                <Input disabled className="form-control"/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-3">
                                            <label>
                                                TOTAL MONEY
                                            </label>
                                            <Form.Item
                                                name="totalMoney">
                                                <Input disabled className="form-control"/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                ADDRESS
                                            </label>
                                            <Form.Item
                                                name="address">
                                                <Input disabled className="form-control"/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                CUSTOMER_ID
                                            </label>
                                            <Form.Item
                                                name="customer_id">
                                                <Input className="form-control" disabled/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                INSURANCE
                                            </label>
                                            <Form.Item
                                                name="insurance_id">
                                                <Input className="form-control" disabled/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                STATUS
                                            </label>
                                            <div className="">
                                                <select className="form-select" id="status">
                                                    {
                                                        StatusOrder.map((item, index) => (
                                                            <option key={index} value={item.type}
                                                                    selected={order.status===item.type ? "selected" : " "}
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

export default DetailOrder
