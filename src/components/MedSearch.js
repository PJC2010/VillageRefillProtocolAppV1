import React, {useState, useEffect } from 'react';
import drugs from '../data/meddata.json'
import Container from '@mui/material/Container'
import { CssBaseline } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './styles.css';
import MedicationDetails from './medicationDetails';
import '../App.css'

//Add brand name search function 



function MedSearch() {
    
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]); 
    const [options, setOptions] = useState([]);
    const [selectedMed, setSelectedMed] = useState(null);
    const [medList, setMedList] = useState([]);
    const [med, setMed] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    
     

    useEffect(() => {
        const uniqueNames = [...new Set(drugs.map((med, ID) => med.drugFullName.ID))];
    setOptions(uniqueNames);
    }, [setSearch]) 

    const handleSearchChange = e => {
        setSearch(e.target.value);
        console.log(e)
        
        
      };
      

      /* useEffect(() => {
        const filteredData = drugs.filter((med) => med.drugFullName.toLowerCase().includes(search.toLowerCase()))
        
        setSearchResults(filteredData.slice(0,1))
        console.log(handleSearchChange)
        
      }, [search]); 
      console.log(medList[0]) */

      useEffect(() => {
        const filteredData = drugs.filter((med) => {
          const fullNameMatch = med.drugFullName.toLowerCase().includes(search.toLowerCase())
          const brandNameMatch = med.brandName && med.brandName.toLowerCase().includes(search.toLowerCase)
          return fullNameMatch || brandNameMatch;
        });
        setSearchResults(filteredData.slice(0, 1))
      }, [search])
      

      
     

      


    
    return(

        <div className='med-search-container'>
            
        <CssBaseline />
        <Container className='form-container' maxWidth="lg" sx={{p: 2}}>
        
               
       
        <Autocomplete 
        style={{ backgroundColor: 'white'}}
        freeSolo
        fullWidth={true}
        sx={{m: 1}}
        id="med-search"
        color='secondary'
        options={drugs}
        getOptionLabel={(option) => `${option.drugFullName}/${option.brandName}`}
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
          <button  type="submit" onClick={() => setShowDetails(true) }>Next</button>
        )}
        
        
        
        {showDetails && selectedMed && (
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