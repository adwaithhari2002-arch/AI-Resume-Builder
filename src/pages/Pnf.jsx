import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
    return (
        <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column'>
            <img className='w-25' src="https://cdni.iconscout.com/illustration/premium/thumb/404-page-not-found-6920426-5663205.png" alt="page not found" />
            <h6 className='mt-5'>We are sorry,look like you are lost</h6>
            <p>Page you are looking is not available</p>
            <Link to={'/'} className='btn btn-dark'>Back to Home</Link>
        </div>
    )
}

export default Pnf