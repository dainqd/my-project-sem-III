import {Button, Form, Input, message, Table} from 'antd';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import credentialService from '../../../Service/CredentialService';
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';

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
            width: '20%',
        },
        {
            title: 'Active',
            dataIndex: 'active',
            width: '40%',
        },
        {
            title: 'DateTime',
            dataIndex: 'datetime',
            width: '40%',
        }
    ];

    const getCredentialById = async () => {
        await credentialService.listCredentialById(id)
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
        getCredentialById();
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
                    <h1>Account History</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item">My Account</li>
                            <li className="breadcrumb-item active">Account History</li>
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
