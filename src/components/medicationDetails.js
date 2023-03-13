import React, { useState } from "react";
import OvCalc from "./ovCalc";
import LabCalc from "./labCalc";
import ApprovalTimeFrame from "./approvalTimeframe";
import differenceInDays from 'date-fns/differenceInDays';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';



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
          
            {medication && medication.drugFullName && <h2>{medication.drugFullName}</h2>}
            {medication && medication.drugClassName &&<p>Drug Subclass: {medication.drugClassName}</p>}
            {medication && medication.drugGroupName && <p>Drug Group: {medication.drugGroupName}</p>}
            {medication && medication.adherenceDrug && <p>Adherence Drug? {medication.adherenceDrug}</p>}
            {medication && medication.labRequired && <p>Labs Required: {medication.labsRequired}</p>}
            {medication && medication.labsRequiringEscalation &&<p>Labs needing escalation: {medication.labsRequiringEscalation}</p>}
            {medication && medication.quantityLimitMessage &&<p>Quantity Limit message: {medication.quantityLimitMessage}</p>}
            
            <Divider />
            
            {medication.ovIntervalDays  && <OvCalc    ovIntervalDays={medication.ovIntervalDays} calculateNumofDaysTillNextOv={calculateNumofDaysTillNextOv} />} 
            <Divider />
            {medication.labIntervalDays !== "N/A"  && (<LabCalc labIntervalDays={medication.labIntervalDays} calculateNumofDaysTillNextLab={calculateNumofDaysTillNextLab} />)}
            <Divider />
           <ApprovalTimeFrame daysTillNextOVDate={daysTillNextOVDate} daysTillNextLabDate={daysTillNextLabDate} /> 
            
            
            
           

            
            
           
           


        </div>
        </Container>
    )
};

export default MedicationDetails;