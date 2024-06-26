import React from 'react';
import { TextField, Grid, FormControlLabel, Checkbox, Button, MenuItem, Select, InputLabel, Radio, Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { CCard, CCardHeader, CCardBody } from '@coreui/react';

const Patient = () => {
    const patients = [
        { slNo: 1, labNo: 5749, name: "KRISHNA A S", age: 22, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "N Mohanan BSc MBBS MS", tests: ["COMPLETE HAEMOGRAM +", "HBsAg", "HIV-DUO (Ivth GENERATION T", "Anti HCV", "HAEMOGLOBIN (HB)"], specimen: "EDTA WHOLE ...", total: 1860, pendingAmt: 0 },
        { slNo: 2, labNo: 5748, name: "RABESHNA", age: 36, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "Vineetha S MBBS DGO FMAS", tests: ["HAEMOGLOBIN (HB)", "ANTI MULLARIAN HORMONE", "THYROID STIMULATING HORM..."], specimen: "SERUM", total: 1510, pendingAmt: 0 },
        { slNo: 3, labNo: 5747, name: "JAYAN N P", age: 57, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE"], specimen: "SERUM", total: 140, pendingAmt: 0 },
        { slNo: 4, labNo: 5746, name: "JOHN", age: 30, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE", "GLUCOSE PLASMA FASTING"], specimen: "PLASMA(fasti...", total: 1500, pendingAmt: 0 }
      ];
      
    
  return (
    <Container component="main" maxWidth="lg">
      <CCard className="mb-4">
        <CCardHeader>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={2}>
              <h3 style={{ fontSize: '25px', color: '#523885', fontWeight: 'bold', margin: '0' }}>Patient Views</h3>
            </Grid>
            <Grid item xs={12} sm={10}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Result Issued"
                  style={{ marginRight: '10px' }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="On Processing"
                  style={{ marginRight: '10px' }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Time Over"
                  style={{ marginRight: '10px' }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Cancelled Invoice"
                  style={{ marginRight: '10px' }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Half Verified"
                  style={{ marginRight: '10px' }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Time Over Reminder"
                />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center" style={{ marginTop: '5px' }}>
            <Grid item xs={12} sm={1}>
              <FormControlLabel
                control={<Radio />}
                label="Bill View"
              />
            </Grid>
            <Grid item xs={12} sm={1}>
              <FormControlLabel
                control={<Radio />}
                label="Result View"
              />
            </Grid>
            <Grid item xs={12} sm={1}>
              <FormControlLabel
                control={<Radio />}
                label="Track View"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel>Sort By</InputLabel>
              <Select
                label="Sort By"
                variant="outlined"
                size="small"
                defaultValue=""
                fullWidth
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="amount">Amount</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                variant="outlined"
                size="small"
                defaultValue=""
                fullWidth
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="paid">Paid</MenuItem>
                <MenuItem value="unpaid">Unpaid</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel>Type</InputLabel>
              <Select
                label="Type"
                variant="outlined"
                size="small"
                defaultValue=""
                fullWidth
              >
                <MenuItem value="">Any</MenuItem>
                <MenuItem value="urgent">Urgent</MenuItem>
                <MenuItem value="normal">Normal</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={1}>
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
            <Grid item xs={12} sm={1}>
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
            <Grid item xs={12} sm={1}>
              <Button variant="contained" color="primary" fullWidth>Refresh</Button>
            </Grid>
          </Grid>
        </CCardHeader>
        <CCardBody>
          <div style={{ minHeight: '100vh', padding: '20px' }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={2}>
                <TextField
                  id="area"
                  label="Area"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="corporate"
                  label="Corporate"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="phone"
                  label="Phone No"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="referral"
                  label="Referral"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={2}>
                <TextField
                  id="sampleid"
                  label="Sample Id"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="department"
                  label="Department"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="ipop"
                  label="IPOP"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="specimen"
                  label="Specimen"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={2}>
                <TextField
                  id="labno"
                  label="Lab No"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="payment"
                  label="Payment"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="tests"
                  label="Tests"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
            </Grid>
            <table className='table'>
               <thead>
                <tr>
                    <th>Sl No</th>
                    <th>Lab No</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Collected At</th>
                    <th>Reference</th>
                    <th>Tests</th>
                    <th>Specimen</th>
                    <th>Total</th>
                    <th>Pend Amt</th>
                </tr>
               </thead>
               <tbody>
                {patients.map((patient,index) => (
                        <tr key={index}>
                            <td>{patient.slNo}</td>
                            <td>{patient.labNo}</td>
                            <td>{patient.name} ({patient.age} Years {patient.gender})</td>
                            <td>{patient.date}</td>
                            <td>{patient.collectedAt}</td>
                            <td>{patient.reference}</td>
                     <td>{patient.tests.join(',')}</td>
                     <td>{patient.specimen}</td>
                            <td>{patient.total}</td>
                            <td>{patient.pendingAmt}</td>
                        </tr>
                ))}
               </tbody>
            </table>









             
            <ToastContainer />
          </div>
        </CCardBody>
      </CCard>
    </Container>
  );
};

export default Patient;
