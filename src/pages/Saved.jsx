import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { getAllResumesAPI } from '../services/apiService';
import { all } from 'axios';


function Saved() {

    const [allResumes, setAllResumes] = useState([])

    console.log(allResumes);

    useEffect(() => {
        getAllResumes()
    }, [])

    const getAllResumes = async () => {
        const response = await getAllResumesAPI()
        if (response.status == 200) {
            setAllResumes(response.data)
        }
    }

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
                    {
                        allResumes?.length > 0 ?
                            allResumes?.map((resume, index) => (
                                <tr key={resume?.id}>
                                    <td>{index + 1}</td>
                                    <td> <Link to={`/resumes/${resume?.id}`}> {resume?.fullName.toUpperCase()}</Link> </td>
                                    <td>{resume?.job.toUpperCase()}</td>
                                    <td><button className="btn text-danger"> <FaTrashAlt /> </button> </td>
                                </tr>
                            ))
                            :
                            <p className="text-center">No Resumes Added Yet!!!</p>
                    }
                </tbody>

            </table>

        </div>
    )
}

export default Saved