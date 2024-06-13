// src/Rwgistration.jsx
import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
  Paper
} from '@mui/material';

const Registration = () => {
  const [formData, setFormData] = useState({
    search: '',
    patientId: '',
    patientType: '',
    optionalPatientId: '',
    nationalIdNumber: '',
    patientName: '',
    gender: '',
    dob: '',
    age: '',
    phoneNumber: '',
    email: '',
    organization: '',
    address: '',
    covidVaccineReceived: false,
    typeOfVaccine: '',
    vaccinationDate: '',
    dateOfVaccineDose2: '',
    arogySetuInstalled: false,
    hospitalized: false,
    patientCategory: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
    <Typography
    variant="h5"
    component="h1"
    gutterBottom
    sx={{
    //   backgroundColor: '#f0f0f0',  // Example background color
      padding: '10px',   
      marginLeft:'250px'         // Adjust padding as needed
    }}
  >
    Register Patient
  </Typography>
  <div
    style={{
    //   backgroundColor: '#e0e0e0',  // Example background color
      padding: '10px',             // Adjust padding as needed
    }}
  >
    <TextField
      name="search"
      label="Select Patient by Name, Phone, National ID, Manual Patient ID"
      variant="outlined"
      fullWidth
      value={formData.search}
      onChange={handleChange}
      sx={{ mt: 1, mb: 2,ml:33 }} 
      InputProps={{
        style: { height: '40px', width: '600px' },
     
      }}
      InputLabelProps={{ style: { fontSize: '14px', marginTop: '-3px' } }} // Adjust margin top and bottom using theme spacing
    />
  </div>
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
      
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          
            <Grid item xs={12} sm={3}>
              <TextField
                name="patientId"
                label="Patient Id"
                variant="outlined"
                fullWidth
                value={formData.patientId}
                onChange={handleChange}
                InputProps={{
                    style: { height: '40px', width: '200px' },
                 
                  }}
                  InputLabelProps={{ style: { fontSize: '14px', marginTop: '-3px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
  <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}  >
    <InputLabel  sx={{
    fontSize: '0.9rem',
    color: 'rgba(0, 0, 0, 0.6)', 
    marginTop: '-3px' // Example color
    // fontWeight: 'bold',          // Example font weight
    // Add any other styles as needed
  }}>Patient Type</InputLabel>
    <Select
      name="patientType"
      value={formData.patientType}
      onChange={handleChange}
      label="Patient Type"
      sx={{ width: '100%',height:'75%' }}
       
      // Adjust the width of the Select box
    >
      <MenuItem value="direct">Direct (D)</MenuItem>
      <MenuItem value="referred">Referred (R)</MenuItem>
    </Select>
  </FormControl>
</Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                name="optionalPatientId"
                label="Optional Patient ID"
                variant="outlined"
                fullWidth
                value={formData.optionalPatientId}
                onChange={handleChange}
                InputProps={{
                    style: { height: '40px', width: '200px' },
                 
                  }}
                  InputLabelProps={{ style: { fontSize: '14px', marginTop: '-3px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="nationalIdNumber"
                label="National ID Number"
                variant="outlined"
                fullWidth
                value={formData.nationalIdNumber}
                onChange={handleChange}
                InputProps={{
                    style: { height: '40px', width: '275px' },
                 
                  }}
                  InputLabelProps={{ style: { fontSize: '14px', marginTop: '-3px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
  <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}  >
    <InputLabel  sx={{
    fontSize: '0.9rem',
    color: 'rgba(0, 0, 0, 0.6)', 
    marginTop: '-3px' // Example color
    // fontWeight: 'bold',          // Example font weight
    // Add any other styles as needed
  }}>Designation</InputLabel>
    <Select
      name="Designation"
      value={formData.Designation}
      onChange={handleChange}
      label="Patient Type"
      sx={{ width: '100%',height:'75%' }}
       
      // Adjust the width of the Select box
    >
      <MenuItem value="direct">Direct (D)</MenuItem>
      <MenuItem value="referred">Referred (R)</MenuItem>
    </Select>
  </FormControl>
</Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                name="patientName"
                label="Patient Name"
                variant="outlined"
                fullWidth
                required
                value={formData.patientName}
                onChange={handleChange}
                InputProps={{
                    style: { height: '40px', width: '680px' },
                 
                  }}
                  InputLabelProps={{ style: { fontSize: '14px', marginTop: '-3px' } }}
              />
            </Grid>
  
  <Grid item xs={12}>
                <FormControl component="fieldset" sx={{ '& .MuiFormControlLabel-root': { marginRight: '1rem',marginLeft:'1rem' } }}>
                  <Typography>Gender</Typography>
                  <RadioGroup
                    row
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    sx={{ '& .MuiRadio-root': { width: '24px', height: '24px' } }} // Adjust size here
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="dob"
                label="Date of Birth"
                // type="date"
                variant="outlined"
                fullWidth
                // InputLabelProps={}
                value={formData.dob}
                onChange={handleChange}
                InputProps={{
                    style: { height: '40px', width: '275px' },
                 
                  }}
                  InputLabelProps={{ style: { fontSize: '14px', marginTop: '-2px'  ,} }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="age"
                label="Age"
                variant="outlined"
                fullWidth
                value={formData.age}
                onChange={handleChange}
                InputProps={{
                    style: { height: '40px', width: '275px' },
                 
                  }}
                  InputLabelProps={{ style: { fontSize: '14px', marginTop: '-2px'  , shrink: true} }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="phoneNumber"
                label="Contact Number"
                variant="outlined"
                fullWidth
                value={formData.phoneNumber}
                onChange={handleChange}
                InputProps={{
                    style: { height: '40px', width: '275px' },
                 
                  }}
                  InputLabelProps={{ style: { fontSize: '14px', marginTop: '-2px'  , shrink: true} }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.sendWhatsapp}
                    onChange={handleChange}
                    name="sendWhatsapp"
                  />
                }
                label="Send WhatsApp message to patient"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                InputProps={{
                    style: { height: '40px', width: '800px' },
                 
                  }}
                  InputLabelProps={{ style: { fontSize: '14px', marginTop: '-2px'  , shrink: true} }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="organization"
                label="Organization"
                variant="outlined"
                fullWidth
                value={formData.organization}
                onChange={handleChange}
                InputProps={{
                    style: { height: '40px', width: '800px' },
                 
                  }}
                  InputLabelProps={{ style: { fontSize: '14px', marginTop: '-2px'  , shrink: true} }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="address"
                label="Address"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={formData.address}
                onChange={handleChange}
                InputProps={{
                    style: { height: '40px', width: '800px' },
                 
                  }}
                  InputLabelProps={{ style: { fontSize: '14px', marginTop: '-2px'  , shrink: true} }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography>Covid Vaccine Received</Typography>
                <RadioGroup
                  row
                  name="covidVaccineReceived"
                  value={formData.covidVaccineReceived}
                  onChange={handleChange}
                >
                  <FormControlLabel value={true} control={<Radio />} label="Yes" />
                  <FormControlLabel value={false} control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}>
              <InputLabel  sx={{
    fontSize: '0.9rem',
    color: 'rgba(0, 0, 0, 0.6)', 
    marginTop: '-3px' // Example color
    // fontWeight: 'bold',          // Example font weight
    // Add any other styles as needed
  }}>Typ of Vaccine</InputLabel>
                <Select
                  name="typeOfVaccine"
                  value={formData.typeOfVaccine}
                  onChange={handleChange}
                  label="Type of Vaccine"
                  sx={{ width: '100%',height:'75%' }}
                >
                  <MenuItem value="covaxin">Covaxin</MenuItem>
                  <MenuItem value="covishield">Covishield</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="vaccinationDate"
                // label="Vaccination Date"
                type="date"
                variant="outlined"
                fullWidth
                // InputLabelProps={{ shrink: true }}
                value={formData.vaccinationDate}
                onChange={handleChange}
                InputProps={{
                    style: { height: '40px', width: '275px' },
                 
                  }}
                  InputLabelProps={{ style: { fontSize: '14px', marginTop: '-15px'  , shrink: true} }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="dateOfVaccineDose2"
                // label="Date of Vaccine Dose 2"
                type="date"
                variant="outlined"
                fullWidth
                // InputLabelProps={{ shrink: true }}
                value={formData.dateOfVaccineDose2}
                onChange={handleChange}
                InputProps={{
                    style: { height: '40px', width: '275px' },
                 
                  }}
                  InputLabelProps={{ style: { fontSize: '14px', marginTop: '-12px'  , shrink: true} }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography>Have you Installed Arogya Setu App</Typography>
                <RadioGroup
                  row
                  name="arogyaSetuInstalled"
                  value={formData.arogyaSetuInstalled}
                  onChange={handleChange}
                >
                  <FormControlLabel value={true} control={<Radio />} label="Yes" />
                  <FormControlLabel value={false} control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography>Is Patient Hospitalized?</Typography>
                <RadioGroup
                  row
                  name="hospitalized"
                  value={formData.hospitalized}
                  onChange={handleChange}
                >
                  <FormControlLabel value={true} control={<Radio />} label="Yes" />
                  <FormControlLabel value={false} control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}>
              <InputLabel  sx={{
    fontSize: '0.9rem',
    color: 'rgba(0, 0, 0, 0.6)', 
    marginTop: '-3px' // Example color
    // fontWeight: 'bold',          // Example font weight
    // Add any other styles as needed
  }}>Patient Label</InputLabel>
                <Select
                  name="patientCategory"
                  value={formData.patientCategory}
                  onChange={handleChange}
                  label="Patient Category"
                  sx={{ width: '100%',height:'75%' }}
                >
                  <MenuItem value="category1">Category 1</MenuItem>
                  <MenuItem value="category2">Category 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    </div>
    </>
  );
};

export default Registration;
