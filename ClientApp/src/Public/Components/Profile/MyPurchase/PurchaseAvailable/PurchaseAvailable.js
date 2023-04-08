import {Button, Form, Input, message, Table} from 'antd';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import paymentService from '../../../Service/PaymentService';
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';


function PurchaseAvailable() {
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
            title: 'OrderCode',
            dataIndex: 'order_id',
            width: '10%',
        },
        {
            title: 'TotalPrice',
            dataIndex: 'totalPrice',
            width: '10%',
        },
        {
            title: 'PaymentCode',
            dataIndex: 'paymentCode',
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
                    <Button >
                        <Link to={`/payment/detail/${id}`}>
                            Details
                        </Link>
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

    console.log(paymentService.listPayment(id))

    const getListPaymentById = async () => {
        await paymentService.listPayment(id)
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
        checkLogin();
        getListPaymentById();
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
                    <h1>Profile</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item">My Purchase</li>
                            <li className="breadcrumb-item active">Purchase Available</li>
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

export default PurchaseAvailable
