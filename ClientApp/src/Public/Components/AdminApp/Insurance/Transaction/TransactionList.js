import React, { useEffect, useState } from 'react'
import Header from '../../../Shared/Admin/Header/Header'
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar'
import {Button, Form, message, Table} from 'antd';
import { Link } from 'react-router-dom';
import transactionService from "../../../Service/TransactionService";

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

function TransactionList() {
    const handleDelete = async (id) => {
        await transactionService.adminDeleteTransaction(id)
            .then((res) => {
                console.log("delete", res.data)
                alert(`Delete transaction: ${id}`)
                window.location.reload();
                getListTransaction();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: '10%',
        },
        {
            title: 'Insurance',
            dataIndex: 'insurance_id',
            width: '10%',
            render: (insurance_id) =>
                <>
                    {CheckInsurance(insurance_id)}
                </>
        },
        {
            title: 'PaymentID',
            dataIndex: 'payment_id',
            width: '10%',
        },
        {
            title: 'TotalMoney',
            dataIndex: 'total_money',
            width: '10%',
        },
        {
            title: 'DateTime',
            dataIndex: 'dateTime',
            width: '10%',
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
                    <Button className="" data-toggle="modal" data-target="#deleteMember">
                        Delete
                    </Button>

                    <div className="modal fade" id="deleteMember" tabIndex="-1" role="dialog"
                         aria-labelledby="editModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete Transaction</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h5 className="text-center">Are you sure you want to delete this transaction?</h5>
                                    <Form id="delete-transaction-form" >
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

    const getListTransaction = async () => {
        await transactionService.adminListTransaction()
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
        getListTransaction();
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
                    <h1>List Transaction</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item">Transaction</li>
                            <li className="breadcrumb-item active">List Transaction</li>
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
                                    <select name="" id="" className="form-control form-select">
                                        <option value="0">SUCCESS</option>
                                        <option value="1">FAIL</option>
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

export default TransactionList
