import React from 'react'

function Leaderboard() {
    return (
        <>
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
        </>
    )
}

export default Leaderboard
