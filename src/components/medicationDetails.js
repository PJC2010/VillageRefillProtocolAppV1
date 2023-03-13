import React, { useState } from "react";
import OvCalc from "./ovCalc";
import LabCalc from "./labCalc";
import ApprovalTimeFrame from "./approvalTimeframe";
import differenceInDays from 'date-fns/differenceInDays';
import Container from '@mui/material/Container'



const MedicationDetails = ({medication}) => {
    const [daysTillNextOVDate, setDaysTillNextOvDate] = useState(null);
    const [daysTillNextLabDate, setDaysTillNextLabDate] = useState(null);
    const calculateNumofDaysTillNextOv = (nextAppointmentDate) => {
        const today = new Date();
        const daysUntilNextOVDate = differenceInDays(nextAppointmentDate, today);
        console.log(daysUntilNextOVDate);
        setDaysTillNextOvDate(daysUntilNextOVDate)
        return daysUntilNextOVDate;
      };
      const calculateNumofDaysTillNextLab = (nextLabDate) => {
        const today = new Date();
        const daysUntilNextLabDate = differenceInDays(nextLabDate, today);
        console.log(daysUntilNextLabDate);
        setDaysTillNextLabDate(daysUntilNextLabDate)
        return daysUntilNextLabDate;
      };
      
    
    

    
    

    
    

    

    
    
    

    return (
        <Container>
        <div>
            <h2>{medication.drugFullName}</h2>
            <p>Drug Subclass: {medication.drugClassName}</p>
            <p>Drug Group: {medication.drugGroupName}</p>
            <p>Adherence Drug? {medication.adherenceDrug}</p>
            <p>Labs Required: {medication.labsRequired}</p>
            <p>Labs needing escalation: {medication.labsRequiringEscalation}</p>
            <p>Quantity Limit message: {medication.quantityLimitMessage}</p>
            
            <OvCalc    ovIntervalDays={medication.ovIntervalDays} calculateNumofDaysTillNextOv={calculateNumofDaysTillNextOv} />
            {medication.labIntervalDays !== "N/A"  && (<LabCalc labIntervalDays={medication.labIntervalDays} calculateNumofDaysTillNextLab={calculateNumofDaysTillNextLab} />)}
            <ApprovalTimeFrame daysTillNextOVDate={daysTillNextOVDate} daysTillNextLabDate={daysTillNextLabDate} /> 
            
            
           

            
            
           
           


        </div>
        </Container>
    )
};

export default MedicationDetails;