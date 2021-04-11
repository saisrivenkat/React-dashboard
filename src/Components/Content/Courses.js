import React from 'react'

function Courses() {
    return (
        <div classname="courses row " style={{ marginTop: "10px" }}>
            <div className="col-lg-12">
                <div class="card card-style">
                    <div className="card-header" style={{ display: "flex", paddingTop: "15px" }}>
                        <h5>My courses</h5>
                        <p style={{ marginLeft: "auto" }}><a href="#" style={{ textDecoration: "none" }}> See More ...</a></p>
                    </div>
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
                                                <h5>Physics</h5>
                                                <p>32 lessons</p>
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
    )
}

export default Courses
