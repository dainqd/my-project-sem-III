import {Form, } from 'antd';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import insuranceService from '../Service/InsuranceService';
import accountService from '../Service/AccountService';
import orderService from '../Service/OrderService';
import Header from "../Shared/Client/Header/Header";
import Navbar from "../Shared/Client/Navbar/Navbar";
import Background from "../images/client/carousel-1.jpg";
import Footer from "../Shared/Client/Footer/Footer";
import './InsuranceDetail.scss'

function CheckInsurance(id){
    switch (id){
        case 1:
            return(
                <div>Home Insurance</div>
            )
        case 2:
            return (
                <div>Life Insurance</div>
            )
        case 3:
            return (
                <div>Motor Insurance</div>
            )
        case 4:
            return (
                <div>Medical Insurance</div>
            )
        default:
            return (
                <div>Home Insurance</div>
            )
    }
}

function InsuranceDetail() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [insure, setData] = useState([]);
    const [user, setUser] = useState([]);
    let user_id = sessionStorage.getItem('id');
    let username = sessionStorage.getItem('username');
    let token = sessionStorage.getItem('accessToken');

    const checkLogin = async () => {
        if (user_id == null || username == null || token == null){
            alert('Please login to continue!')
            navigate('/login')
        }
    }

    const IsUser = async () => {
      await accountService.detailAccount(user_id)
          .then((response) =>{
            console.log("details user", response.data);
            setUser(response.data);
        })
          .catch((err) => {
              console.log(err)
          })
    }

    const CreateOrder = async () => {
        var name = document.getElementById("user-name").value;
        var phone = document.getElementById("user-phone").value;
        var price = document.getElementById("insurance-price").value;
        var address = document.getElementById("user-address").value;

        let data = {
            name: name,
            phoneNumber: phone,
            totalMoney: parseFloat(price),
            address: address,
            customer_id: parseInt(user_id),
            insurance_id: insure.id
        }

        await orderService.createOrder(data)
            .then((response) =>{
                console.log("create order", response);
                localStorage.setItem('insurance', insure.name)
                alert('Create order success! Please payment to continue...')
                navigate(`/payment/detail/${response.data.payment_id}`)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        const detailOrder = async () => {
            await insuranceService.detailInsurance(id)
                .then((res) => {
                    console.log("details insurance", res.data);
                    setData(res.data);
                })
                .catch((err) => {
                    console.log(err)
                })
        };
        IsUser();
        checkLogin();
        detailOrder();
    }, [ id])

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
            <div className="">
                <div className="card-wrapper">
                    <div className="card-pro">
                        <div className="product-imgs" style={{margin:"3px"}}>
                            <div className="img-select">
                                <div className="img-item">
                                    <img
                                        src={insure.thumbnail}
                                        alt="insurance image" width="550px" height="550px"/>
                                </div>
                            </div>
                        </div>
                        <div className="product-content" style={{marginRight:"3px"}}>
                            <h2 className="product-title">{insure.name}</h2>
                            <Link to="" href="#" className="product-link">{CheckInsurance(insure.category_id)}</Link>
                            <div className="product-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <span> 4.8(86)</span>
                            </div>

                            <div className="product-price">
                                <p className="new-price">Price: <span>$ {insure.price}</span></p>
                            </div>

                            <div className="product-detail">
                                <h2>about this insurance: </h2>
                                <p>{insure.description}</p>
                            </div>

                            <div className="purchase-info">
                                <button className="btn btn-primary" type="submit"
                                        style={{padding:"12px 72px"}}
                                        data-toggle="modal" data-target="#orderInsurance">Buy</button>
                            </div>

                            <div className="social-links">
                                <p>Share At: </p>
                                <Link to="" className="mb-3" style={{marginLeft:"4px"}}>
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link to="" className="mb-3" style={{marginLeft:"4px"}}>
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link to="" className="mb-3" style={{marginLeft:"4px"}}>
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link to="" className="mb-3" style={{marginLeft:"4px"}}>
                                    <i className="fab fa-whatsapp"></i>
                                </Link>
                                <Link to="" className="mb-3" style={{marginLeft:"4px"}}>
                                    <i className="fab fa-pinterest"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="orderInsurance" tabIndex="-1" role="dialog"
                 aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Order</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5 className="text-center">
                                Below is your insurance registration information,
                                please confirm the information...
                            </h5>
                            <Form id="order-form" onFinish={CreateOrder}>
                                <div className="mt3 mb-3">
                                    <label htmlFor="">FullName: </label>
                                    <input id="user-name" type="text" className="form-control"
                                           value={user.username}
                                           placeholder="Please enter your name!"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">PhoneNumber: </label>
                                    <input id="user-phone" type="text" className="form-control"
                                           value={user.phoneNumber}
                                           placeholder="Please enter your phone number!"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Price: </label>
                                    <input id="insurance-price" type="text" className="form-control" value={insure.price} disabled/>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="">Address: </label>
                                    <input id="user-address" type="text" className="form-control"
                                           value={user.address}
                                           placeholder="Please enter your address!"/>
                                </div>
                                <div className="d-flex justify-content-around mt-5 mb-3">
                                    <button type="submit" className="btn w-25 btn-primary">Submit</button>
                                    <button type="button" className="btn w-25 btn-secondary" data-dismiss="modal">Back
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default InsuranceDetail
