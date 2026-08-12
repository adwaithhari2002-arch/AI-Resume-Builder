import axiosService from "../api/axiosService";

// save resume api: called by ResumeInput component when finish button click
export const saveResumeAPI = async (resumeDetails)=>{
    return await axiosService("POST","/resumes",resumeDetails)
}

// view resume api: called by view component when page loads in browser
export const viewResumeAPI = async (resumeId)=>{
    return await axiosService("GET",`/resumes/${resumeId}`,{})
}

// get resume api: called by saved component when page loads in browser
export const getAllResumesAPI = async ()=>{
    return await axiosService("GET",`/resumes`,{})
}

// remove resume api: called by saved component when delete btn clicked
export const deleteResumeAPI = async (resumeId)=>{
    return await axiosService("DELETE",`/resumes/${resumeId}`,{})
}