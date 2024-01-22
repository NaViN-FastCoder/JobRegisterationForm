import React, { useState } from "react";
import {TbCircleNumber1, TbCircleNumber2, TbCircleNumber3} from "react-icons/tb";
import './CreateJob.css'
import JobDescription from "./JobDescription";
const CreateJob=()=>{
    const [isDialogOpen, setDialogOpen] = useState(false);
    const[descPage,setDescPage]=useState(false);
    const[firstPopup,setFirstPopup]=useState(true);
    const submitform=()=>{
            setFirstPopup(false);
            setDescPage(true);
    }
    const closeDialog = () => {
        setDialogOpen(false);
      };
    return(
        <div>

       {firstPopup && (
        <div className="overlay">
            <div className="dialog">
           
            <div className="title">
                <label>Create a Job</label>

            </div>

           
            <div className="desc">
            
           <div className="start"> <TbCircleNumber1 />Job Application</div>
           <div className="start"><TbCircleNumber2 />Job Description</div>
           <div className="start"><TbCircleNumber3 />Interview Process</div>
            </div>
<div className="squaredesc">
            <div >
                <p>A job represents a new opening ,an open position or a vacancy. </p>
                    
                <p> <br/>Creating a job will allow you to add candidates to that job and </p><p> advertise it on your carrer page.</p>
                </div>
                </div>

        <form className="formclass">
            <div className="group">
            <div className="label">
            <label>Position name</label>
            <input type="text" placeholder="Position name" className="textbox"required={true}/></div>

            <div className="label">
            <label>Company name</label>
            <input type="text" placeholder="Company name"className="textbox"required={true}/></div></div>

            <div className="group">
                <div>
            <div className="label">
            <label>Job Pipeline</label>
            <input type="text" placeholder="Default Job Pipeline" className="textbox"required={true}/></div>

            </div>
            <div>
            <div className="label">
            <label>Add Location</label>
            <input type="text" placeholder="Indore" className="textbox"required={true}/></div>
            </div></div>

            <div className="group">
            <div className="label">
            <label>Contract Details </label>
            <input type="text" placeholder="Fulltime" className="textbox"required={true}/></div>


            <div className="label">
            <label>Add Minimum Salary </label>
            <input type="text" placeholder="1500$" className="textbox" required={true}/></div>
</div>
<div className="group">
            <div className="label">
            <label>
            Add Maximum Salary </label>
            <input type="text" placeholder="5000$" className="textbox" required={true}/></div>

            <div className="label">
            <label>Currency </label>
            <input type="text" placeholder="US Dollar" className="textbox" required={true}/></div></div>

            <div className="label">
            <label className="lastlabel">Select frequency </label>
            <input type="text" placeholder="Monthly" className="textboxlast" required={true}/></div>
            <button onClick={submitform} className="btnn">Save and next</button>
        </form>
</div>
            
        </div>)}
        {descPage && (
            <JobDescription/>
        )}
        </div>
    )
}
export default CreateJob