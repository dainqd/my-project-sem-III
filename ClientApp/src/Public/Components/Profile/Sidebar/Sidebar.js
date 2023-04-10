import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link " to="/profile">
                            <i className="bi bi-grid" />
                            <span>Homepage</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" to="#">
                            <i className="bi bi-journal-text" /><span>My Account</span><i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/upgrade-account">
                                    <i className="bi bi-circle" /><span>Upgrade Account</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="bi bi-circle" /><span>Account History</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="bi bi-circle" /><span>Account Widget</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" to="#">
                            <i className="bi bi-layout-text-window-reverse" /><span>My Purchase</span><i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/my-purchase/purchase-available">
                                    <i className="bi bi-circle" /><span>Purchase Available</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-purchase/purchase-history">
                                    <i className="bi bi-circle" /><span>Purchase History</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" to="#">
                            <i className="bi bi-bar-chart" /><span>Setting</span><i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/change-username">
                                    <i className="bi bi-circle" /><span>Change Username</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/change-email">
                                    <i className="bi bi-circle" /><span>Change Email</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manage-account">
                                    <i className="bi bi-circle" /><span>Manage Account</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>

    )
}

export default Sidebar
