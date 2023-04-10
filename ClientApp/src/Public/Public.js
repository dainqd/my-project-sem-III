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
import ListAppointment from "./Components/AdminApp/Appointment/List/ListAppointment";
import DetailAppointment from "./Components/AdminApp/Appointment/Detail/DetailAppointment";
import ListInsurance from "./Components/AdminApp/Insurance/ListInsurance/ListInsurance";
import CreateInsurance from "./Components/AdminApp/Insurance/CreateInsurance/CreateInsurance";
import DetailInsurance from "./Components/AdminApp/Insurance/DetailInsurance/DetailInsurance";
import ManageInsurance from "./Components/AdminApp/Insurance/ManageInsurance/ManageInsurance";
import ListCustomer from "./Components/AdminApp/Customer/ListCustomer/ListCustomer";
import CreateCustomer from "./Components/AdminApp/Customer/CreateCustomer/CreateCustomer";
import DetailCustomer from "./Components/AdminApp/Customer/DetailCustomer/DetailCustomer";
import ManageCustomer from "./Components/AdminApp/Customer/ManageCustomer/ManageCustomer";
import ListFeedback from "./Components/AdminApp/Feedback/ListFeedback/ListFeedback";
import DetailFeedback from "./Components/AdminApp/Feedback/DetailFeedback/DetailFeedback";
import ListMember from "./Components/AdminApp/Member/ListMember/ListMember";
import DetailMember from "./Components/AdminApp/Member/DetailMember/DetailMember";
import CreateMember from "./Components/AdminApp/Member/CreateMember/CreateMember";
import ListOrder from "./Components/AdminApp/Order/ListOrder/ListOrder";
import InsuranceDetail from "./Components/Insurance/InsuranceDetail";
import Payment from "./Components/Insurance/Payment/Payment";
import PurchaseAvailable from "./Components/Profile/MyPurchase/PurchaseAvailable/PurchaseAvailable";
import PurchaseHistory from "./Components/Profile/MyPurchase/PurchaseHistory/PurchaseHistory";

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
                //
                <Route path='/my-purchase/purchase-available' element={<PurchaseAvailable />} />
                <Route path='/my-purchase/purchase-history' element={<PurchaseHistory />} />
                // Insurance
                <Route path='/insurances' element={<Insurance />} />
                <Route path='/insurances/detail/:id' element={<InsuranceDetail />} />
                <Route path='/payment/detail/:id' element={<Payment />} />
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
                //Admin
                <Route path='/appointment/list' element={<ListAppointment />} />
                <Route path='/appointment/:id' element={<DetailAppointment />} />
                //
                <Route path='/insurance/list' element={<ListInsurance />} />
                <Route path='/insurance/:id' element={<DetailInsurance />} />
                <Route path='/insurance/create' element={<CreateInsurance />} />
                <Route path='/insurance/manage' element={<ManageInsurance />} />
                //
                <Route path='/customer/list' element={<ListCustomer />} />
                <Route path='/customer/:id' element={<DetailCustomer />} />
                <Route path='/customer/create' element={<CreateCustomer />} />
                <Route path='/customer/manage' element={<ManageCustomer />} />
                //
                <Route path='/feedback/list' element={<ListFeedback />} />
                <Route path='/feedback/:id' element={<DetailFeedback />} />
                //
                <Route path='/member/list' element={<ListMember />} />
                <Route path='/member/:id' element={<DetailMember />} />
                <Route path='/member/create' element={<CreateMember />} />
                //
                <Route path='/order/list' element={<ListOrder />} />
                {/*<Route path='/member/:id' element={<DetailMember />} />*/}
            </Routes>
        </div>
    )
}

export default Public
