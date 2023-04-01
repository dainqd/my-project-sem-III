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

    const onFinish = async () => {
        var name = document.getElementById("fullname").value;
        var email = document.getElementById("email").value;
        var messages = document.getElementById("message").value;

        if (name == null || email == null){
            message.error("Error, Please try again!")
        }

        let data = {
            fullname: name,
            email: email,
            message: messages
        }

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
                    <h1 className="display-4 animated slideInDown mb-4">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Contact Us
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <h1 className="display-6 mb-5">
                                If You Have Any Query, Please Contact Us
                            </h1>
                            <p className="mb-4">
                                If you have something to say to us,
                                please leave your complete information in the form below,
                                FiveSuperHero always listens and understands you like a family.
                            </p>
                            <Form onFinish={onFinish}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                id="fullname"
                                                className="form-control"
                                                placeholder="Your Name"
                                                required=""
                                                style={{border: "2px solid #ccc",
                                                    borderRadius: "16px"}}
                                            />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Your Email"
                                                style={{border: "2px solid #ccc",
                                                    borderRadius: "16px"}}
                                            />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        name="message"
                        id="message"
                        style={{height: "100px"}}
                        required=""
                        style={{border: "2px solid #ccc",
                            borderRadius: "16px"}}
                    ></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary py-3 px-5" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div
                            className="col-lg-6 wow fadeIn"
                            data-wow-delay="0.5s"
                            style={{minHeight: "450px"}}
                        >
                            <div className="position-relative rounded overflow-hidden h-100">
                                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                                <iframe
                                    className="position-relative w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.427333053084!2d105.78008039576488!3d21.028786536401384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab86cece9ac1%3A0xa9bc04e04602dd85!2zRlBUIEFwdGVjaCBIw6AgTuG7mWkgLSBI4buHIFRo4buRbmcgxJDDoG8gVOG6oW8gTOG6rXAgVHLDrG5oIFZpw6puIFF14buRYyBU4bq_IChTaW5jZSAxOTk5KQ!5e0!3m2!1svi!2s!4v1663265824419!5m2!1svi!2s"
                                    frameBorder="0"
                                    style={{minHeight: "450px", border: "0"}}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
