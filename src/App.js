import React, {useState, useEffect} from 'react';
import MedSearch from './components/MedSearch';
import RequestInfo from './components/requestInfo';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './components/styles.css';
import './App.css';
import logo from './VillageLogo.png'
import MedicationDetails from './components/medicationDetails';





function App() {
  const [showMedSearch, setShowMedSearch] = useState(false);
  
  
  const [selectedMedication, setSelectedMedication] = useState(null);

  return (
    <div className="App">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
      </head>
      <Container maxWidth="lg">
        <div className='header'>
          <h1>VillageMD Refill App</h1>
          <img className='logo' src={logo}></img>
        </div>
        
        <Box sx={{ bgcolor: '#E6EED6', height: '100vh', borderColor:'#d1a43b', borderRadius: 1, boxShadow: 1 }} >
        
       
      {!showMedSearch ? (
        <RequestInfo setShowMedSearch={setShowMedSearch} />
      ) : (
        
          <MedSearch onMedicationSelect={setSelectedMedication}
          {...selectedMedication && (
            <MedicationDetails medication={selectedMedication} />
          )} />
          
        
      )}
      
      
      
      </Box>
      <div className='footer'><span>2023 Pete Castillo</span></div>
      
      </Container>
    </div>
  );
}

export default App;
