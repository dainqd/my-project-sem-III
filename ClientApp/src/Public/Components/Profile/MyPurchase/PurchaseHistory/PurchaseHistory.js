import {Button, Form, Input, message, Table} from 'antd';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import transactionService from '../../../Service/TransactionService';
import paymentService from '../../../Service/PaymentService';
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';

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

function PurchaseHistory() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({

        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

    const id = sessionStorage.getItem("id")
    const AuthName = sessionStorage.getItem("username")
    const Token = sessionStorage.getItem("accessToken")

    const checkLogin = async () => {
        if (AuthName == null || Token == null){
            navigate('/login')
        }
    };

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
                    <Button disabled>
                            Details
                    </Button>
                </>
        },
    ];

    const Insurance = [
        {
            id:  1,
            type: "Home Insurance"
        },
        {
            id: 2,
            type: "Life Insurance"
        },
        {
            id:  3,
            type: "Motor Insurance"
        },
        {
            id: 4,
            type: "Medical Insurance"
        }
    ]

    console.log(transactionService.detailTransaction(id))

    const getTransactionById = async () => {
        await transactionService.detailTransaction(id)
            .then((res) =>{
                console.log(res)
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
        checkLogin();
        getTransactionById();
    }, []);

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });
    };

    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main" style={{backgroundColor:"#f6f9ff"}}>
                <div className="pagetitle">
                    <h1>Purchase History</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item">My Purchase</li>
                            <li className="breadcrumb-item active">Purchase History</li>
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
        </>
    )
}

export default PurchaseHistory
