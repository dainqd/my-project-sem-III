import appointmentService from "../../../Service/AppointmentService";
import {Button, Form, message, Table} from "antd";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Header from "../../../Shared/Admin/Header/Header";
import Sidebar from "../../../Shared/Admin/Sidebar/Sidebar";

function CheckInsurance(id) {
 switch (id){
     case 1:
         return(
                <td>Home Insurance</td>
         )
     case 2:
         return (
             <td>Life Insurance</td>
         )
     case 3:
         return (
             <td>Motor Insurance</td>
         )
     case 4:
         return (
             <td>Medical Insurance</td>
         )
     default:
         return (
             <td>Home Insurance</td>
         )
 }
}

function ListAppointment() {
    const handleDelete = async (id) => {
        console.log(id);
        await appointmentService.adminDeleteAppointment(id)
            .then((res) => {
                console.log("delete", res.data)
                alert(`Delete account: ${id}`)
                window.location.reload();
                getListAccount();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            width: '10%',
        },
        {
            title: 'FullName',
            dataIndex: 'fullname',
            width: '10%',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
        },
        {
            title: 'Insurance',
            dataIndex: 'insurance_id',
            key: 'x',
            render: (id) =>
                <>
                    {CheckInsurance(id)}
                </>
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'x',
            render: (id) =>
                <>
                    {/*<Button onClick={() => handleDelete(id)}>*/}
                    <Button className="" data-toggle="modal" data-target="#deleteAppointment">
                        Delete
                    </Button>
                    <Button >
                        <Link to={`/appointment/${id}`}>
                            Details
                        </Link>
                    </Button>

                    <div className="modal fade" id="deleteAppointment" tabIndex="-1" role="dialog"
                         aria-labelledby="editModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete Appointment</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h5 className="text-center">Are you sure you want to delete this appointment?</h5>
                                    <Form id="delete-account-form" >
                                        <div className="d-flex justify-content-around">
                                            <button type="submit" className="btn w-25 btn-danger" onClick={() => handleDelete(id)}>Delete</button>
                                            <button type="button" className="btn w-25 btn-secondary" data-dismiss="modal">Back
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script>

                    </script>
                </>
        },
    ];

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

    const getListAccount = async () => {
        await appointmentService.adminListAppointment()
            .then((res) =>{
                if (res.status === 200){
                    console.log("data", res.data)
                    setData(res.data)
                    setLoading(false)
                } else {
                    alert('Error')
                    setLoading(false)
                }
            })
            .catch((err) => {
                setLoading(false)
                console.log(err)
            })
    }


    useEffect(() => {
        getListAccount();
    }, []);
    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });
    };

    return (
        <div>
            <Header />
            <Sidebar />

            <main id="main" className="main" style={{backgroundColor:"#f6f9ff"}}>
                <div className="pagetitle">
                    <h1>List Appointment</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item">Appointment</li>
                            <li className="breadcrumb-item active">List Appointment</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <div>
                    <div className="mb-3">
                        <div className="">
                            <label htmlFor="">
                                Choose status:
                            </label>
                            <Form className="d-flex" style={{ alignItems: "center"}}>
                                {/*<div className="d-flex justify-content-between align-items-center">*/}
                                    <div className="col-md-2">
                                        <select name="" id="" className="form-control ">
                                            <option value="1">ACTIVE</option>
                                            <option value="2">SUCCESS</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <button type="submit" className=""
                                                style={{width:"72px",height:"36px", border:"1px solid #ccc",
                                                    backgroundColor:"#018dc9", borderRadius:"6px", color:"#fff"
                                        }}>
                                            Submit
                                        </button>
                                    </div>
                                {/*</div>*/}
                            </Form>
                        </div>
                    </div>
                </div>
                <Table
                    style={{margin:"auto" }}
                    columns={columns}
                    dataSource={data}
                    pagination={tableParams.pagination}
                    loading={loading}
                    onChange={handleTableChange}
                />
            </main>
        </div>
    )
}

export default ListAppointment