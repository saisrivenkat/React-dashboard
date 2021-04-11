import React from 'react'

function Heading() {
    return (
        <>
            <div className="header-menu text-end" style={{ marginRight: "30px" }}>

                <i class="fa fa-bell" style={{ color: "gray", padding: "10px" }}></i>

                <img
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    alt=""
                    width="50px"
                    height="50px"
                    style={{ borderRadius: "50%", padding: "10px" }}
                />
                <span style={{ padding: "10px", paddingLeft: 0 }}>Sri sai</span>
            </div>


        </>
    )
}

export default Heading
