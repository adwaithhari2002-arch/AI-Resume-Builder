import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Saved() {
    return (
        <div className='my-5 d-flex justify-content-center align-items-center flex-column'>
            <h1>All Saved Resumes</h1>
            <table className="my-5 table table-hover table-stripped">
                <thead>
                    <tr className="table-dark">
                        <th>#</th>
                        <th>Resume</th>
                        <th>Job Role</th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td> <Link to={`/resumes/id`}>NAME</Link> </td>
                        <td>JOB</td>
                        <td><button className="btn text-danger"> <FaTrashAlt/> </button> </td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}

export default Saved