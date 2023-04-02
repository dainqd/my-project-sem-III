import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import accountService from "../../Service/AccountService";
import {Form, message} from "antd";

function ChangeUsername() {
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

    const changeUsername = async (values) => {
        let id = sessionStorage.getItem('id');

        var oldPassword = document.getElementById("currentPassword").value;
        var password = document.getElementById("newPassword").value;
        var confirmPassword = document.getElementById("renewPassword").value;

        let data = {
            oldPassword: oldPassword,
            password: password,
            confirmPassword: confirmPassword
        }
        await accountService.changePassAccount(id, data)
            .then((res) => {
                console.log("changepass", res.data)
                alert("Change password success!")
            })
            .catch((err) => {
                console.log(err)
                message.error("Change password error! Please try again")
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
                        <input type="text" className="form-control" id="username" placeholder="Your Username"/>
                        <label htmlFor="floatingName">Your Username</label>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </Form>
        </>

    )
}

export default ChangeUsername
