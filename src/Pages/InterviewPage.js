import React from "react";
import {  TbCircleNumber3} from "react-icons/tb";
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5";
import AddRound from "./Round";
import './InterviewPage.css'
import { useState } from "react";
const InterviewPage=()=>{
    
    const[firstPopup,setFirstPopup]=useState(true);
    
    const submitform=()=>{
        alert('Form Submitted.We will get back to you  once its posted')
        setFirstPopup(false);
       
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
           <div className="start"><IoCheckmarkDoneCircleSharp style= {{color:'blue'}}/>Job Description</div>
           <div className="start"><TbCircleNumber3 />Interview Process</div>
            </div>
<div className="squaredesc">
            <div >
                <p>A job represents a new opening ,an open position or a vacancy. </p>
                    
                <p> <br/>Creating a job will allow you to add candidates to that job and </p><p> advertise it on your carrer page.</p>
                </div>
                </div>
<div className="">
                <AddRound/>
                <div className="group">
            <div className="label">
            <label>
            Kindly check the skills </label>
            <input type="text" placeholder="SEO" className="textbox"/></div>

            <div className="label">
            <label>Any Platform or qualification </label>
            <input type="text" placeholder="Yes" className="textbox"/></div></div>
                </div>
                

    
  
<button  className='btnn' onClick={submitform}>Submit</button>


</div>

            
        </div>)}
       
        </div>
    )
}
export default InterviewPage