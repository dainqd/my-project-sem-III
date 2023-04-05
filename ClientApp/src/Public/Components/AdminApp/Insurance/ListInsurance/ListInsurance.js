import React, { useEffect, useState } from 'react'
import Header from '../../../Shared/Admin/Header/Header'
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar'
import {Button, Form, message, Table} from 'antd';
import insuranceService from '../../../Service/InsuranceService';
import { Link } from 'react-router-dom';

function CheckInsurance(id){
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

function ListInsurance() {
    const handleDelete = async (id) => {
        await insuranceService.adminDeleteInsurance(id)
            .then((res) => {
                console.log("delete", res.data)
                alert(`Delete insurance: ${id}`)
                window.location.reload();
                getListInsurance();
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
            title: 'Name',
            dataIndex: 'name',
            width: '10%',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            width: '10%',
        },
        {
            title: 'Category',
            dataIndex: 'category_id',
            key: 'x',
            render: (id) =>
                <>
                    {CheckInsurance(id)}
                </>

        },
        {
            title: 'Description',
            dataIndex: 'description',
            width: '10%',
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
                    <Button className="" data-toggle="modal" data-target="#deleteInsurance">
                        Delete
                    </Button>
                    <Button >
                        <Link to={`/insurance/${id}`}>
                            Details
                        </Link>
                    </Button>

                    <div className="modal fade" id="deleteInsurance" tabIndex="-1" role="dialog"
                         aria-labelledby="editModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete Insurance</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h5 className="text-center">Are you sure you want to delete this insurance?</h5>
                                    <Form id="deleteInsurance-form" >
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

    const getListInsurance = async () => {
        await insuranceService.adminListInsurance()
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
        getListInsurance();
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
                    <h1>List Insurances</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item">Insurances</li>
                            <li className="breadcrumb-item active">List Insurances</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
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

export default ListInsurance
