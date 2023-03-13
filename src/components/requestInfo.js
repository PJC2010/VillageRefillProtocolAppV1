import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import MedSearch from './MedSearch';
import differenceInDays from 'date-fns/differenceInDays';
import 'react-datepicker/dist/react-datepicker.css';

import  CssBaseline  from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



function RequestInfo({ setShowMedSearch }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const handleSubmit = e => {
      e.preventDefault();
      const daysSinceSelectedDate = differenceInDays(new Date(), selectedDate);
      if (daysSinceSelectedDate > 21) {
        setShowMedSearch(true);
      } else {
        alert('Refill too soon - please follow denial process.');
      }
    };
  
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">

      <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '25vh' }} onSubmit={handleSubmit}>
        <label>
          Enter the last fill date of medication requested:
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      </Container>
      </React.Fragment>
    );
  } export default RequestInfo