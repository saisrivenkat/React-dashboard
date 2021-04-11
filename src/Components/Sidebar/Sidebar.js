import React from "react";

import Charts from '../Content/LineChart'
import Courses from '../Content/Courses'
import First from '../Content/First'
import Task from '../Content/Task'
import Leaderboard from "../Content/Leaderboard";


function Sidebar() {

    return (
        <div>
            <div className="sidebar">
                <h1>Logo</h1>
                <div className="sidebar-menu">
                    <ul className="sidebar-items">
                        <li className="sidebar-item">
                            <i class="fa fa-home" style={{ padding: "5px" }}></i> Home
            </li>
                        <li className="sidebar-item">
                            <i class="fa fa-home" style={{ padding: "5px" }}></i> DashBoard
            </li>
                        <li className="sidebar-item">
                            <i class="fa fa-book" style={{ padding: "5px" }}></i>My Courses
            </li>
                        <li className="sidebar-item">
                            <i class="fa fa-home" style={{ padding: "5px" }}></i>Acheivments
            </li>
                    </ul>
                </div>
            </div>
            <div className="main-content">
                <div className="header">
                    <i class="fa fa-bell" style={{ color: "gray" }}></i>
                    <span>name</span>
                    <img
                        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt=""
                        width="50px"
                        height="50px"
                        style={{ borderRadius: "50%" }}
                    />
                </div>
                <div classname="content" style={{ marginTop: "10px" }}>
                    <div className="row">
                        <div className="col-4">
                            <First />
                        </div>
                        <div className="col-4">
                            <Task />
                        </div>
                        <div className="col-4">
                            <Leaderboard />
                        </div>
                    </div>
                    <Courses />
                    <Charts />

                </div>
            </div>
        </div>
    );
}

export default Sidebar;
