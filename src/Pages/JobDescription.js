import React from "react";
import { TbCircleNumber2, TbCircleNumber3} from "react-icons/tb";
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5";
import InterviewPage from './InterviewPage';
import './JobDescription.css'
import { useState } from "react";
const JobDescription=()=>{
    const[interviewPage,setInterviewPage]=useState(false);
    const[firstPopup,setFirstPopup]=useState(true);
    
    const submitform=()=>{
        setFirstPopup(false);
        setInterviewPage(true);
    }
    return(
        <div>
            {firstPopup && (
        <div className="overlay">
            <div className="dialog">
            <div className="title">
                <label>Create a Job</label>

            </div>
            <div className="desc">
            
           <div className="start"><IoCheckmarkDoneCircleSharp style= {{color:'blue'}} />Job Application</div>
           <div className="start"><TbCircleNumber2 />Job Description</div>
           <div className="start"><TbCircleNumber3 />Interview Process</div>
            </div>
<div className="squaredesc">
            <div >
                <p>A job represents a new opening ,an open position or a vacancy. </p>
                    
                <p> <br/>Creating a job will allow you to add candidates to that job and </p><p> advertise it on your carrer page.</p>
                </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding:'10px' ,gap:'20px'}}>
      <label>Skills Required</label>
      <button className='btn'>Suggest with AI</button>

    </div>
    <input type="text" placeholder="Software Engineering" className="textbox"/>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding:'10px' ,gap:'20px'}}>
      <label>Intern Responsibilty</label>
      <button className='btn'>Edit with AI</button>
     

    </div>
    <textarea  placeholder="Selected Interships include
            1.
            2.
            3.
            " className="skilltext"/>

<button onClick={submitform} className="btnn">Save and next</button>
</div>

            
        </div>)}
        {
                interviewPage &&(
                    <InterviewPage/>
                )
        }
        </div>
    )
}
export default JobDescription