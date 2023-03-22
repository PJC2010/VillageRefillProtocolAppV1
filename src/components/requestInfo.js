import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import differenceInDays from 'date-fns/differenceInDays';
import 'react-datepicker/dist/react-datepicker.css';
import addDays from 'date-fns/addDays';
import  CssBaseline  from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
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
      // console.log(daysToAdd)
      const daysSupplyToAdd = addDays(selectedDate, daysToAdd )
      // console.log(daysSupplyToAdd)
      const daysSinceSelectedDate = differenceInDays(daysSupplyToAdd, new Date() );
      // console.log(daysSinceSelectedDate)
      if (daysSinceSelectedDate < 21) {
        setShowMedSearch(true);
      } else {
        alert('Refill too soon - please follow denial process.');
      }
    };
  
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" className='form-container' >
          <h2 className='form-title'>Last Fill Date Info</h2>

      <form  onSubmit={handleSubmit} className='last-fill-date-form'>
        <label>
          Enter the last fill date of medication requested:
          </label>
          <div className='form-group'>
          <DatePicker
            className='custom-datepicker'
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            todayButton="Today"
            required
          />
        
        </div>
        <div className='form-group'>
      <label htmlFor='day-suppy'> Enter last filled day supply of medication requested: </label>
        <input id='daySupply' type="number" min="0" max="100" value={daysSupply} onChange={handleDaySupplyChange} required />
        </div>
        
        <button type="submit">Submit</button>
        
      </form>
      </Container>
      </React.Fragment>
    );
  } export default RequestInfo