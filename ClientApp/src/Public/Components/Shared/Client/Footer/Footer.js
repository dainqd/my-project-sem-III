import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/client/bannerAsset 1.png'

function Footer() {
    return (
        <div
            className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
            data-wow-delay="0.1s"
        >
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h1 className="text-white mb-4">
                            <img
                                className="img-fluid me-3"
                                src={logo}
                                alt=""
                                style={{width:"80px"}}
                            />Insure
                        </h1>
                        <p>
                            FiveSuperHero Financial Group is one of the world's
                            leading corporations in providing financial services,
                            operating with a mission to help clients "Make Decisions, Live Life"
                        </p>
                        <div className="d-flex pt-2">
                            <Link className="btn btn-square me-1" to=""
                            ><i className="fab fa-twitter"></i
                            ></Link>
                            <Link className="btn btn-square me-1" to=""
                            ><i className="fab fa-facebook-f"></i
                            ></Link>
                            <Link className="btn btn-square me-1" to=""
                            ><i className="fab fa-youtube"></i
                            ></Link>
                            <Link className="btn btn-square me-0" to=""
                            ><i className="fab fa-linkedin-in"></i
                            ></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Address</h5>
                        <p>
                            <i className="fa fa-map-marker-alt me-3"></i>
                            No. 8 Ton That Thuyet, My Dinh Ward, Tu Liem District, Hanoi
                        </p>
                        <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p><i className="fa fa-envelope me-3"></i>support@gmail.com</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Quick Links</h5>
                        <Link className="btn btn-link" to="/about-us">About Us</Link>
                        <Link className="btn btn-link" to="/contact">Contact Us</Link>
                        <Link className="btn btn-link" to="/insurances">Our Services</Link>
                        <Link className="btn btn-link" to="/teams">Terms & Condition</Link>
                        <Link className="btn btn-link" to="/appointment">Support</Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Newsletter</h5>
                        <p>FiveSuperHero Insurance launches “Step To Happiness” campaign to raise awareness about insurance.</p>
                        <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            <input
                                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                                type="text"
                                placeholder="Your email"
                            />
                            <button
                                type="button"
                                className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2"
                            >
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <span className="text-white">&copy;</span> <Link to="#">FiveSupperHero</Link><span className="text-white">, All Right Reserved.</span>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <span className="text-white">Designed By: </span> <Link to="">FiveSupperHero Team Design</Link>
                            <br/><span className="text-white">Distributed By: </span>
                            <Link to="" target="_blank">FiveSupperHero Team Distribute</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
