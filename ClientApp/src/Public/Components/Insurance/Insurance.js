import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, message } from 'antd';
import contactService from '../Service/ContactService';
import Header from "../Shared/Client/Header/Header";
import Navbar from "../Shared/Client/Navbar/Navbar";
import Footer from "../Shared/Client/Footer/Footer";
import Background from '../images/client/carousel-1.jpg';

function Contact() {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        var name = document.getElementById("fullname").value;
        var email = document.getElementById("email").value;
        var messages = document.getElementById("message").value;

        let data = {
            fullname: name,
            email: email,
            message: messages
        }
        console.log(data)
        await contactService.sendFeedback(data)
            .then((res) => {
                console.log("send feedback", res.data)
                alert(`Send success! Thanks you very much!`)
                navigate("/contact")
            })
            .catch((err) => {
                console.log(err)
                message.error("Error, Please try again!")
            })
    };

    return (
        <div style={{backgroundColor:"#fff"}}>
            <Header />
            <Navbar />
            <div
                className="container-fluid page-header py-5 mb-5 wow fadeIn" style={{backgroundImage: `url(${Background})`}}
                data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-4 animated slideInDown mb-4">Services</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Services
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>



            <Footer />
        </div>
    )
}

export default Contact
