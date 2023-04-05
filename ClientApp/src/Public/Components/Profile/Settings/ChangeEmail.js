import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import accountService from "../../Service/AccountService";
import {Form, message} from "antd";

function ChangeEmail() {
    const navigate = useNavigate();
    const AuthName = sessionStorage.getItem("username")

    const [data, setData] = useState([]);

    const isUser = async () => {
        await accountService.findUserByUsername(AuthName)
            .then((res) => {
                if (res.status === 200){
                    console.log("find user" + AuthName, res.data)
                    setData(res.data);
                }
            })
    };

    const changeEmail = async () => {
        let id = sessionStorage.getItem('id');

        var email = document.getElementById("email").value;

        await accountService.changeEmail(id, email)
            .then((res) => {
                console.log("change email", email)
                message.success("Please enter your code!")
                localStorage.setItem('email', email);
                navigate('/change-email-verify')
            })
            .catch((err) => {
                console.log(err)
                message.error("Email already exists ! Please try again")
            })
    };

    useEffect(() => {
        isUser();
    }, []);

    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main" style={{backgroundColor:"#f6f9ff"}}>
                <div className="pagetitle">
                    <h1>Profile</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item">Users</li>
                            <li className="breadcrumb-item active">Profile</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <div className="mb-2">Please enter your new email!</div>
            <Form className="row g-3" onFinish={changeEmail}>
                <div className="col-md-4">
                    <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                        <label htmlFor="floatingName">Your Email</label>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </div>
            </Form>
            </main>
        </>

    )
}

export default ChangeEmail
