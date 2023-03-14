import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import MedSearch from './MedSearch';
import differenceInDays from 'date-fns/differenceInDays';
import 'react-datepicker/dist/react-datepicker.css';
import addDays from 'date-fns/addDays';

import  CssBaseline  from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import '../App.css'



function RequestInfo({ setShowMedSearch }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [daysSupply, setDaysSupply] = useState("")

    const handleDaySupplyChange = (event) => {
      setDaysSupply(event.target.value)
      
    }
  
    const handleSubmit = e => {
      e.preventDefault();
      const daysToAdd = parseInt(daysSupply)
      console.log(daysToAdd)
      const daysSupplyToAdd = addDays(selectedDate, daysToAdd )
      console.log(daysSupplyToAdd)
      const daysSinceSelectedDate = differenceInDays(daysSupplyToAdd, new Date() );
      console.log(daysSinceSelectedDate)
      if (daysSinceSelectedDate < 21) {
        setShowMedSearch(true);
      } else {
        alert('Refill too soon - please follow denial process.');
      }
    };
  
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" >

      <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '25vh' }} onSubmit={handleSubmit}>
        <label>
          Enter the last fill date of medication requested:
          <DatePicker
            className=''
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            todayButton="Today"
            required
          />
        </label>
        <label>
          Please enter the last days supply of medication requested:
        <input id='daysupply' type="number" min="0" max="100" value={daysSupply} onChange={handleDaySupplyChange} required />
        </label>
        <button type="submit">Submit</button>
        
      </form>
      </Container>
      </React.Fragment>
    );
  } export default RequestInfo