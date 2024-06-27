import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, FormControlLabel, FormGroup, Checkbox, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration= () => {
 return (
    <>
     <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px',  }}>
<Container component="main" maxWidth="md" >
      <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField
                id="labno"
                label="Lab No"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
                 style={{ marginTop: '10px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
      id="invDateTime"
      label="Date"
      variant="outlined"
      size="small"
      fullWidth
      type="datetime-local"
      InputLabelProps={{ shrink: true }}
      style={{ marginTop: '10px' }}
    />
     </Grid>
     <Grid item xs={12} sm={4}>
                <TextField
                  id="patientid"
                  label="Patient ID"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="memberid"
                  label="Member Id"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
              <Button variant="contained" color="primary"
              style={{
                // backgroundColor: '#3f51b5', // Blue background
                color: 'white', // White text
                fontWeight: 'bold', // Bold text
                padding: '10px 10px', // Padding
                borderRadius: '4px', // Rounded corners
                cursor: 'pointer',
                marginBottom:'10px' // Pointer cursor on hover
              }}>
                Search
              </Button>
              </Grid>
            <Grid item xs={12} sm={2}>
  <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}  >
    <InputLabel  sx={{
    fontSize: '0.9rem',
    color: 'rgba(0, 0, 0, 0.6)', 
    marginTop: '-3px'
  }}>Prefix</InputLabel>
    <Select
      name="prefix"
      label="Prefix"
      sx={{ width: '100%',height:'75%' }}
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
                  textAlign: 'left',
                }}> Age</Typography>
            </Grid>
              <Grid item container xs={12} sm={7} spacing={1}>
              <Grid item xs={3}>
              <TextField
                id="dd"
                label="Day"
                variant="outlined"
                size="small"
                fullWidth
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
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid> 
            <Grid item xs={12} sm={3}>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel id="genderLabel">Gender</InputLabel>
                    <Select
                      labelId="genderLabel"
                      id="gender"
                      label="Gender" >
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
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
              <TextField
                id="phone2"
                label="Phone2"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
          
           
            <Grid item xs={12} sm={12}>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
          <TextField
             id="refBy"
            label="Ref By"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '14px' } }}
          />
        </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                id="outdr"
                label="Out Dr"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="branch"
                label="Branch"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="ipopno"
                label="IP/OP"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
      <TextField
        id="collmode"
        label="Coll. Mode"
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{ style: { fontSize: '14px' } }}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
            <TextField
          id="area"
          label="Area"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '14px' } }}
        />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="paymode"
                label="Pay mode"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="collperson"
                label="Coll.Person"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
      <TextField
        id="corporate"
        label="Corporate"
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{ style: { fontSize: '14px' } }}
      />
</Grid>
<Grid item xs={12} sm={6}>
            <TextField
              id="cardno"
              label="Card No"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
      </Grid>
      <Grid item xs={12} sm={12}>
      <Box mt={3}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Field 1</TableCell>
                    <TableCell>Field 2</TableCell>
                    <TableCell>Field 3</TableCell>
                    <TableCell>Field 4</TableCell>
                    <TableCell>Field 5</TableCell>
                    <TableCell>Field 5</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Add rows dynamically if needed */}
                  <TableRow>
                    <TableCell><TextField variant="outlined" size="small" /></TableCell>
                    <TableCell><TextField variant="outlined" size="small" /></TableCell>
                    <TableCell><TextField variant="outlined" size="small" /></TableCell>
                    <TableCell><TextField variant="outlined" size="small" /></TableCell>
                    <TableCell><TextField variant="outlined" size="small" /></TableCell>
                    <TableCell><TextField variant="outlined" size="small" /></TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          </Grid>
      <Grid item xs={12} sm={6}>
  <TextField
    id="sampleOn"
    label="Sample On"
    type="datetime-local"
    variant="outlined"
    size="small"
    fullWidth
    InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
  />
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    id="reportTime"
    label="Report Time"
    type="datetime-local"
    variant="outlined"
    size="small"
    fullWidth
    InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
  />
</Grid>
        <Grid item xs={12}>
      <FormControl component="fieldset">
        <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
        <FormGroup row>
          <FormControlLabel
             control={<Checkbox  name="personally" />}
            label="Personally"
          />
           <FormControlLabel
             control={<Checkbox  name="courier" />}
            label="Courier"
          />
          <FormControlLabel
             control={<Checkbox   name="phone" />}
            label="phone"
          />
         
          <FormControlLabel
             control={<Checkbox  name="email" />}
            label="Email"
          />
          <FormControlLabel
            control={<Checkbox  name="sms" />}
            label="SMS"
          />
         
        </FormGroup>
      </FormControl>
       </Grid>
    <Grid item xs={12} sm={12}>
              <TextField
                id="urgent"
                label="Urgent"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="total"
                label="Total"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="notes"
                // label="Notes"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
  <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}  >
    {/* <InputLabel  sx={{
    fontSize: '0.9rem',
    color: 'rgba(0, 0, 0, 0.6)', 
    marginTop: '-3px'
  }}>Prefix</InputLabel> */}
    <Select
      name="prefix"
      label="Prefix"
      sx={{ width: '100%',height:'75%' }}
        >
       <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Mr">Mr</MenuItem>
                    <MenuItem value="Mrs">Mrs</MenuItem>
                    <MenuItem value="Ms">Ms</MenuItem>
                    <MenuItem value="Miss">Miss</MenuItem>
    </Select>
  </FormControl>
</Grid>
<Grid item xs={12} sm={4}>
              <TextField
                id="discount"
                label="Discount"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="discreason"
                label="Disc Reason"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="scharge"
                label="S. Charge"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="paidamount"
                label="PaidAmount"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
             
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="balance"
                label="Balance"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
             
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="note"
                label="Note"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
          </Grid>
        

          <Box mt={3} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary">NEW</Button>
            <Button variant="contained" color="secondary">PREV</Button>
            <Button variant="contained" >NEXT</Button>
            <Button variant="contained" color="secondary">PRINT</Button>
            <Button variant="contained" color="primary">SAVE</Button>
          </Box>
      </Paper>
    </Container>
     <ToastContainer />
    </div>
    </>
  );
};

export default  Registration;
