import React, { useEffect, useState } from 'react'
import Header from '../../../Shared/Admin/Header/Header'
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar'
import {Button, Form, message, Table} from 'antd';
import memberService from '../../../Service/MemberService';
import { Link } from 'react-router-dom';

function ListMember() {
    const handleDelete = async (id) => {
        await memberService.adminDeleteMember(id)
            .then((res) => {
                console.log("delete", res.data)
                alert(`Delete member: ${id}`)
                window.location.reload();
                getListMember();
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
            dataIndex: 'fullName',
            width: '10%',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
        },
        {
            title: 'BirthDay',
            dataIndex: 'birthday',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
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
                    <Button >
                        <Link to={`/member/${id}`}>
                            Details
                        </Link>
                    </Button>

                    <div className="modal fade" id="deleteMember" tabIndex="-1" role="dialog"
                         aria-labelledby="editModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete Member</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h5 className="text-center">Are you sure you want to delete this member?</h5>
                                    <Form id="delete-Member-form" >
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

    const getListMember = async () => {
        await memberService.adminListMember()
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
        getListMember();
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
                    <h1>List Member</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item">Member</li>
                            <li className="breadcrumb-item active">List Member</li>
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

export default ListMember
