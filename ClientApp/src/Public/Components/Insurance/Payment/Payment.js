import {Form, } from 'antd';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import paymentService from '../../Service/PaymentService';
import insuranceService from '../../Service/InsuranceService';
import orderService from '../../Service/OrderService';
import Header from "../../Shared/Client/Header/Header";
import Navbar from "../../Shared/Client/Navbar/Navbar";
import Background from "../../images/client/carousel-1.jpg";
import Footer from "../../Shared/Client/Footer/Footer";

function Payment() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [payment, setData] = useState([]);
    const [order, setOrder] = useState([]);
    const [insure, setInsurance] = useState([]);

    let user_id = sessionStorage.getItem('id');
    let username = sessionStorage.getItem('username');
    let token = sessionStorage.getItem('accessToken');

    const checkLogin = async () => {
        if (user_id == null || username == null || token == null){
            navigate('/login')
            alert('Please login to continue!')
        }
    }

    useEffect(() => {
        const detailPayment = async () => {
            await paymentService.detailPayment(id)
                .then((res) => {
                    console.log("details payment", res.data);
                    setData(res.data);
                })
                .catch((err) => {
                    console.log(err)
                })
        };
        checkLogin();
        detailPayment();
    }, [ id])

    const PayPayment = async () => {
        var name = document.getElementById("namecard").value;
        var phone = document.getElementById("phonenumber").value;
        var number = document.getElementById("numbercard").value;

        let data = {
            phoneNumber: phone,
            nameOfCard: name,
            numberOfCard: number
        }

        await paymentService.payPayment(id, data)
            .then((res) => {
                console.log("pay", res.data);
                navigate('/');
                alert("Thanks you");
            })
            .catch((err) => {
                console.log(err)
                alert("Pay error");
            })
    }

    const getOrder = async () => {
        await orderService.detailOrder(payment.order_id)
            .then((res) => {
                console.log("details order", res.data);
                setOrder(res.data);
            })
            .catch((err) => {
                console.log(err)
                alert("Order error")
            })
    }

    const getInsurance = async () => {
        await insuranceService.detailInsurance(order.insurance_id)
            .then((res) => {
                console.log("details insurance", res.data);
                setInsurance(res.data);
            })
            .catch((err) => {
                console.log(err)
                alert("Insurance error")
            })
    }

    let insurance = localStorage.getItem('insurance')

    return (
        <div style={{backgroundColor:"#fff"}}>
            <Header />
            <Navbar />
            <div
                className="container-fluid page-header py-5 mb-5 wow fadeIn" style={{backgroundImage: `url(${Background})`}}
                data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-4 animated slideInDown mb-4">Payment</h1>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="" style={{marginLeft:"72px"}}>
                    <h3 className="" style={{color:"#74bb5b"}}> Payment Information</h3>
                    <div className="">
                        <div className="">
                            <label htmlFor="">PaymentCode:</label>
                            <input type="text" className="form-control" value={payment.paymentCode} disabled/>
                        </div>
                        <div className="">
                            <label htmlFor="">Insurance</label>
                            <input type="text" className="form-control" value={insurance} disabled/>
                        </div>
                        <div className="">
                            <label htmlFor="">TotalPrice</label>
                            <input type="text" className="form-control" value={payment.totalPrice} disabled/>
                        </div>
                        <div className="">
                            <label htmlFor="">Description</label>
                            <input type="text" className="form-control" value={payment.description} disabled/>
                        </div>
                        <div className="">
                            <label htmlFor="">Status</label>
                            <input type="text" className="form-control" value={payment.status} disabled/>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="https://timo.vn/wp-content/uploads/thanh-toan-tien-dien-nhanh-chong.png" alt="" width="560px" height="460px"/>
                </div>
                <div className="" style={{marginRight:"72px"}}>
                    <h2 className="">
                        Pay
                    </h2>
                    <Form onFinish={PayPayment}>
                        <div className="">
                            <div htmlFor="">Choose payment method</div>
                            <select name="" id="" className="form-control form-select">
                                <option value="" disabled>PAY_DIRECT</option>
                                <option value="">PAY_CARD</option>
                                <option value="" disabled>PAY_WALLET</option>
                                <option value="" disabled>PAY_BANK</option>
                            </select>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">Name Of Card</label>
                            <input id="namecard" type="text" className="form-control"/>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">Number Of Card</label>
                            <input id="numbercard" type="text" className="form-control"/>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">PhoneNumber</label>
                            <input id="phonenumber" type="text" className="form-control"/>
                        </div>
                        <div className=" mt-3">
                            <button type="submit" className="btn btn-primary" style={{padding:"12px 72px"}}>Pay</button>
                        </div>
                    </Form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Payment
