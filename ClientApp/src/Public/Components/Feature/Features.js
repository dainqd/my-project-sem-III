import React from 'react'
import Header from "../Shared/Client/Header/Header";
import Navbar from "../Shared/Client/Navbar/Navbar";
import img_icon_4_pri from "../images/client/icon/icon-04-primary.png";
import img_icon_3_pri from "../images/client/icon/icon-03-primary.png";
import img_icon_6_pri from "../images/client/icon/icon-06-primary.png";
import img_icon_7_pri from "../images/client/icon/icon-07-primary.png";
import img_feature from "../images/client/feature.jpg";
import Footer from "../Shared/Client/Footer/Footer";
import Background from "../images/client/carousel-1.jpg";
import {Link} from "react-router-dom";


function Features() {

    return (
        <div style={{backgroundColor: "#fff"}}>
            <Header/>
            <Navbar/>
            <div
                className="container-fluid page-header py-5 mb-5 wow fadeIn" style={{backgroundImage: `url(${Background})`}}
                data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-4 animated slideInDown mb-4">Features</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Features
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="display-6 mb-5">Few Reasons Why People Choosing Us!</h1>
                            <p className="mb-4">
                                One of FiveSuperHero's priorities in the recently introduced 'Spread Impact'
                                program is to open inclusive economic opportunities for all,
                                promoting the upward mobility of minorities.
                                and make financial solutions more accessible.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="bg-light rounded h-100 p-3">
                                        <div
                                            className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3"
                                        >
                                            <img
                                                className="align-self-center mb-3"
                                                src={img_icon_6_pri}
                                                alt=""
                                            />
                                            <h5 className="mb-0">Easy Process</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                    <div className="bg-light rounded h-100 p-3">
                                        <div
                                            className="bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3"
                                        >
                                            <img
                                                className="align-self-center mb-3"
                                                src={img_icon_3_pri}
                                                alt=""
                                            />
                                            <h5 className="mb-0">Fast Delivery</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="bg-light rounded h-100 p-3">
                                        <div
                                            className="bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3"
                                        >
                                            <img
                                                className="align-self-center mb-3"
                                                src={img_icon_4_pri}
                                                alt=""
                                            />
                                            <h5 className="mb-0">Policy Controlling</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                    <div className="bg-light rounded h-100 p-3">
                                        <div
                                            className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3"
                                        >
                                            <img
                                                className="align-self-center mb-3"
                                                src={img_icon_7_pri}
                                                alt=""
                                            />
                                            <h5 className="mb-0">Money Saving</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div
                                className="position-relative rounded overflow-hidden h-100"
                                style={{minHeight: "400px"}}
                            >
                                <img
                                    className="position-absolute w-100 h-100"
                                    src={img_feature}
                                    alt=""
                                    style={{objectFit: "cover"}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Features
