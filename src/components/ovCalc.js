import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import differenceInDays from 'date-fns/differenceInDays';
import ApprovalTimeFrame from './approvalTimeframe';

const OvCalc = ({ ovIntervalDays, calculateNumofDaysTillNextOv }) => {
  const [lastAppointmentDate, setLastAppointmentDate] = useState(new Date());
  const [nextAppointmentDate, setNextAppointmentDate] = useState(null);
  


  

  const calculateNextAppointmentDate = () => {
    
    
    
    const newDate = new Date(lastAppointmentDate);
    const nextOvDate = new Date(newDate.getTime() + ovIntervalDays * 24 * 60 * 60 * 1000);
    setNextAppointmentDate(nextOvDate);
    console.log(nextOvDate)
    const daysTillNextOVDate = calculateNumofDaysTillNextOv(nextOvDate);
    
    
    
  };

  

  
  
  
    

  

  return (
    <div>
      <h2>Next Appointment Date Calculator</h2>
      <div>
        
        <DatePicker
          selected={lastAppointmentDate}
          onChange={(date) => setLastAppointmentDate(date)}
          dateFormat="MM/dd/yyyy"
        />
      </div>
      <div>
        <button onClick={calculateNextAppointmentDate}>Calculate Next Appointment Date</button>
      </div>
      {nextAppointmentDate && (
        <div>
          <label>Next Appointment Date:</label>
          <div>{nextAppointmentDate.toLocaleDateString()}</div>
        </div>
      )}
      
    </div>
    
  );
};

export default OvCalc;