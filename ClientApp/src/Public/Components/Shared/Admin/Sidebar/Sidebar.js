import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import accountService from "../../../Service/AccountService";

function Sidebar() {
    const AuthName = sessionStorage.getItem("username");
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const isUser = async () => {
        await accountService.findUserByUsername(AuthName)
            .then((res) => {
                if (res.status === 200){
                    setData(res.data);
                    if (res.data.role === "ADMIN"){
                        localStorage.setItem('isAdmin', 1);
                    } else {
                        navigate('/profile')
                    }
                }
            })
    };

    useEffect(() => {
        isUser();
    }, []);

    return (
        <div>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link " to="/dashboard">
                            <i className="bi bi-grid" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" to="#">
                            <i className="bi bi-journal-text" /><span>Account</span><i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/account/list">
                                    <i className="bi bi-circle" /><span>List Account</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/account/create">
                                    <i className="bi bi-circle" /><span>Create Account</span>
                                </Link>
                            </li>
                            <li>
                                <a href="forms-editors.html">
                                    <i className="bi bi-circle" /><span>Form Editors</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-validation.html">
                                    <i className="bi bi-circle" /><span>Form Validation</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" to="#">
                            <i className="bi bi-layout-text-window-reverse" /><span>Tables</span><i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="tables-general.html">
                                    <i className="bi bi-circle" /><span>General Tables</span>
                                </a>
                            </li>
                            <li>
                                <a href="tables-data.html">
                                    <i className="bi bi-circle" /><span>Data Tables</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" to="#">
                            <i className="bi bi-bar-chart" /><span>Charts</span><i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="charts-chartjs.html">
                                    <i className="bi bi-circle" /><span>Chart.js</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-apexcharts.html">
                                    <i className="bi bi-circle" /><span>ApexCharts</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-echarts.html">
                                    <i className="bi bi-circle" /><span>ECharts</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" to="#">
                            <i className="bi bi-gem" /><span>Icons</span><i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="icons-bootstrap.html">
                                    <i className="bi bi-circle" /><span>Bootstrap Icons</span>
                                </a>
                            </li>
                            <li>
                                <a href="icons-remix.html">
                                    <i className="bi bi-circle" /><span>Remix Icons</span>
                                </a>
                            </li>
                            <li>
                                <a href="icons-boxicons.html">
                                    <i className="bi bi-circle" /><span>Boxicons</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>{/* End Sidebar*/}
        </div>

    )
}

export default Sidebar
