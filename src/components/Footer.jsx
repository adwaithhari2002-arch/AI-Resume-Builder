import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

function Footer() {
    return (
        <div style={{ height: '350px', backgroundColor: 'black' }} className='container-fluid text-light p-5'>
            <div className="row">
                <div className="col-lg-4">
                    <h4 className="mb-3">AI rBuilder</h4>
                    <p style={{ textAlign: 'justify' }}>"An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF."</p>
                </div>
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <h4 className="mb-3">Contact Us</h4>
                    <p> <MdAttachEmail /> resumebuilder@gmail.com</p>
                    <p> <FaPhoneAlt /> 6238130085</p>
                    <h5 className="my-3">Connect With Us</h5>
                    <div className="fs-5">
                        <FaInstagramSquare />
                        <FaFacebook className='mx-2' />
                        <FaWhatsappSquare />
                    </div>
                </div>
            </div>
            <h6 className="text-center my-2">Designed & built with react</h6>

        </div>
    )
}

export default Footer