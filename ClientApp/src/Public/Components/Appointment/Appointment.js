import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Form, message } from 'antd';
import appointmentService from "../Service/AppointmentService";
import Header from "../Shared/Client/Header/Header";
import Navbar from "../Shared/Client/Navbar/Navbar";
import img_profile from "../images/client/profile.jpg";
import Footer from "../Shared/Client/Footer/Footer";
import Background from "../images/client/carousel-1.jpg";
import insuranceService from "../Service/InsuranceService";
import WOW from 'wowjs';
function Appointment() {
    const [data, setData] = useState([]);
    const list = [];

    const getListInsurance = async () => {
        await insuranceService.listInsurance()
            .then((res) => {
                if (res.status === 200){
                    console.log("data", res.data)
                    setData(res.data)
                } else {
                    alert('Error')
                }
            })
            .catch((err) => {
                console.log(err)
                alert("Error, Please try again!")
            })
    };

    useEffect(() => {
        getListInsurance();
    }, []);
     useEffect(() => {
     new WOW.WOW().init();
     }, []);
    data.forEach((insure, index) => {
        list.push(
            <option value={insure.id} key={index}>{insure.name}</option>
        );
    });


    const onFinish = async (values) => {
        var fullName = document.getElementById("fullname").value;
        var email = document.getElementById("gmail").value;
        var messages = document.getElementById("message").value;
        var insuranceId = document.getElementById("insurance").value;
        var phoneNumber = document.getElementById("phonenumber").value;

        if (fullName == null || email == null || phoneNumber == null || insuranceId == null){
            message.error("Error, Please try again!")
        }

        let data = {
            fullname: fullName,
            insurance_id: insuranceId,
            email: email,
            phone: phoneNumber,
            message: messages
        }
        await appointmentService.createAppointment(data)
            .then((res) => {
                console.log("Appointment", res.data)
                alert('Thank you for trusting us!')
            })
            .catch((err) => {
                console.log(err)
                message.error("Error, Please try again!")
            })
    };

    return (
        <div style={{backgroundColor: "#fff"}}>
            <Header/>
            <Navbar/>

            <div
                className="container-fluid page-header py-5 mb-5 wow fadeIn" style={{backgroundImage: `url(${Background})`}}
                data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-4 animated slideInDown mb-4">Appointment</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Appointment
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div
                className="container-fluid appointment my-5 py-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                            <h1 className="display-6 text-white mb-5">
                                We're Award Winning Insurance Company
                            </h1>
                            <p className="text-white mb-5">
                                The purpose of FiveSuperHero is to help people achieve the best in life.
                                FiveSuperHero provides a comprehensive healthcare solution at a reasonable cost,
                                helping to protect finances and increase assets,
                                and help people plan energy savings for life goals.
                            </p>
                            <div className="bg-white rounded p-3">
                                <div className="d-flex align-items-center bg-primary rounded p-3">
                                    <img
                                        className="flex-shrink-0 rounded-circle me-3"
                                        src={img_profile}
                                        alt=""
                                    />
                                    <h5 className="text-white mb-0">Call Us: +012 345 6789</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="bg-white rounded p-5">
                                <Form onFinish={onFinish}>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label htmlFor="gname">Your Name: </label>
                                            <div className="">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fullname"
                                                    placeholder="Your Name"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="gmail">Your Email: </label>
                                            <div className="">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="gmail"
                                                    placeholder="Your Email"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="cname">Your Mobile: </label>
                                            <div className="">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="phonenumber"
                                                    placeholder="Your Name"
                                                     style={{color: "#000"}}
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="cage">Service Type: </label>
                                            <div className="">
                                                <select id="insurance" className="form-control">
                                                    {list}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="message">Message: </label>
                                            <div className="">
                      <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{height: "80px"}}
                          required=""
                      ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary py-3 px-5" type="submit">
                                                Get Appointment
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Appointment
