import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';



function Download() {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h2>Downloaded Resume Details</h2>
                <Link to={'/resume-details'}> <IoMdArrowRoundBack/>Back</Link>
            </div>
            <p className='mt-3 fs-5'>Total Downloaded resumes from our site is <span className='fw-bolder'>10</span>
            </p>
            <div className="row my-2">
                {/* duplicate according to download resume count */}
                <div className="col-lg-4 mb-3">
                    <div style={{height:'400px'}} className="shadow p-3 rounded">
                        <h6>Review at : time stamp</h6>
                        <div className="mt-3 text-center">
                           <Link to={`/resumes/id`}><img className='w-100' height={'300px'} src="https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg" alt="download cv" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download