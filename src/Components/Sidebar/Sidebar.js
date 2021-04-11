import React from "react";
import { Line, Bar } from "react-chartjs-2";

function Sidebar() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: "No.of Students Registered",
                data: [25, 20, 120, 250, 12],
                borderColor: ['rgba(255,206,86,0.2)',],
                backgroundColor: ['rgba(255,206,86,0.2)'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
                pointBorderColor: 'rgba(255,206,86,0.2)'
            },
            {
                label: "No.of active users",
                data: [10, 5, 50, 150, 10],
                borderColor: ['rgba(54,162,235,0.2)'],
                backgroundColor: ['rgba(54,162,235,0.2)'],
                pointBackgroundColor: 'rgba(54,162,235,0.2)',
                pointBorderColor: 'rgba(54,162,235,0.2)'
            }

        ]
    }
    const homework = {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
            {
                label: "No.of Student Submitted",
                data: [25, 20, 120],
                borderColor: ['rgba(255,206,86,0.2)', 'rgba(255,206,86,0.2)', 'rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(255,206,86,0.2)', 'rgba(255,206,86,0.2)', 'rgba(255,206,86,0.2)'],

            },
            {
                label: "No.of Students Not Submittes",
                data: [10, 5, 50],
                borderColor: ['rgba(54,162,235,0.2)', 'rgba(54,162,235,0.2)', 'rgba(54,162,235,0.2)'],
                backgroundColor: ['rgba(54,162,235,0.2)', 'rgba(54,162,235,0.2)', 'rgba(54,162,235,0.2)']

            }

        ]
    }
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
                            <div class="card" style={{ width: "22rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Upcoming lessons</h5>
                                    <div
                                        classname="first"
                                        style={{
                                            display: "flex",
                                            alignContent: "center",
                                            justifyContent: "space-between",
                                            border: "1px solid black",
                                            marginTop: "13px",
                                        }}
                                    >
                                        <div style={{ padding: "10px 0 10px 10px" }}>
                                            <span>
                                                June 4 <br></br> 4:00 PM
                      </span>
                                        </div>
                                        <div style={{ alignSelf: "center" }}>
                                            <span>Algebra</span>
                                        </div>
                                        <div style={{ padding: "10px 10px 10px 0" }}>
                                            <img
                                                src="https://media.istockphoto.com/photos/math-problems-picture-id470493341?k=6&m=470493341&s=612x612&w=0&h=xoPGMy7EAyO7TPrKqBAF8FjdD6s5s4xKaPt2sVsnvsk="
                                                alt=""
                                                width="80px"
                                                height="50px"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        classname="second "
                                        style={{
                                            display: "flex",
                                            alignContent: "center",
                                            justifyContent: "space-between",
                                            border: "1px solid black",
                                            marginTop: "13px",
                                        }}
                                    >
                                        <div style={{ padding: "10px 0 10px 10px" }}>
                                            <span>
                                                June 4 <br></br> 4:00 PM
                      </span>
                                        </div>
                                        <div style={{ alignSelf: "center" }}>
                                            <span>Algebra</span>
                                        </div>
                                        <div style={{ padding: "10px 10px 10px 0" }}>
                                            <img
                                                src="https://media.istockphoto.com/photos/math-problems-picture-id470493341?k=6&m=470493341&s=612x612&w=0&h=xoPGMy7EAyO7TPrKqBAF8FjdD6s5s4xKaPt2sVsnvsk="
                                                alt=""
                                                width="80px"
                                                height="50px"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        classname="third"
                                        style={{
                                            display: "flex",
                                            alignContent: "center",
                                            justifyContent: "space-between",
                                            border: "1px solid black",
                                            marginTop: "13px",
                                        }}
                                    >
                                        <div style={{ padding: "10px 0 10px 10px" }}>
                                            <span>
                                                June 4 <br></br> 4:00 PM
                      </span>
                                        </div>
                                        <div style={{ alignSelf: "center" }}>
                                            <span>Algebra</span>
                                        </div>
                                        <div style={{ padding: "10px 10px 10px 0" }}>
                                            <img
                                                src="https://media.istockphoto.com/photos/math-problems-picture-id470493341?k=6&m=470493341&s=612x612&w=0&h=xoPGMy7EAyO7TPrKqBAF8FjdD6s5s4xKaPt2sVsnvsk="
                                                alt=""
                                                width="80px"
                                                height="50px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div class="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Task to do</h5>
                                    <div style={{ padding: "10px" }}>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                                style={{ padding: "10px" }}
                                            />
                                            <label
                                                class="form-check-label"
                                                for="flexCheckDefault"
                                                style={{ padding: "2px 0 0 10px" }}
                                            >
                                                Study DBMS
                      </label>
                                        </div>
                                        <div class="form-check" style={{ marginTop: "10px" }}>
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                                style={{ padding: "10px" }}
                                            />
                                            <label
                                                class="form-check-label"
                                                for="flexCheckDefault"
                                                style={{ padding: "2px 0 0 10px" }}
                                            >
                                                Announcment for holidays
                      </label>
                                        </div>
                                        <div class="form-check" style={{ marginTop: "10px" }}>
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                                style={{ padding: "10px" }}
                                            />
                                            <label
                                                class="form-check-label"
                                                for="flexCheckDefault"
                                                style={{ padding: "2px 0 0 10px" }}
                                            >
                                                Announcment for holidays
                      </label>
                                        </div>
                                        <div class="form-check" style={{ marginTop: "10px" }}>
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                                style={{ padding: "10px" }}
                                            />
                                            <label
                                                class="form-check-label"
                                                for="flexCheckDefault"
                                                style={{ padding: "2px 0 0 10px" }}
                                            >
                                                Announcment for holidays
                      </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div class="card" style={{ width: "20rem", marginLeft: "-50px" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Leader Board</h5>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.no</th>
                                                <th scope="col">Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark the Burger</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob the Rider</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td colspan="2">Larry the Bird</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "10px" }}>
                        <div class="col-12">
                            <div classname="row">
                                <div className="col-12">
                                    <div class="card">
                                        <h5 class="card-header">My Courses</h5>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div
                                                                className="cardheader"
                                                                style={{ display: "flex" }}
                                                            >
                                                                <img
                                                                    src="https://media.istockphoto.com/photos/math-problems-picture-id470493341?k=6&m=470493341&s=612x612&w=0&h=xoPGMy7EAyO7TPrKqBAF8FjdD6s5s4xKaPt2sVsnvsk="
                                                                    alt=""
                                                                    width="80px"
                                                                    height="80px"
                                                                />
                                                                <div
                                                                    style={{
                                                                        alignSelf: "center",
                                                                        marginLeft: "50px",
                                                                        display: "flex",
                                                                        flexDirection: "column",
                                                                    }}
                                                                >
                                                                    <h5>Maths</h5>
                                                                    <p>30 lessons</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="course-content"
                                                                style={{ marginTop: "15px" }}
                                                            >
                                                                <p>
                                                                    lorem ipsum lorem ipsum lorem ipsum lorem
                                                                    ipsum lorem ipsum lorem ipsum lorem ipsum
                                                                    lorem ipsum lorem ipsum lorem ipsumlorem ipsum
                                  lorem{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div
                                                                className="cardheader"
                                                                style={{ display: "flex" }}
                                                            >
                                                                <img
                                                                    src="https://media.istockphoto.com/photos/math-problems-picture-id470493341?k=6&m=470493341&s=612x612&w=0&h=xoPGMy7EAyO7TPrKqBAF8FjdD6s5s4xKaPt2sVsnvsk="
                                                                    alt=""
                                                                    width="80px"
                                                                    height="80px"
                                                                />
                                                                <div
                                                                    style={{
                                                                        alignSelf: "center",
                                                                        marginLeft: "50px",
                                                                        display: "flex",
                                                                        flexDirection: "column",
                                                                    }}
                                                                >
                                                                    <h5>Maths</h5>
                                                                    <p>30 lessons</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="course-content"
                                                                style={{ marginTop: "15px" }}
                                                            >
                                                                <p>
                                                                    lorem ipsum lorem ipsum lorem ipsum lorem
                                                                    ipsum lorem ipsum lorem ipsum lorem ipsum
                                                                    lorem ipsum lorem ipsum lorem ipsumlorem ipsum
                                  lorem{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className='col-lg-6'>
                                <div className=" " style={{ marginTop: "15px" }}>
                                    <div class="card">
                                        <h5 class="card-header">User Graph</h5>
                                        <div class="card-body">
                                            <Line data={data} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div class="" style={{ marginTop: "15px" }}>
                                    <div class="card">
                                        <h5 class="card-header">Homework Progress</h5>
                                        <div class="card-body">
                                            <Bar data={homework} />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="col-lg-6">




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
