import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import accountService from "../../Service/AccountService";
import {Form, message} from "antd";

function ChangeEmailVerify() {
    const navigate = useNavigate();
    const AuthName = sessionStorage.getItem("username")

    const email = localStorage.getItem("email")

    const checkLogin = async () => {
        if (AuthName == null || email == null){
            navigate('/not-found')
        }
    };

    const changeEmailVerify = async () => {
        let id = sessionStorage.getItem('id');

        let email = localStorage.getItem('email');
        let code = document.getElementById("code").value;

        await accountService.changeEmailVerify(id, email, code)
            .then((res) => {
                console.log("code", code)
                localStorage.removeItem('email')
                alert("Change email success!")
                navigate('/profile')
            })
            .catch((err) => {
                console.log(err)
                message.error("Email already exists ! Please try again")
            })
    };

    useEffect(() => {
        checkLogin();
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
                <div className="mb-2">Please enter your code!</div>
                <Form className="row g-3" onFinish={changeEmailVerify}>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="code" placeholder="Your Code"/>
                            <label htmlFor="floatingName">Your Code</label>
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

export default ChangeEmailVerify
