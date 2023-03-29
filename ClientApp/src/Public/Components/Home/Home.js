import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Client/Navbar/Navbar';
import Header from '../Shared/Client/Header/Header';
import Footer from '../Shared/Client/Footer/Footer';
import img_carousel_1 from '../images/client/carousel-1.jpg'
import img_carousel_2 from '../images/client/carousel-2.jpg'
import img_about from '../images/client/about.jpg'
import img_icon_4_pri from '../images/client/icon/icon-04-primary.png'
import img_icon_3_pri from '../images/client/icon/icon-03-primary.png'
import img_profile from '../images/client/profile.jpg'
import img_icon_6_pri from '../images/client/icon/icon-06-primary.png'
import img_icon_7_pri from '../images/client/icon/icon-07-primary.png'
import img_feature from '../images/client/feature.jpg'
import insuranceService from "../Service/InsuranceService";


function Home() {
    // const navigate = useNavigate();
    const [data, setData] = useState([]);
    const list = [];

    const getListInsurance = async () => {
        await insuranceService.listInsurance()
            .then((res) => {
                if (res.status === 200){
                    console.log("data", res.data)
                    // list = res.data;
                    // console.log(list[0].name)
                    console.log(res.data[1])
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

    data.forEach((insure, index) => {
        var link = null;
        link = "/insurances/detail/" + insure.id;
        list.push(
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                <div className="service-item rounded h-100 p-5">
                    <div className="d-flex align-items-center ms-n5 mb-4">
                        <div
                            className="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                        >
                            <img
                                className="img-fluid"
                                src={insure.thumbnail}
                                alt=""
                            />
                        </div>
                        <h4 className="mb-0">
                            {insure.name}
                        </h4>
                    </div>
                    <p className="mb-4">
                        {insure.description}
                    </p>
                    <Link className="btn btn-light px-3" to={link}>Read More</Link>
                </div>
            </div>,
        );
    });

    return (
        <div style={{backgroundColor:"#fff"}}>
            <Header />
            <Navbar />
            <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img className="w-100" src={img_carousel_1} alt="Image" />
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
                            <img className="w-100" src={img_carousel_2} alt="Image" />
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
                                    src={img_about}
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
                                    At FiveSuperHero, we accompany our clients in making decisions about protecting their health,
                                    increasing their assets and planning for the future.
                                    Our digital transformation journey with huge investment in technology to bring innovative hedging solutions
                                    and services to people so that they enjoy better life every day
                                </p>
                                <div className="row g-4 mb-4">
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 me-3"
                                                src={img_icon_4_pri}
                                                alt=""
                                            />
                                            <h5 className="mb-0">Flexible Insurance Plans</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 me-3"
                                                src={img_icon_3_pri}
                                                alt=""
                                            />
                                            <h5 className="mb-0">Money Back Guarantee</h5>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4">
                                    With more than 1.5 million customers,
                                    a team of professional consultants and strategic partners in the distribution
                                    of insurance products and a network of 8000 offices around the world,
                                    FiveSuperHero is proud of its 23-year history as one of the leading
                                    insurance companies world -
                                    Life insurance companies are trusted by the whole world.
                                </p>
                                <div className="border-top mt-4 pt-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="flex-shrink-0 rounded-circle me-3"
                                            src={img_profile}
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
                                <h1 className="text-white mb-4"> FiveSuperHero Financial Group</h1>
                                <p className="text-light mb-5">
                                    FiveSuperHero Financial Group is one of the world's
                                    leading corporations in providing financial services,
                                    operating with a mission to help clients "Make Decisions, Live Life".
                                    Together with our international headquarters in Toronto,
                                    Canada, we provide insurance and financial advisory services,
                                    operating under the Manulife brand in Canada,
                                    Asia and Europe, and John Hancock in the United States.
                                </p>
                                <Link to="" className="align-self-start btn btn-secondary py-3 px-5"
                                >More Details</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 facts-counter wow fadeIn" data-wow-delay="0.2s">
                            <div className="h-100 px-4 pe-lg-0">
                                <div className="row g-5">
                                    <div className="col-sm-6">
                                        <h1 className="display-5" data-toggle="counter-up">6368</h1>
                                        <p className="fs-5 text-primary">Happy Clients</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h1 className="display-5" data-toggle="counter-up">3636</h1>
                                        <p className="fs-5 text-primary">Projects Succeed</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h1 className="display-5" data-toggle="counter-up">1002</h1>
                                        <p className="fs-5 text-primary">Awards Achieved</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h1 className="display-5" data-toggle="counter-up">2010</h1>
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
            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto" style={{maxWidth: "500px"}}>
                        <h1 className="display-6 mb-5">
                            We Provide professional Insurance Services
                        </h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {list}
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
                                        src={img_profile}
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
                                                    style={{color:"#000"}}
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
            
            <Footer />
        </div>
    )
}

export default Home;
