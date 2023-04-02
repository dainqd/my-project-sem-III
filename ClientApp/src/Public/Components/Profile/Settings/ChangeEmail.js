import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import accountService from "../../Service/AccountService";
import {Form, message} from "antd";

function ChangeEmail() {
    const navigate = useNavigate();
    const AuthName = sessionStorage.getItem("username")
    const Token = sessionStorage.getItem("accessToken")

    const [data, setData] = useState([]);

    const checkLogin = async () => {
        if (AuthName == null || Token == null){
            navigate('/login')
        }
    };

    const isUser = async () => {
        await accountService.findUserByUsername(AuthName)
            .then((res) => {
                if (res.status === 200){
                    console.log("find user" + AuthName, res.data)
                    setData(res.data);
                }
            })
    };

    const changeEmail = async (values) => {
        let id = sessionStorage.getItem('id');

        var email = document.getElementById("email").value;

        let data = {
            email: email
        }
        await accountService.changePassAccount(id, data)
            .then((res) => {
                console.log("change email", res.data)
                alert("Change email success!")
            })
            .catch((err) => {
                console.log(err)
                message.error("Email already exists ! Please try again")
            })
    };

    useEffect(() => {
        checkLogin();
        isUser();
    }, []);

    return (
        <>
            <Header />
            <Sidebar />
            <Form className="row g-3">
                <div className="col-md-12">
                    <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                        <label htmlFor="floatingName">Your Email</label>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </Form>
        </>

    )
}

export default ChangeEmail
