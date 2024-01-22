import React, { useState } from 'react';
import './Job.css';
import { FaTasks  } from 'react-icons/fa';

import CreateJob from './CreateJob';

const Job = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
    const [secondPopup,setSecondPopup]=useState(false);
    const[firstPopup,setFirstPopup]=useState(true);
  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const nextPage=()=>{
        setFirstPopup(false);
        setSecondPopup(true);
  }
  return (
    <div className='bg'>

    
      <button className='open' onClick={openDialog}>Register for a Job</button>

      {isDialogOpen && (
        
       <div>
       {firstPopup &&(
        <div className="overlay">
          <div className="dialog">
            <div className="dialog-content">
   <div className="bt"><button onClick={closeDialog}>X</button></div> 
 
                <label className='lb' >Create a Job</label>

            
                  
            </div>
            
            <button className='calendar' onClick={nextPage}>
            <FaTasks className='icon'/>Post a job with AI
            </button>
          
          </div>
          
        
          
        </div>)}

        {secondPopup &&(
                <div>
                    <CreateJob />
                </div>
        )}
       
        </div>
      
        
      )}

    </div>
  );
};

export default Job;
