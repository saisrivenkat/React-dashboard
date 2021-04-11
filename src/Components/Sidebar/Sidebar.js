import React from "react";

import Charts from "../Content/LineChart";
import Courses from "../Content/Courses";
import First from "../Content/First";
import Task from "../Content/Task";
import Leaderboard from "../Content/Leaderboard";
import Header from "../Content/Heading";

function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <div className="logo">
                    <img
                        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt=""
                        width="100px"
                        height="100px"
                        style={{ borderRadius: "50%", padding: "10px" }}
                    />
                    <span style={{ padding: "10px", paddingLeft: 0, color: "white" }}>Sri sai</span>
                </div>
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
                <Header />
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
