import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import insuranceService from '../Service/InsuranceService';
import Header from "../Shared/Client/Header/Header";
import Navbar from "../Shared/Client/Navbar/Navbar";
import Footer from "../Shared/Client/Footer/Footer";
import Background from '../images/client/carousel-1.jpg';

function Insurance() {
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
            <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
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
            <Footer />
        </div>
    )
}

export default Insurance
