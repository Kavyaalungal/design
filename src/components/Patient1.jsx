import React, { useState, useEffect } from 'react';
import { TextField, Grid, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material';
import { CCard, CCardHeader } from '@coreui/react';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

const Patient1 = () => {
  const [searchCriteria, setSearchCriteria] = useState('Patient ID');
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [patientDetails, setPatientDetails] = useState(null);

  // Function to reset the form fields
  const resetForm = () => {
    setPatientDetails(null);
    setSearchValue('');
    setSuggestions([]);
  };

  // Function to handle change in search criteria
  const handleSearchCriteriaChange = (event) => {
    setSearchCriteria(event.target.value);
    setSearchValue('');
    setSuggestions([]);
  };

  // Function to handle change in search value
  const handleSearchValueChange = (event, value) => {
    setSearchValue(value);
    fetchSuggestions(value);
  };

  // Function to fetch suggestions based on search criteria and value
  const fetchSuggestions = async (value) => {
    try {
      const response = await axios.post('http://172.16.16.10:8082/api/PatientMstr/PatientSearchMaster', {
        YearId: 2425,
        BranchId: 2,
        SrchItem: searchCriteria,
        SrchVal: value
      });

      if (response.data && response.data.patientList) {
        setSuggestions(response.data.patientList);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  // Function to handle selecting a patient from suggestions
  const handleSelectPatient = async (event, newValue) => {
    if (!newValue) return;
    try {
      const response = await axios.post('http://172.16.16.10:8082/api/PatientMstr/PatientDetailsMaster', {
        YearId: 2425,
        BranchId: 2,
        PatCode: newValue.Patient_Code
      });

      if (response.data && response.data.patDetails) {
        setPatientDetails(response.data.patDetails);
      } else {
        setPatientDetails(null);
      }
    } catch (error) {
      console.error('Error fetching patient details:', error);
    }
  };

  // Render function for autocomplete options
  const renderOption = (props, option) => {
    return (
      <li {...props}>
        <div>{option.Patient_Name}</div>
        <div>{option.Patient_Email}</div>
        <div>{option.Patient_Phno}</div>
        <div>{option.Patient_Code}</div>
      </li>
    );
  };

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <strong style={{ fontSize: '2rem', color: '#523885', fontWeight: 'bold' }}>PATIENT REGISTRATION</strong>
      </CCardHeader>
      <div style={{ minHeight: '100vh', padding: '20px' }}>
        <Container component="main" maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Search By</InputLabel>
                <Select value={searchCriteria} onChange={handleSearchCriteriaChange} label="Search By">
                  <MenuItem value="Patient ID">Patient ID</MenuItem>
                  <MenuItem value="Name">Name</MenuItem>
                  <MenuItem value="Email">Email</MenuItem>
                  <MenuItem value="Phone">Phone</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Autocomplete
                freeSolo
                options={suggestions}
                getOptionLabel={(option) => `${option.Patient_Name || ''}, ${option.Patient_Email || ''}, ${option.Patient_Phno || ''}, ${option.Patient_Code || ''}`}
                onInputChange={handleSearchValueChange}
                onClose={resetForm} // Call resetForm when Autocomplete menu closes
                onChange={handleSelectPatient}
                renderOption={renderOption}
                renderInput={(params) => (
                  <TextField {...params} label={searchCriteria} variant="outlined" size="small" fullWidth />
                )}
              />
            </Grid>
          </Grid>
          {/* Additional form fields for patient details */}
          {/* Include your form fields here */}
        </Container>
      </div>
    </CCard>
  );
};

export default Patient1;
