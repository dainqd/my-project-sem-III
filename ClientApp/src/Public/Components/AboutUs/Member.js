import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import memberService from '../Service/MemberService';
import Countdown from "react-countdown";
import Header from "../Shared/Client/Header/Header";
import Navbar from "../Shared/Client/Navbar/Navbar";
import Footer from "../Shared/Client/Footer/Footer";
import img_about from '../images/client/about.jpg'
import image1 from '../images/client/icon/icon-04-primary.png';
import image2 from '../images/client/icon/icon-03-primary.png';
import image3 from '../images/client/profile.jpg';

function Member() {
    // const navigate = useNavigate();
    const [data, setData] = useState([]);
    const list = [];

    const getListMember = async () => {
        await memberService.listMember()
            .then((res) => {
                if (res.status === 200){
                    console.log("data member", res.data)
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
        getListMember();
    }, []);

    data.forEach((member, index) => {
        list.push(
            <div class="col-lg-2 col-md-6 wow fadeInUp" style={{margin: "auto"}} data-wow-delay="0.3s" key={index}>
                <div className="team-item rounded">
                    <img className="img-fluid" src={member.avatar} alt=""/>
                    <div className="text-center p-4">
                        <h5>{member.fullName}</h5>
                        <span>{member.position}</span>
                    </div>
                    <div className="team-text text-center bg-white p-4">
                        <h5>{member.fullName}</h5>
                        <p>{member.introduce}</p>
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
        );
    });

    return (
        <div style={{backgroundColor:"#fff"}}>
            <Header />
            <Navbar />
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
                                    style={{width: "200px", height: "200px"}}
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
                                                src={image1}
                                                alt=""
                                            />
                                            <h5 className="mb-0">Flexible Insurance Plans</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 me-3"
                                                src={image2}
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
                                            src={image3}
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
                                >More Details</Link
                                >
                            </div>
                        </div>
                        <div className="col-lg-6 facts-counter wow fadeIn" data-wow-delay="0.5s">
                            <div className="h-100 px-4 pe-lg-0">
                                <div className="row g-5">
                                    <div className="col-sm-6">
                                        <h1 className="display-5" data-toggle="counter-up">
                                            6368
                                        </h1>
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
                    <div className="text-center mx-auto" style={{maxWidth: "500px"}}>
                        <h1 className="display-6 mb-5">Meet Our Professional Team Members</h1>
                    </div>
                    <div className="row g-5 mt-5">
                        {list}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Member
