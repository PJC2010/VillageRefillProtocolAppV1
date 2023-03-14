import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import differenceInDays from 'date-fns/differenceInDays'

const LabCalc = ({ labIntervalDays, calculateNumofDaysTillNextLab }) => {
  const [lastLabDate, setLastLabDate] = useState(new Date());
  const [nextLabDate, setNextLabDate] = useState(null);
  

  const calculateNextLabDate = () => {
    const today = new Date();
    const daysUntilNextLabDate = differenceInDays(nextLabDate, today)
    console.log(daysUntilNextLabDate)
    const newDate = new Date(lastLabDate);
    const nextLabsDate = new Date(newDate.getTime() + labIntervalDays * 24 * 60 * 60 * 1000);
    setNextLabDate(nextLabsDate);
    console.log(nextLabsDate)
    calculateNumofDaysTillNextLab(nextLabsDate);
    
    
  };

  return (
    <div>
      <h2>Next Lab Date Calculator</h2>
      <div>
        <label>Last Lab Date:</label>
        <DatePicker
          selected={lastLabDate}
          onChange={(date) => setLastLabDate(date)}
          dateFormat="MM/dd/yyyy"
          todayButton="Today"
        />
      </div>
      <div>
        <button onClick={calculateNextLabDate}>Calculate Next Lab Date</button>
      </div>
      {nextLabDate && (
        <div>
          <label>Next Lab Date:</label>
          <div>{nextLabDate.toLocaleDateString()}</div>
        </div>
      )}
    </div>
  );
};

export default LabCalc;