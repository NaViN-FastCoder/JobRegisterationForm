import React, { useState } from 'react';

const AddRound = () => {
  const [labelCount, setLabelCount] = useState(0);

  const incrementLabel = () => {
    setLabelCount(labelCount + 1);
  };

  return (
    <div >
      
      {[...Array(labelCount)].map((_, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'row', gap:'15px' ,padding:'10px' }}>
          <label  style={{margin:'auto'}}>{`Round ${index + 1}`}</label>
          <select  style={{backgroundColor:'lightgray',height:'30px', border:'none',borderRadius:'5px' ,marginRight:'120px'}}>
            <option value="option1">Skill Assesment</option>
            <option value="option2"> Technical Interview</option>
            <option value="option3"> AI based Interview</option>
            <option value="option4"> Offline Interview</option>

          </select>
        </div>
      ))}
      <button style={{backgroundColor:'black',cursor:'pointer',border:'none',borderRadius:'5px' ,color:'white', height:'40px', margin:'10px', width:'80px'}} onClick={incrementLabel}>Add Round</button>
    </div>
  );
}

export default AddRound;
