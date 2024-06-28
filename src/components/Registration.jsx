// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { TextField, Button, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, FormControlLabel, FormGroup, Checkbox, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import Navbar from './Navbar';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Registration= () => {
//  return (
//     <>
//      <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px',  }}>
// <Container component="main" maxWidth="md" >
//       <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
//           <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//               <TextField
//                 id="labno"
//                 label="Lab No"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//                  style={{ marginTop: '10px' }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//             <TextField
//       id="invDateTime"
//       label="Date"
//       variant="outlined"
//       size="small"
//       fullWidth
//       type="datetime-local"
//       InputLabelProps={{ shrink: true }}
//       style={{ marginTop: '10px' }}
//     />
//      </Grid>
//      <Grid item xs={12} sm={4}>
//                 <TextField
//                   id="patientid"
//                   label="Patient ID"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '14px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <TextField
//                   id="memberid"
//                   label="Member Id"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '14px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={4}>
//               <Button variant="contained" color="primary"
//               style={{
//                 // backgroundColor: '#3f51b5', // Blue background
//                 color: 'white', // White text
//                 fontWeight: 'bold', // Bold text
//                 padding: '10px 10px', // Padding
//                 borderRadius: '4px', // Rounded corners
//                 cursor: 'pointer',
//                 marginBottom:'10px' // Pointer cursor on hover
//               }}>
//                 Search
//               </Button>
//               </Grid>
//             <Grid item xs={12} sm={2}>
//   <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}  >
//     <InputLabel  sx={{
//     fontSize: '0.9rem',
//     color: 'rgba(0, 0, 0, 0.6)', 
//     marginTop: '-3px'
//   }}>Prefix</InputLabel>
//     <Select
//       name="prefix"
//       label="Prefix"
//       sx={{ width: '100%',height:'75%' }}
//         >
//        <MenuItem value=""><em>None</em></MenuItem>
//                     <MenuItem value="Mr">Mr</MenuItem>
//                     <MenuItem value="Mrs">Mrs</MenuItem>
//                     <MenuItem value="Ms">Ms</MenuItem>
//                     <MenuItem value="Miss">Miss</MenuItem>
//     </Select>
//   </FormControl>
// </Grid>
// <Grid item xs={12} sm={10}>
//               <TextField
//                 id="name"
//                 label="Name"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
        
//             <Grid item xs={12} sm={1}>
//               <Typography
//                 variant="body1"
//                 gutterBottom
//                 sx={{
//                   fontWeight: 'bold',
//                   color: 'rgba(0, 0, 0, 0.7)',
//                   fontSize: '16px',
//                   marginTop: '8px',
//                   textAlign: 'left',
//                 }}> Age</Typography>
//             </Grid>
//               <Grid item container xs={12} sm={7} spacing={1}>
//               <Grid item xs={3}>
//               <TextField
//                 id="dd"
//                 label="Day"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={3}>
//               <TextField
//                 id="mm"
//                 label="Month"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={3}>
//               <TextField
//                 id="yyyy"
//                 label="Year"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid> 
//             <Grid item xs={12} sm={3}>
//                   <FormControl variant="outlined" size="small" fullWidth>
//                     <InputLabel id="genderLabel">Gender</InputLabel>
//                     <Select
//                       labelId="genderLabel"
//                       id="gender"
//                       label="Gender" >
//                       <MenuItem value=""><em>None</em></MenuItem>
//                       <MenuItem value="M">Male</MenuItem>
//                       <MenuItem value="F">Female</MenuItem>
//                       <MenuItem value="O">Other</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//               <TextField
//                 id="dob"
//                 label="Date of Birth"
//                 type="date"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
//               />
//             </Grid>
// <Grid item xs={12} sm={4}>
//                 <TextField
//                   id="phone1"
//                   label="Phone1"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '14px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={4}>
//               <TextField
//                 id="phone2"
//                 label="Phone2"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 id="email"
//                 label="Email"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
          
           
//             <Grid item xs={12} sm={12}>
//               <TextField
//                 id="address"
//                 label="Address"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//           <TextField
//              id="refBy"
//             label="Ref By"
//             variant="outlined"
//             size="small"
//             fullWidth
//             InputLabelProps={{ style: { fontSize: '14px' } }}
//           />
//         </Grid>
//               <Grid item xs={12} sm={6}>
//               <TextField
//                 id="outdr"
//                 label="Out Dr"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//             <TextField
//                 id="branch"
//                 label="Branch"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//             <TextField
//                 id="ipopno"
//                 label="IP/OP"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//       <TextField
//         id="collmode"
//         label="Coll. Mode"
//         variant="outlined"
//         size="small"
//         fullWidth
//         InputLabelProps={{ style: { fontSize: '14px' } }}
//       />
//     </Grid>
//     <Grid item xs={12} sm={6}>
//             <TextField
//           id="area"
//           label="Area"
//           variant="outlined"
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '14px' } }}
//         />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//             <TextField
//                 id="paymode"
//                 label="Pay mode"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//             <TextField
//                 id="collperson"
//                 label="Coll.Person"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//       <TextField
//         id="corporate"
//         label="Corporate"
//         variant="outlined"
//         size="small"
//         fullWidth
//         InputLabelProps={{ style: { fontSize: '14px' } }}
//       />
// </Grid>
// <Grid item xs={12} sm={6}>
//             <TextField
//               id="cardno"
//               label="Card No"
//               variant="outlined"
//               size="small"
//               fullWidth
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//       </Grid>
//       <Grid item xs={12} sm={12}>
//       <Box mt={3}>
//             <TableContainer component={Paper}>
//               <Table aria-label="simple table">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Field 1</TableCell>
//                     <TableCell>Field 2</TableCell>
//                     <TableCell>Field 3</TableCell>
//                     <TableCell>Field 4</TableCell>
//                     <TableCell>Field 5</TableCell>
//                     <TableCell>Field 5</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {/* Add rows dynamically if needed */}
//                   <TableRow>
//                     {/* <TableCell><TextField variant="outlined" size="small" /></TableCell> */}
//                     {/* <TableCell><TextField variant="outlined" size="small" /></TableCell> */}
//                     {/* <TableCell><TextField variant="outlined" size="small" /></TableCell>
//                     <TableCell><TextField variant="outlined" size="small" /></TableCell>
//                     <TableCell><TextField variant="outlined" size="small" /></TableCell>
//                     <TableCell><TextField variant="outlined" size="small" /></TableCell> */}
//                   </TableRow>
//                   {/* Add more rows as needed */}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Box>
//           </Grid>
//       <Grid item xs={12} sm={6}>
//   <TextField
//     id="sampleOn"
//     label="Sample On"
//     type="datetime-local"
//     variant="outlined"
//     size="small"
//     fullWidth
//     InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
//   />
// </Grid>
// <Grid item xs={12} sm={6}>
//   <TextField
//     id="reportTime"
//     label="Report Time"
//     type="datetime-local"
//     variant="outlined"
//     size="small"
//     fullWidth
//     InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
//   />
// </Grid>
//         <Grid item xs={12}>
//       <FormControl component="fieldset">
//         <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
//         <FormGroup row>
//           <FormControlLabel
//              control={<Checkbox  name="personally" />}
//             label="Personally"
//           />
//            <FormControlLabel
//              control={<Checkbox  name="courier" />}
//             label="Courier"
//           />
//           <FormControlLabel
//              control={<Checkbox   name="phone" />}
//             label="phone"
//           />
         
//           <FormControlLabel
//              control={<Checkbox  name="email" />}
//             label="Email"
//           />
//           <FormControlLabel
//             control={<Checkbox  name="sms" />}
//             label="SMS"
//           />
         
//         </FormGroup>
//       </FormControl>
//        </Grid>
//     <Grid item xs={12} sm={12}>
//               <TextField
//                 id="urgent"
//                 label="Urgent"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 id="total"
//                 label="Total"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 id="notes"
//                 // label="Notes"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={2}>
//   <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}  >
//     {/* <InputLabel  sx={{
//     fontSize: '0.9rem',
//     color: 'rgba(0, 0, 0, 0.6)', 
//     marginTop: '-3px'
//   }}>Prefix</InputLabel> */}
//     <Select
//       name="prefix"
//       label="Prefix"
//       sx={{ width: '100%',height:'75%' }}
//         >
//        <MenuItem value=""><em>None</em></MenuItem>
//                     <MenuItem value="Mr">Mr</MenuItem>
//                     <MenuItem value="Mrs">Mrs</MenuItem>
//                     <MenuItem value="Ms">Ms</MenuItem>
//                     <MenuItem value="Miss">Miss</MenuItem>
//     </Select>
//   </FormControl>
// </Grid>
// <Grid item xs={12} sm={4}>
//               <TextField
//                 id="discount"
//                 label="Discount"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 id="discreason"
//                 label="Disc Reason"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 id="scharge"
//                 label="S. Charge"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={6}>
//                   <FormControlLabel
//                     control={<Checkbox name="printpreview" />}
//                     label="Print Preview"
//                   />
//                 </Grid>
//             {/* <Grid item xs={12} sm={6} container alignItems="center"> */}
//                 <Grid item xs={6}>
//                   <TextField
//                     id="paidamount"
//                     label="PaidAmount"
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     InputLabelProps={{ style: { fontSize: '14px' } }}
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <FormControlLabel
//                     control={<Checkbox name="billformat" />}
//                     label="Bill Format Two"
//                   />
//                 </Grid>
//               {/* </Grid> */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 id="balance"
//                 label="Balance"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//             <Typography
//                 variant="body1"
//                 gutterBottom
//                 sx={{
//                   fontWeight: 'bold',
//                   color: 'rgba(0, 0, 0, 0.7)',
//                   fontSize: '16px',
//                   marginTop: '8px',
//                   textAlign: 'left',
//                 }}> Entered By Sumesh</Typography>
//             </Grid>
//             <Grid item xs={12} sm={12}>
//               <TextField
//                 id="note"
//                 label="Note"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//           </Grid>
        

//           <Box mt={3} display="flex" justifyContent="space-between">
//             <Button variant="contained" color="primary">NEW</Button>
//             <Button variant="contained" color="secondary">PREV</Button>
//             <Button variant="contained" >NEXT</Button>
//             <Button variant="contained" color="secondary">PRINT</Button>
//             <Button variant="contained" color="primary">SAVE</Button>
//           </Box>
//       </Paper>
//     </Container>
//      <ToastContainer />
//     </div>
//     </>
//   );
// };

// export default  Registration;
import React, { useState } from 'react';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem, Container, Paper, Autocomplete, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CCard, CCardHeader } from '@coreui/react';
import axios from 'axios';

const Registration = () => {
  const [searchCriteria, setSearchCriteria] = useState('Patient ID');
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [patientDetails, setPatientDetails] = useState(null);

  const handleSearchCriteriaChange = (event) => {
    setSearchCriteria(event.target.value);
    setSearchValue('');
    setSuggestions([]);
  };

  const handleSearchValueChange = (event, value) => {
    setSearchValue(value);
    fetchSuggestions(value);
  };

  const fetchSuggestions = async (value) => {
    console.log('Fetching suggestions with value:', value);
    try {
      const response = await axios.post('http://172.16.16.10:8082/api/PatientMstr/PatientSearchMaster', {
        YearId: 2425,
        BranchId: 2,
        SrchItem: searchCriteria,
        SrchVal: value
      });

      console.log('Response from fetchSuggestions:', response);

      if (response.data && response.data.patientList) {
        setSuggestions(response.data.patientList);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      toast.error('Error fetching suggestions');
    }
  };

  const handleSelectPatient = (event, newValue) => {
    setPatientDetails(newValue);
    setSearchValue(''); // Clear search input field
    console.log('Selected patient:', newValue);
  };

  const renderOption = (props, option) => {
    const highlight = searchValue.toLowerCase();

    // Function to render highlighted text
    const renderHighlightedText = (text, isHighlighted) => {
      if (!isHighlighted) {
        return text;
      }

      const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
      return (
        <span>
          {parts.map((part, index) =>
            part.toLowerCase() === highlight ? (
              <span key={index} style={{ fontWeight: 'bold', backgroundColor: '#a6e88d' }}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </span>
      );
    };

    return (
      <li {...props}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <div>{renderHighlightedText(option.Patient_Name || '', searchCriteria === 'Name')}</div> {/* Render name with highlighting if searchCriteria is 'Name' */}
          <div>{renderHighlightedText(option.Patient_Email || '', searchCriteria === 'Email')}</div> {/* Render email with highlighting if searchCriteria is 'Email' */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{renderHighlightedText(option.Patient_Phno || '', searchCriteria === 'Phone')}</span> {/* Render phone with highlighting if searchCriteria is 'Phone' */}
            <span>{renderHighlightedText(option.Patient_Code || '', searchCriteria === 'Patient ID')}</span> {/* Render code with highlighting if searchCriteria is 'Patient ID' */}
          </div>
        </div>
      </li>
    );
  };

  const handleSubmit = async () => {
    if (!patientDetails) {
      toast.error('Please select a patient first');
      return;
    }

    try {
      const response = await axios.post('http://172.16.16.10:8082/api/PatientMstr/PatientDetailsMaster', {
        YearId: 2425,
        BranchId: 2,
        PatCode: patientDetails.Patient_Code
      });

      console.log('Response from fetchPatientDetails:', response);

      if (response.data && response.data.patientDetails) {
        setPatientDetails(response.data.patientDetails);
      } else {
        toast.error('Patient details not found');
      }
    } catch (error) {
      console.error('Error fetching patient details:', error);
      toast.error('Error fetching patient details');
    }
  };

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <strong style={{ fontSize: '2rem', color: '#523885', fontWeight: 'bold' }}>PATIENT REGISTRATION</strong>
        </CCardHeader>
        <div style={{ minHeight: '100vh', padding: '20px' }}>
          <Container component="main" maxWidth="md">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" sx={{ width: '100%' }}>
                  <InputLabel>Search By</InputLabel>
                  <Select value={searchCriteria} onChange={handleSearchCriteriaChange} label="Search By">
                    <MenuItem value="Patient ID">Patient ID</MenuItem>
                    <MenuItem value="Name">Name</MenuItem>
                    <MenuItem value="Email">Email</MenuItem>
                    <MenuItem value="Phone">Phone</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  freeSolo
                  options={suggestions}
                  getOptionLabel={(option) => `${option.Patient_Name || ''}, ${option.Patient_Email || ''}, ${option.Patient_Phno || ''}, ${option.Patient_Code || ''}`}
                  onInputChange={handleSearchValueChange}
                  onChange={handleSelectPatient}
                  renderOption={renderOption}
                  renderInput={(params) => (
                    <TextField {...params} label={searchCriteria} variant="outlined" size="small" fullWidth />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={() => fetchSuggestions(searchValue)}>
                  Search
                </Button>
                <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginLeft: '10px' }}>
                  Get Details
                </Button>
              </Grid>
            </Grid>
            {patientDetails && (
              <Paper elevation={3} style={{ padding: '16px', marginTop: '20px' }}>
                <Typography variant="h6">Patient Details</Typography>
                <Typography variant="body1">Patient ID: {patientDetails.Patient_Code}</Typography>
                <Typography variant="body1">Name: {patientDetails.Patient_Name}</Typography>
                <Typography variant="body1">Gender: {patientDetails.Patient_Ismale}</Typography>
                <Typography variant="body1">Email: {patientDetails.Patient_Email}</Typography>
                <Typography variant="body1">Email: {patientDetails.Patient_Title}</Typography>
                <Typography variant="body1">Phone: {patientDetails.Patient_Phno}</Typography>
                <Typography variant="body1">Address: {patientDetails.Patient_Address}</Typography>
                {/* Add other fields as needed */}
              </Paper>
            )}
          </Container>
          <ToastContainer />
        </div>
      </CCard>
    </>
  );
};

export default Registration;

