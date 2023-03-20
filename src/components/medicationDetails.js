import React, { useState } from "react";
import OvCalc from "./ovCalc";
import LabCalc from "./labCalc";
import ApprovalTimeFrame from "./approvalTimeframe";
import differenceInDays from 'date-fns/differenceInDays';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';



const MedicationDetails = ({medication}) => {

  const highlightStyle = {
    backgroundColor: '#ff0d0d',
    fontWeight: 'bold',
    color: '#fbff0d'

  }
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
        <Container className='form-container' sx={{paddingTop: 2}}>
        <div>
          <Box sx={{backgroundColor: '#f2f6fc' }}>
          
          
            {medication && medication.drugFullName && <h2>{medication.drugFullName}</h2>}
            {medication && medication.drugClassName &&<p>Brand Name: {medication.brandName}</p>}
            {medication && medication.drugClassName &&<p>Drug Subclass: {medication.drugClassName}</p>}
            

      
            {medication && medication.drugGroupName && <p>Drug Group: {medication.drugGroupName}</p>}
            {medication && medication.adherenceDrug && <p>Adherence Drug? {medication.adherenceDrug}</p>}
            <p>Labs Required: {medication.labsRequired === 'N/A' ? medication.labsRequired : <span style={highlightStyle}>{medication.labsRequired}</span>}</p>
            <p>Labs Requiring Escalation: {medication.labsRequiringEscalation === 'N/A' ? medication.labsRequiringEscalation : <span style={highlightStyle}>{medication.labsRequiringEscalation}</span>}</p>
            <p>Vitals Required: {medication.vitalsRequired === 'N/A' ? medication.vitalsRequired : <span style={highlightStyle}>{medication.vitalsRequired}</span>}</p>
            <p>Vitals Requiring Escalation: {medication.vitalsRequiringEscalation === 'N/A' ? medication.vitalsRequiringEscalation : <span style={highlightStyle}>{medication.vitalsRequiringEscalation}</span>}</p>
            <p>Quantity Limit Message: {medication.quantityLimitMessage === 'N/A' ? medication.quantityLimitMessage : <span style={highlightStyle}>{medication.quantityLimitMessage}</span>}</p>
            
            <Divider />
            
            
            {medication.ovIntervalDays  && <OvCalc    ovIntervalDays={medication.ovIntervalDays} calculateNumofDaysTillNextOv={calculateNumofDaysTillNextOv} />} 
            <Divider />
            {medication.labIntervalDays !== "N/A"  && (<LabCalc labIntervalDays={medication.labIntervalDays} calculateNumofDaysTillNextLab={calculateNumofDaysTillNextLab} />)}
            <Divider />
            <ApprovalTimeFrame daysTillNextOVDate={daysTillNextOVDate} daysTillNextLabDate={daysTillNextLabDate} /> 
            </Box>
           
            
            
            
           

            
            
           
           


        </div>
        </Container>
    )
};

export default MedicationDetails;