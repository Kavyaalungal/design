import React, { useState } from 'react';
import {
  TextField, Grid, FormControlLabel, Checkbox, Button,
  MenuItem, Select, InputLabel, Radio, RadioGroup, FormControl,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  AppBar, Toolbar, Typography, Box, Container, FormGroup
} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Patient = () => {
  const [selectedView, setSelectedView] = useState('Bill View');
  const patients = [
    { slNo: 1, labNo: 5749, name: "KRISHNA A S", age: 22, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "N Mohanan BSc MBBS MS", tests: ["COMPLETE HAEMOGRAM +", "HBsAg", "HIV-DUO (Ivth GENERATION T", "Anti HCV", "HAEMOGLOBIN (HB)"], specimen: "EDTA WHOLE ...", total: 1860, pendingAmt: 0 },
    { slNo: 2, labNo: 5748, name: "RABESHNA", age: 36, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "Vineetha S MBBS DGO FMAS", tests: ["HAEMOGLOBIN (HB)", "ANTI MULLARIAN HORMONE", "THYROID STIMULATING HORM..."], specimen: "SERUM", total: 1510, pendingAmt: 0 },
    { slNo: 3, labNo: 5747, name: "JAYAN N P", age: 57, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE"], specimen: "SERUM", total: 140, pendingAmt: 0 },
    { slNo: 4, labNo: 5746, name: "JOHN", age: 30, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE", "GLUCOSE PLASMA FASTING"], specimen: "PLASMA(fasti...", total: 1500, pendingAmt: 0 }
  ];

  const filterLabels = ['Result Issued', 'On Processing', 'Time Over', 'Cancelled Invoice', 'Half Verified', 'Time Over Reminder'];
  const handleViewChange = (event) => {
    setSelectedView(event.target.value); // Update selected radio button state
  };
  const checkboxColors = ['#0073e6', '#ff9900', '#4caf50', '#f44336', '#9c27b0', '#ffc107'];
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#0c97e6' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            PATIENT VIEWS
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box sx={{ p: 2 }}>
          <Paper elevation={3}>
            <Box p={2}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                <FormGroup row style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {filterLabels.map((label, index) => (
                      <FormControlLabel
                        key={label}
                        control={<Checkbox sx={{ color: checkboxColors[index % checkboxColors.length] }} size="small" />}
                        label={label}
                        style={{ marginRight: '10px' }}
                      />
                    ))}
                  </FormGroup>
                  <Grid container spacing={2} alignItems="center" style={{ marginTop: '10px' }}>
                    <Grid item xs={12} sm={4} md={3} lg={2}>
                    <FormControl component="fieldset">
                        <RadioGroup row value={selectedView} onChange={handleViewChange}>
                          {['Bill View', 'Result View', 'Track View'].map(label => (
                            <FormControlLabel
                              key={label}
                              value={label}
                              control={<Radio size="small" />}
                              label={label}
                              style={{ marginRight: '10px' }}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} lg={2}>
                      <FormControl variant="outlined" size="small" fullWidth>
                        <InputLabel>Sort By</InputLabel>
                        <Select label="Sort By" defaultValue="">
                          <MenuItem value="">None</MenuItem>
                          <MenuItem value="date">Date</MenuItem>
                          <MenuItem value="name">Name</MenuItem>
                          <MenuItem value="amount">Amount</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} lg={2}>
                      <FormControl variant="outlined" size="small" fullWidth>
                        <InputLabel>Status</InputLabel>
                        <Select label="Status" defaultValue="">
                          <MenuItem value="">All</MenuItem>
                          <MenuItem value="paid">Paid</MenuItem>
                          <MenuItem value="unpaid">Unpaid</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} lg={2}>
                      <FormControl variant="outlined" size="small" fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select label="Type" defaultValue="">
                          <MenuItem value="">Any</MenuItem>
                          <MenuItem value="urgent">Urgent</MenuItem>
                          <MenuItem value="normal">Normal</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={2}>
                      <TextField
                        id="start-date"
                        label="Start Date"
                        type="date"
                        variant="outlined"
                        size="small"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={2}>
                      <TextField
                        id="end-date"
                        label="End Date"
                        type="date"
                        variant="outlined"
                        size="small"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={2}>
                      <Button variant="contained" color="primary" fullWidth>Refresh</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="center" style={{ marginTop: '20px' }}>
                {['Area', 'Corporate', 'Phone No', 'Referral', 'Sample Id', 'Department', 'IPOP', 'Specimen', 'Email', 'Lab No', 'Name', 'Payment', 'Tests'].map(label => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={label}>
                    <TextField
                      id={label.toLowerCase().replace(' ', '-')}
                      label={label}
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '14px' } }}
                      style={{ marginBottom: '10px' }}
                    />
                  </Grid>
                ))}
              </Grid>
              <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                <Table>
                  <TableHead>
                    <TableRow style={{ backgroundColor: '#f0f0f0' }}> {/* Change background color here */}
                      {['Sl No', 'Lab No', 'Name', 'Date', 'Collected At', 'Reference', 'Tests', 'Specimen', 'Total', 'Pend Amt'].map(header => (
                        <TableCell key={header}>{header}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {patients.map((patient, index) => (
                      <TableRow key={index}>
                        <TableCell>{patient.slNo}</TableCell>
                        <TableCell>{patient.labNo}</TableCell>
                        <TableCell>{patient.name} ({patient.age} Years {patient.gender})</TableCell>
                        <TableCell>{patient.date}</TableCell>
                        <TableCell>{patient.collectedAt}</TableCell>
                        <TableCell>{patient.reference}</TableCell>
                        <TableCell>{patient.tests.join(', ')}</TableCell>
                        <TableCell>{patient.specimen}</TableCell>
                        <TableCell>{patient.total}</TableCell>
                        <TableCell>{patient.pendingAmt}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <ToastContainer />
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Patient;
