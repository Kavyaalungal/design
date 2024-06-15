// src/Rwgistration.jsx
import React, { useState } from 'react';
import {
  TextField,FormControl,FormControlLabel,RadioGroup, Radio,Button,Select,MenuItem,InputLabel,Checkbox,Grid,Typography,Container,
  Paper,FormGroup,Box} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

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
  const [reportRequestedThrough, setReportRequestedThrough] = useState({
    personally: false,
    courier: false,
    phone: false,
    email: false,
    sms: false,
  });
  
  const handleCheckboxChange = (event) => {
    setReportRequestedThrough({
      ...reportRequestedThrough,
      [event.target.name]: event.target.checked,
    });
  };
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
      {/* <Typography
        variant="h5"
        component="h1"
        gutterBottom
        sx={{
          padding: '10px',
          textAlign: 'center', // Center align the text
        }}
      >
        Register Patient
      </Typography>
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <TextField
          name="search"
          // label="Select Patient by Name, Phone, National ID, Manual Patient ID"
          variant="outlined"
          fullWidth
          value={formData.search}
          onChange={handleChange}
          sx={{ mt: 1, mb: 2, width: '100%', maxWidth: '600px', margin: '0 auto' }} // Center the TextField
          InputProps={{
            style: { height: '40px' },
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ style: { fontSize: '14px', marginTop: '-3px' } }}
        />
      </div>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
            <Button variant="contained" color="primary" className="navbar-button">
              NEW
            </Button>
            <Button variant="contained" color="secondary" className="navbar-button">
              SAVE
            </Button>
            <Button variant="contained" color="default" className="navbar-button">
              EXIT
            </Button>
          </Box>
        </Grid>
      </Grid> */}
    
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
      
        {/* <form onSubmit={handleSubmit}> */}
          <Grid container spacing={2}>
        
          <Grid item xs={12} sm={6}>
              <TextField
                id="labno"
                label="Lab No"
                variant="outlined"
                size="small"
                fullWidth
                // value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="datetime"
                label="Date/Time"
                variant="outlined"
                size="small"
                fullWidth
                // value={address}
                onChange={(e) => setAddress(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
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
  }}>Prefix</InputLabel>
    <Select
      name="prefix"
      value={formData.Designation}
      onChange={handleChange}
      label="Prefix"
      sx={{ width: '100%',height:'75%' }}
       
      // Adjust the width of the Select box
    >
      <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Mr">Mr</MenuItem>
                    <MenuItem value="Mrs">Mrs</MenuItem>
                    <MenuItem value="Ms">Ms</MenuItem>
                    <MenuItem value="Miss">Miss</MenuItem>
    </Select>
  </FormControl>
</Grid>
<Grid item xs={12} sm={10}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                size="small"
                fullWidth
                // value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
        
            <Grid item xs={12} sm={1}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  color: 'rgba(0, 0, 0, 0.7)',
                  fontSize: '16px',
                  marginTop: '8px',
                  textAlign: 'right', // aligns the text to the right
                }}
              >
                Age
              </Typography>
            </Grid>
              <Grid item container xs={12} sm={7} spacing={1}>
              <Grid item xs={3}>
              <TextField
                id="dd"
                label="Day"
                variant="outlined"
                size="small"
                fullWidth
                // value={day}
                onChange={(e) => setDay(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="mm"
                label="Month"
                variant="outlined"
                size="small"
                fullWidth
                // value={month}
                onChange={(e) => setMonth(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="yyyy"
                label="Year"
                variant="outlined"
                size="small"
                fullWidth
                // value={year}
                onChange={(e) => setYear(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid> <Grid item xs={12} sm={3}>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel id="genderLabel">Gender</InputLabel>
                    <Select
                      labelId="genderLabel"
                      id="gender"
                      // value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      label="Gender"
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="M">Male</MenuItem>
                      <MenuItem value="F">Female</MenuItem>
                      <MenuItem value="O">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
              <TextField
                id="dob"
                label="Date of Birth"
                type="date"
                variant="outlined"
                size="small"
                fullWidth
                // value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                  calculateAge(e.target.value);
                }}
                InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
              />
            </Grid>

        
<Grid item xs={12} sm={4}>
                <TextField
                  id="phone1"
                  label="Phone1"
                  variant="outlined"
                  size="small"
                  fullWidth
                  // value={phone1}
                  onChange={(e) => {
                    setPhone1(e.target.value)
                    setIsPhone1Valid(true)
                  }}
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  // error={!isPhone1Valid} // Apply error style if email is invalid
                  // helperText={!isPhone1Valid ? "Invalid Phone number" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
              <TextField
                id="phone2"
                label="Phone2"
                variant="outlined"
                size="small"
                fullWidth
                // value={phone2}
                onChange={(e) => {
                  setPhone2(e.target.value)
                  setIsPhone2Valid(true)
                }}
                InputLabelProps={{ style: { fontSize: '14px' } }}
                // error={!isPhone2Valid} 
                // helperText={!isPhone2Valid ? "Invalid Phone number" : ""}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                // value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsEmailValid(true); // Reset email validation on change
                }}
                InputLabelProps={{ style: { fontSize: '14px' } }}
                // error={!isEmailValid} // Apply error style if email is invalid
                // helperText={!isEmailValid ? "Invalid email address" : ""} // Display error message
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="nationality"
                label="Nationality"
                variant="outlined"
                size="small"
                fullWidth
                // value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
                // value={address}
                onChange={(e) => setAddress(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                  id="phone1"
                  label="Phone1"
                  variant="outlined"
                  size="small"
                  fullWidth
                  // value={phone1}
                  onChange={(e) => {
                    setPhone1(e.target.value)
                    setIsPhone1Valid(true)
                  }}
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  // error={!isPhone1Valid} // Apply error style if email is invalid
                  // helperText={!isPhone1Valid ? "Invalid Phone number" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                id="phone2"
                label="Phone2"
                variant="outlined"
                size="small"
                fullWidth
                // value={phone2}
                onChange={(e) => {
                  setPhone2(e.target.value)
                  setIsPhone2Valid(true)
                }}
                InputLabelProps={{ style: { fontSize: '14px' } }}
                // error={!isPhone2Valid} 
                // helperText={!isPhone2Valid ? "Invalid Phone number" : ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                // value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsEmailValid(true); // Reset email validation on change
                }}
                InputLabelProps={{ style: { fontSize: '14px' } }}
                // error={!isEmailValid} // Apply error style if email is invalid
                // helperText={!isEmailValid ? "Invalid email address" : ""} // Display error message
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="nationality"
                label="Nationality"
                variant="outlined"
                size="small"
                fullWidth
                // value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
                // value={address}
                onChange={(e) => setAddress(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
                // value={address}
                onChange={(e) => setAddress(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
                // value={address}
                onChange={(e) => setAddress(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
                // value={address}
                onChange={(e) => setAddress(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
                // value={address}
                onChange={(e) => setAddress(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
                // value={address}
                onChange={(e) => setAddress(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
        
            <Grid item xs={12}>
      <FormControl component="fieldset">
        <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
        <FormGroup row>
          <FormControlLabel
             control={<Checkbox checked={reportRequestedThrough.personally} onChange={handleCheckboxChange} name="personally" />}
            label="Personally"
          />
           <FormControlLabel
             control={<Checkbox checked={reportRequestedThrough.courier} onChange={handleCheckboxChange} name="courier" />}
            label="Courier"
          />
          <FormControlLabel
             control={<Checkbox checked={reportRequestedThrough.phone} onChange={handleCheckboxChange} name="phone" />}
            label="phone"
          />
         
          <FormControlLabel
             control={<Checkbox checked={reportRequestedThrough.email} onChange={handleCheckboxChange} name="email" />}
            label="Email"
          />
          <FormControlLabel
            control={<Checkbox checked={reportRequestedThrough.sms} onChange={handleCheckboxChange} name="sms" />}
            label="SMS"
          />
         
        </FormGroup>
      </FormControl>
      
    </Grid>
    <Grid item xs={12} sm={12}>
              <TextField
                id="notes"
                label="Notes"
                variant="outlined"
                size="small"
                fullWidth
                // value={notes}
                onChange={(e) => setNotes(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
          </Grid>
        {/* </form> */}
      </Paper>
    </Container>
    </div>
    </>
  );
};

export default Registration;
