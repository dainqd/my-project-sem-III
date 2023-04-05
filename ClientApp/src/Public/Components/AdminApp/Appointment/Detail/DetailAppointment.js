import {Link, useNavigate, useParams} from "react-router-dom";
import {Button, Form, Input, message} from "antd";
import React, {useEffect, useState} from "react";
import appointmentService from "../../../Service/AppointmentService";
import Header from "../../../Shared/Admin/Header/Header";
import Sidebar from "../../../Shared/Admin/Sidebar/Sidebar";

function DetailAppointment() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [form] = Form.useForm();

    useEffect(() => {
        const detailsAccount = async () => {
            await appointmentService.adminDetailAppointment(id)
                .then((res) => {
                    console.log("details appointmentService", res.data);
                    form.setFieldsValue({ id: res.data.id })
                    form.setFieldsValue({ fullname: res.data.fullname })
                    form.setFieldsValue({ email: res.data.email });
                    form.setFieldsValue({ phone: res.data.phone });
                    form.setFieldsValue({ insurance: res.data.insurance_id });
                    form.setFieldsValue({ status: res.data.status });
                })
                .catch((err) => {
                    console.log(err)
                })
        };
        detailsAccount();
    }, [form, id])

    const UpdateAppointment = async () => {

        var status = document.getElementById("status").value;
        // let status = values.status;
        console.log(status);

        await appointmentService.adminUpdateAppointment(id, status)
            .then((res) => {
                console.log("update", id, status)
                alert("Update appointment success!")
                navigate('/appointment/list')
            })
            .catch((err) => {
                console.log(err)
                message.error("Error! Please try again...")
            })
    };

    const status = [
        {
            id: "ACTIVE",
            "type": "ACTIVE"
        },
        {
            id: "SUCCESS",
            "type": "SUCCESS"
        },

    ]

    const [value, setValue] = useState({
        status: status
    })


    const handleChange = prop => event => {
        setValue({ ...value, [prop]: event.target.value });
    }

    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main" style={{backgroundColor:"#f6f9ff"}}>
                <div className="pagetitle">
                    <h1>Detail Appointment</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item">Appointment</li>
                            <li className="breadcrumb-item active">Detail Appointment</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Detail Appointment</h5>
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
                                          onFinish={UpdateAppointment}
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

                                        <div className="col-md-3">
                                            <label>
                                                FULL NAME
                                            </label>
                                            <Form.Item
                                                name="fullname">
                                                <Input disabled />
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                EMAIL
                                            </label>
                                            <Form.Item name="email">
                                                <Input disabled/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                PHONE NUMBER
                                            </label>
                                            <Form.Item
                                                name="phone">
                                                <Input disabled/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                               TYPE INSURANCE
                                            </label>
                                            <Form.Item
                                                name="insurance">
                                                <Input disabled/>
                                            </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                            <label>
                                                STATUS
                                            </label>
                                            <Form.Item
                                                name="status">
                                                {/*<select className="form-select" id="status">*/}
                                                {/*    {*/}
                                                {/*        status.map((item, index) => (*/}
                                                {/*            <option key={index} value={value.status} onChange={handleChange("status")}>*/}
                                                {/*                {item.id}*/}
                                                {/*            </option>*/}
                                                {/*        ))*/}
                                                {/*    }*/}
                                                {/*</select>*/}
                                                <select className="form-select" id='status'>
                                                    <option value="ACTIVE">ACTIVE</option>
                                                    <option value="SUCCESS">SUCCESS</option>
                                                </select>
                                            </Form.Item>
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

export default DetailAppointment