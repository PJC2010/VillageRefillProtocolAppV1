import { addDays } from 'date-fns';
import React, {useState, useEffect } from 'react';
import drugs from '../data/meddata.json'
import LabCalc from './labCalc';
import MedLogic from './medLogic';
import OvCalc from './ovCalc';
import RequestInfo from './requestInfo';
import differenceInDays from 'date-fns/differenceInDays';
import ApprovalTimeFrame from './approvalTimeframe';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import { CssBaseline, OutlinedInput } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './styles.css';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import axios from 'axios';
import Button from '@mui/material/Button';
import MedicationDetails from './medicationDetails';









function MedSearch({setShowOvCalc}) {
    
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    //const [filteredMedData, setFilteredMedData] = useState([]);
    //const [selectedMedName, setSelectedMedName] = useState(""); 
    const [options, setOptions] = useState([]);
    
    const [lastLabDate, setLastLabDate] = useState(new Date());
    const [showMedSearch, setShowMedSearch] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectedDrug, setSelectedDrug] = useState('');
    const [selectedMed, setSelectedMed] = useState(null);
    const [medList, setMedList] = useState([]);
    const [med, setMed] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    
   
    
    
    
    
    
    
    

    const handleRequestInfoSubmit = selectedDate => {
        const daysSinceSelectedDate = differenceInDays(new Date(), selectedDate);
        if (daysSinceSelectedDate > 21) {
          setShowMedSearch(true);
        } else {
          setShowMedSearch(false);
        }
      };

      

    useEffect(() => {
        const uniqueNames = [...new Set(drugs.map((med, ID) => med.drugFullName.ID))];
    setOptions(uniqueNames);
    }, [setSearch]) 

    const handleSearchChange = e => {
        setSearch(e.target.value);
        console.log(e)
        
        
      };
      

      /* const handleDropdownChange = e => {
        setSelectedMedName(e.target.value);
      }  */

      useEffect(() => {
        const filteredData = drugs.filter((med) => med.drugFullName.toLowerCase().includes(search.toLowerCase()))
        setSearchResults(filteredData.slice(0,1))
        console.log(handleSearchChange)
        
      }, [search]); 
      console.log(medList[0])
      

      
     

      


    
    return(

        <div>
            
        <CssBaseline />
        <Container maxWidth="lg">
        
               
        {/* <label>Search for medication: <MedicationOutlinedIcon /></label>
        <input
      
        type="text"
        value={search}
        onChange={handleSearchChange} 
        list="options" />
        <datalist id="options">
        {options.map((med) => (
          <option key={med.ID} value={med} />
        ))}
         </datalist>  */}
        
          
        <Container>
        <Autocomplete 
        style={{ backgroundColor: 'white'}}
        id="med-search"
        color='secondary'
        options={drugs}
        getOptionLabel={(option) => option.drugFullName}
        renderInput={(params) => (
          <TextField 
          {...params}
          label="Search for medication"
          variant='outlined'
          
          />
        )}
        value={med}
        onChange={(event, newMed) => {
          setMed(newMed)
          setSelectedMed(newMed)
        }}
        
        />
        {selectedMed && (
          <button onClick={() => setShowDetails(true) }>Next</button>
        )}
        </Container>
        {showDetails && (
          <MedicationDetails medication={selectedMed} />
        )}
        {/* <Autocomplete
        options={drugs.map((med) => med.drugFullName)}
        getOptionLabel={(option) => option}
        renderInput={(params) => <TextField {...params} label="Search for medication" variant="outlined" />}
        onChange={(event, value) => setSelectedMed(value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>Select</Button>
      {medList.map((med, ID) => (
        <div key={selectedMed.ID}>
          <h3>{med.drugFullName}</h3>
          <p>{med.brandName}</p>
        </div>
      ))} */}
            
            
             
                
                    
             
          </Container>  
        </div>
    )
} export default MedSearch;