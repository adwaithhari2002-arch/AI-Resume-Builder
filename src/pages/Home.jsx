import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            {/* landing */}
            <div style={{ height: '100vh', backgroundImage: 'url("/landing.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} className="d-flex justify-content-center align-items-center">
                <div style={{ backgroundColor: 'rgba(0,0,0,0.4)' }} className="w-50 p-5 rounded text-light text-center">
                    <h1>Designed to Get Hired.Your Skills,Your Story,Your Next Job - All In One</h1>
                    <Link to={'/resume'} style={{ backgroundColor: '#755846' }} className='btn text-light mt-3'>Make Your Resume With AI</Link>
                </div>
            </div>

            {/* about */}
            <div className="container my-5">
                <h1 className="text-center mb-5">What's AI rBuilder</h1>
                <div className="row align-items-center">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">

                        <p style={{ textAlign: 'justify' }}>"An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF."</p>

                        <p style={{ textAlign: 'justify' }}>"The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes."</p>

                        <p style={{ textAlign: 'justify' }}>"Users can select templates, edit content, preview their resume, and download it in formats such as PDF.The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes."</p>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <img width={'100%'} height={'550px'} src="/resume.png" alt="resume" />
                    </div>
                </div>
            </div>


            {/* banner */}
            <div style={{ height: '80vh', backgroundImage: 'url("/team.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}></div>


            {/* testimony */}
            <div className="container my-5">
                <h1 className="text-center mb-5">Testimony</h1>
                <div className="row align-items-center">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <h5>Trusted By Professionals WorldWide</h5>

                        <p style={{ textAlign: 'justify' }}>"An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF."</p>

                        <p style={{ textAlign: 'justify' }}>"The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes."</p>

                        <p style={{ textAlign: 'justify' }}>"Users can select templates, edit content, preview their resume, and download it in formats such as PDF.The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes."</p>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img className='img-fluid p-2' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfcHJvZmVzc2lvbmFsX21hbl9pbl9idXNpbmVzc19zdWl0c19wcl8xYjBmYTE5My0xZWY0LTQyMjgtOTI1ZC0zNDBmNGZlYjE1OTAucG5n.png" alt="user" />
                            </div>
                             <div className="col-md-3">
                                <img className='img-fluid p-2' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfcHJvZmVzc2lvbmFsX21hbl9pbl9idXNpbmVzc19zdWl0c19wcl8xYjBmYTE5My0xZWY0LTQyMjgtOTI1ZC0zNDBmNGZlYjE1OTAucG5n.png" alt="user" />
                            </div>
                             <div className="col-md-3">
                                <img className='img-fluid p-2' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfcHJvZmVzc2lvbmFsX21hbl9pbl9idXNpbmVzc19zdWl0c19wcl8xYjBmYTE5My0xZWY0LTQyMjgtOTI1ZC0zNDBmNGZlYjE1OTAucG5n.png" alt="user" />
                            </div>
                             <div className="col-md-3">
                                <img className='img-fluid p-2' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfcHJvZmVzc2lvbmFsX21hbl9pbl9idXNpbmVzc19zdWl0c19wcl8xYjBmYTE5My0xZWY0LTQyMjgtOTI1ZC0zNDBmNGZlYjE1OTAucG5n.png" alt="user" />
                            </div>
                             <div className="col-md-3">
                                <img className='img-fluid p-2' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfcHJvZmVzc2lvbmFsX21hbl9pbl9idXNpbmVzc19zdWl0c19wcl8xYjBmYTE5My0xZWY0LTQyMjgtOTI1ZC0zNDBmNGZlYjE1OTAucG5n.png" alt="user" />
                            </div>
                             <div className="col-md-3">
                                <img className='img-fluid p-2' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfcHJvZmVzc2lvbmFsX21hbl9pbl9idXNpbmVzc19zdWl0c19wcl8xYjBmYTE5My0xZWY0LTQyMjgtOTI1ZC0zNDBmNGZlYjE1OTAucG5n.png" alt="user" />
                            </div>
                             <div className="col-md-3">
                                <img className='img-fluid p-2' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfcHJvZmVzc2lvbmFsX21hbl9pbl9idXNpbmVzc19zdWl0c19wcl8xYjBmYTE5My0xZWY0LTQyMjgtOTI1ZC0zNDBmNGZlYjE1OTAucG5n.png" alt="user" />
                            </div>
                             <div className="col-md-3">
                                <img className='img-fluid p-2' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfcHJvZmVzc2lvbmFsX21hbl9pbl9idXNpbmVzc19zdWl0c19wcl8xYjBmYTE5My0xZWY0LTQyMjgtOTI1ZC0zNDBmNGZlYjE1OTAucG5n.png" alt="user" />
                            </div>
                             <div className="col-md-3">
                                <img className='img-fluid p-2' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfcHJvZmVzc2lvbmFsX21hbl9pbl9idXNpbmVzc19zdWl0c19wcl8xYjBmYTE5My0xZWY0LTQyMjgtOTI1ZC0zNDBmNGZlYjE1OTAucG5n.png" alt="user" />
                            </div>
                             <div className="col-md-3">
                                <img className='img-fluid p-2' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfcHJvZmVzc2lvbmFsX21hbl9pbl9idXNpbmVzc19zdWl0c19wcl8xYjBmYTE5My0xZWY0LTQyMjgtOTI1ZC0zNDBmNGZlYjE1OTAucG5n.png" alt="user" />
                            </div>
                             <div className="col-md-3">
                                <img className='img-fluid p-2' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfcHJvZmVzc2lvbmFsX21hbl9pbl9idXNpbmVzc19zdWl0c19wcl8xYjBmYTE5My0xZWY0LTQyMjgtOTI1ZC0zNDBmNGZlYjE1OTAucG5n.png" alt="user" />
                            </div>
                             <div className="col-md-3">
                                <img className='img-fluid p-2' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfcHJvZmVzc2lvbmFsX21hbl9pbl9idXNpbmVzc19zdWl0c19wcl8xYjBmYTE5My0xZWY0LTQyMjgtOTI1ZC0zNDBmNGZlYjE1OTAucG5n.png" alt="user" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home