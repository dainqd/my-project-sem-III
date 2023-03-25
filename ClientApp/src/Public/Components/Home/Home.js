import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Client/Navbar/Navbar';
import Header from '../Shared/Client/Header/Header';
import Footer from '../Shared/Client/Footer/Footer'
import "./Home.scss"

function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img className="w-100" src="" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <h1 className="display-3 text-dark mb-4 animated slideInDown">
                                                Insurance Creates Wealth For Everyone
                                            </h1>
                                            <p className="fs-5 text-body mb-5">
                                                Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                                                duo justo magna dolore erat amet
                                            </p>
                                            <Link to="" className="btn btn-primary py-3 px-5"
                                            >More Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img className="w-100" src="" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <h1 className="display-3 text-dark mb-4 animated slideInDown">
                                                The Best Insurance Begins Here
                                            </h1>
                                            <p className="fs-5 text-body mb-5">
                                                Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                                                duo justo magna dolore erat amet
                                            </p>
                                            <Link to="" className="btn btn-primary py-3 px-5"
                                            >More Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#header-carousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#header-carousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
           
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div
                                className="position-relative overflow-hidden rounded ps-5 pt-5 h-100"
                                style={{minHeight: "400px"}}
                            >
                                <img
                                    className="position-absolute w-100 h-100"
                                    src="img/about.jpg"
                                    alt=""
                                    style={{objectFit: "cover"}}
                                />
                                <div
                                    className="position-absolute top-0 start-0 bg-white rounded pe-3 pb-3"
                                    style={{width: "200px" ,height: "200px"}}
                                >
                                    <div
                                        className="d-flex flex-column justify-content-center text-center bg-primary rounded h-100 p-3"
                                    >
                                        <h1 className="text-white mb-0">25</h1>
                                        <h2 className="text-white">Years</h2>
                                        <h5 className="text-white mb-0">Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <h1 className="display-6 mb-5">
                                    We're Here To Assist You With Exploring Protection
                                </h1>
                                <p className="fs-5 text-primary mb-4">
                                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet
                                    lorem sit clita duo justo erat amet
                                </p>
                                <div className="row g-4 mb-4">
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 me-3"
                                                src="img/icon/icon-04-primary.png"
                                                alt=""
                                            />
                                            <h5 className="mb-0">Flexible Insurance Plans</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 me-3"
                                                src="img/icon/icon-03-primary.png"
                                                alt=""
                                            />
                                            <h5 className="mb-0">Money Back Guarantee</h5>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4">
                                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                                    sed stet lorem sit clita duo justo magna dolore erat amet
                                </p>
                                <div className="border-top mt-4 pt-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 rounded-circle me-3"
                                            src="img/profile.jpg"
                                            alt=""
                                        />
                                        <h5 className="mb-0">Call Us: +012 345 6789</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid overflow-hidden my-5 px-lg-0">
                <div className="container facts px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 facts-text wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 px-4 ps-lg-0">
                                <h1 className="text-white mb-4">For Individuals And Organisations</h1>
                                <p className="text-light mb-5">
                                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                                    sed stet lorem sit clita duo justo magna dolore erat amet
                                </p>
                                <Link to="" className="align-self-start btn btn-secondary py-3 px-5"
                                >More Details</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 facts-counter wow fadeIn" data-wow-delay="0.5s">
                            <div className="h-100 px-4 pe-lg-0">
                                <div className="row g-5">
                                    <div className="col-sm-6">
                                        <h1 className="display-5" data-toggle="counter-up">1234</h1>
                                        <p className="fs-5 text-primary">Happy Clients</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h1 className="display-5" data-toggle="counter-up">1234</h1>
                                        <p className="fs-5 text-primary">Projects Succeed</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h1 className="display-5" data-toggle="counter-up">1234</h1>
                                        <p className="fs-5 text-primary">Awards Achieved</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h1 className="display-5" data-toggle="counter-up">1234</h1>
                                        <p className="fs-5 text-primary">Team Members</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="display-6 mb-5">Few Reasons Why People Choosing Us!</h1>
                            <p className="mb-4">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                                lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="bg-light rounded h-100 p-3">
                                        <div
                                            className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3"
                                        >
                                            <img
                                                className="align-self-center mb-3"
                                                src="img/icon/icon-06-primary.png"
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
                                                src="img/icon/icon-03-primary.png"
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
                                                src="img/icon/icon-04-primary.png"
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
                                                src="img/icon/icon-07-primary.png"
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
                                    src="img/feature.jpg"
                                    alt=""
                                    style={{objectFit: "cover"}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto" style={{maxWidth: "500px"}}>
                        <h1 className="display-6 mb-5">
                            We Provide professional Insurance Services
                        </h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded h-100 p-5">
                                <div className="d-flex align-items-center ms-n5 mb-4">
                                    <div
                                        className="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                                    >
                                        <img
                                            className="img-fluid"
                                            src="img/icon/icon-10-light.png"
                                            alt=""
                                        />
                                    </div>
                                    <h4 className="mb-0">Life Insurance</h4>
                                </div>
                                <p className="mb-4">
                                    Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem
                                    sit clita duo justo erat amet
                                </p>
                                <Link className="btn btn-light px-3" to="">Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded h-100 p-5">
                                <div className="d-flex align-items-center ms-n5 mb-4">
                                    <div
                                        className="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                                    >
                                        <img
                                            className="img-fluid"
                                            src="img/icon/icon-01-light.png"
                                            alt=""
                                        />
                                    </div>
                                    <h4 className="mb-0">Health Insurance</h4>
                                </div>
                                <p className="mb-4">
                                    Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem
                                    sit clita duo justo erat amet
                                </p>
                                <Link className="btn btn-light px-3" to="">Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded h-100 p-5">
                                <div className="d-flex align-items-center ms-n5 mb-4">
                                    <div
                                        className="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                                    >
                                        <img
                                            className="img-fluid"
                                            src="img/icon/icon-05-light.png"
                                            alt=""
                                        />
                                    </div>
                                    <h4 className="mb-0">Home Insurance</h4>
                                </div>
                                <p className="mb-4">
                                    Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem
                                    sit clita duo justo erat amet
                                </p>
                                <Link className="btn btn-light px-3" to="">Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded h-100 p-5">
                                <div className="d-flex align-items-center ms-n5 mb-4">
                                    <div
                                        className="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                                    >
                                        <img
                                            className="img-fluid"
                                            src="img/icon/icon-08-light.png"
                                            alt=""
                                        />
                                    </div>
                                    <h4 className="mb-0">Vehicle Insurance</h4>
                                </div>
                                <p className="mb-4">
                                    Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem
                                    sit clita duo justo erat amet
                                </p>
                                <Link className="btn btn-light px-3" to="">Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded h-100 p-5">
                                <div className="d-flex align-items-center ms-n5 mb-4">
                                    <div
                                        className="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                                    >
                                        <img
                                            className="img-fluid"
                                            src="img/icon/icon-07-light.png"
                                            alt=""
                                        />
                                    </div>
                                    <h4 className="mb-0">Business Insurance</h4>
                                </div>
                                <p className="mb-4">
                                    Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem
                                    sit clita duo justo erat amet
                                </p>
                                <Link className="btn btn-light px-3" to="">Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded h-100 p-5">
                                <div className="d-flex align-items-center ms-n5 mb-4">
                                    <div
                                        className="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                                    >
                                        <img
                                            className="img-fluid"
                                            src="img/icon/icon-06-light.png"
                                            alt=""
                                        />
                                    </div>
                                    <h4 className="mb-0">Property Insurance</h4>
                                </div>
                                <p className="mb-4">
                                    Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem
                                    sit clita duo justo erat amet
                                </p>
                                <Link className="btn btn-light px-3" to="">Read More</Link>
                            </div>
                        </div>
                    </div>
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
                                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
                                stet lorem sit clita duo justo magna dolore erat amet. Tempor erat
                                elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                                diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                clita duo justo magna.
                            </p>
                            <div className="bg-white rounded p-3">
                                <div className="d-flex align-items-center bg-primary rounded p-3">
                                    <img
                                        className="flex-shrink-0 rounded-circle me-3"
                                        src="img/profile.jpg"
                                        alt=""
                                    />
                                    <h5 className="text-white mb-0">Call Us: +012 345 6789</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="bg-white rounded p-5">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="gname"
                                                    placeholder="Gurdian Name"
                                                />
                                                <label for="gname">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="gmail"
                                                    placeholder="Gurdian Email"
                                                />
                                                <label for="gmail">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cname"
                                                    placeholder="Child Name"
                                                />
                                                <label for="cname">Your Mobile</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cage"
                                                    placeholder="Child Age"
                                                />
                                                <label for="cage">Service Type</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                      <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{height: "80px"}}
                      ></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary py-3 px-5" type="submit">
                                                Get Appointment
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto" style={{maxWidth: "500px"}}>
                        <h1 className="display-6 mb-5">Meet Our Professional Team Members</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                                <div className="text-center p-4">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-text text-center bg-white p-4">
                                    <h5>Full Name</h5>
                                    <p>Designation</p>
                                    <div className="d-flex justify-content-center">
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-twitter"></i
                                        ></Link>
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-facebook-f"></i
                                        ></Link>
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-youtube"></i
                                        ></Link>
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-linkedin-in"></i
                                        ></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                                <div className="text-center p-4">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-text text-center bg-white p-4">
                                    <h5>Full Name</h5>
                                    <p>Designation</p>
                                    <div className="d-flex justify-content-center">
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-twitter"></i
                                        ></Link>
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-facebook-f"></i
                                        ></Link>
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-youtube"></i
                                        ></Link>
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-linkedin-in"></i
                                        ></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                                <div className="text-center p-4">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-text text-center bg-white p-4">
                                    <h5>Full Name</h5>
                                    <p>Designation</p>
                                    <div className="d-flex justify-content-center">
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-twitter"></i
                                        ></Link>
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-facebook-f"></i
                                        ></Link>
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-youtube"></i
                                        ></Link>
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-linkedin-in"></i
                                        ></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="img/team-4.jpg" alt="" />
                                <div className="text-center p-4">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-text text-center bg-white p-4">
                                    <h5>Full Name</h5>
                                    <p>Designation</p>
                                    <div className="d-flex justify-content-center">
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-twitter"></i
                                        ></Link>
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-facebook-f"></i
                                        ></Link>
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-youtube"></i
                                        ></Link>
                                        <Link className="btn btn-square btn-light m-1" to=""
                                        ><i className="fab fa-linkedin-in"></i
                                        ></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto" style={{maxWidth: "500px"}}>
                        <h1 className="display-6 mb-5">What They Say About Our Insurance</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="testimonial-left h-100">
                                <img
                                    className="img-fluid animated pulse infinite"
                                    src="img/testimonial-1.jpg"
                                    alt=""
                                />
                                <img
                                    className="img-fluid animated pulse infinite"
                                    src="img/testimonial-2.jpg"
                                    alt=""
                                />
                                <img
                                    className="img-fluid animated pulse infinite"
                                    src="img/testimonial-3.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="testimonial-item text-center">
                                    <img
                                        className="img-fluid rounded mx-auto mb-4"
                                        src="img/testimonial-1.jpg"
                                        alt=""
                                    />
                                    <p className="fs-5">
                                        Dolores sed duo clita tempor justo dolor et stet lorem kasd
                                        labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                                        et labore et tempor diam tempor erat.
                                    </p>
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="testimonial-item text-center">
                                    <img
                                        className="img-fluid rounded mx-auto mb-4"
                                        src="img/testimonial-2.jpg"
                                        alt=""
                                    />
                                    <p className="fs-5">
                                        Dolores sed duo clita tempor justo dolor et stet lorem kasd
                                        labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                                        et labore et tempor diam tempor erat.
                                    </p>
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="testimonial-item text-center">
                                    <img
                                        className="img-fluid rounded mx-auto mb-4"
                                        src="img/testimonial-3.jpg"
                                        alt=""
                                    />
                                    <p className="fs-5">
                                        Dolores sed duo clita tempor justo dolor et stet lorem kasd
                                        labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                                        et labore et tempor diam tempor erat.
                                    </p>
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="testimonial-right h-100">
                                <img
                                    className="img-fluid animated pulse infinite"
                                    src="img/testimonial-1.jpg"
                                    alt=""
                                />
                                <img
                                    className="img-fluid animated pulse infinite"
                                    src="img/testimonial-2.jpg"
                                    alt=""
                                />
                                <img
                                    className="img-fluid animated pulse infinite"
                                    src="img/testimonial-3.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Home;
