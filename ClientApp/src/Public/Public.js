import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Account/Login/Login'
import Register from './Components/Account/Register/Register'
import Dashboard from './Components/AdminApp/Dashboard/Dashboard'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import Error404 from './Components/Shared/Error/Error404'
import Create from './Components/AdminApp/User/Create/Create'
import Detail from './Components/AdminApp/User/Detail/Detail'
import List from './Components/AdminApp/User/List/List'
import RegisterVerify from "./Components/Account/Register/RegisterVerify";
import ForgotPassword from "./Components/Account/ForgotPassword/ForgotPassword";
import ChangePassword from "./Components/Account/ForgotPassword/ChangePassword";
import Contact from "./Components/Contact/Contact";
import Insurance from "./Components/Insurance/Insurance";
import Member from "./Components/AboutUs/Member";
import Features from "./Components/Feature/Features";
import {Apartment} from "@mui/icons-material";
import Appointment from "./Components/Appointment/Appointment";
import Team from "./Components/Member/Member";
import ManageAccount from "./Components/Profile/Settings/ManageAccount";
import ChangeEmail from "./Components/Profile/Settings/ChangeEmail";
import ChangeUsername from "./Components/Profile/Settings/ManageAccount";
import ChangeUser from "./Components/Profile/Settings/ChangeUsername";
import ChangeEmailVerify from "./Components/Profile/Settings/ChangeEmailVerify";
import UpgradeAccount from "./Components/Profile/MyAccount/UpgradeAccount";

function Public() {
    return (
        <div>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                // Auth
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/register-verify' element={<RegisterVerify />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/change-password' element={<ChangePassword />} />
                //
                <Route path='/account/list' element={<List />} />
                <Route path='/account/create' element={<Create />} />
                <Route path='/account/:id' element={<Detail />} />
                <Route path='/*' element={<Error404 />} />
                <Route path='/profile' element={<Profile />} />
                // Insurance
                <Route path='/insurances' element={<Insurance />} />
                //
                <Route path='/contact' element={<Contact />} />
                //
                <Route path='/about-us' element={<Member />} />
                //
                <Route path='/features' element={<Features />} />
                //
                <Route path='/appointment' element={<Appointment />} />
                //
                <Route path='/teams' element={<Team />} />
                //Setting
                <Route path='/manage-account' element={<ManageAccount />} />
                <Route path='/change-email' element={<ChangeEmail />} />
                <Route path='/change-username' element={<ChangeUser />} />
                <Route path='/change-email-verify' element={<ChangeEmailVerify/>}/>
                //MyAccount
                <Route path='/upgrade-account' element={<UpgradeAccount />} />
                {/*<Route path='/change-email' element={<ChangeEmail />} />*/}
                {/*<Route path='/change-username' element={<ChangeUser />} />*/}
            </Routes>
        </div>
    )
}

export default Public
