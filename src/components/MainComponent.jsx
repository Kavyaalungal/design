import React, { useState } from 'react';
import { Box, Typography, Button, Grid, TextField, Container, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MainComponent = () => {
  const [labNo, setLabNo] = useState('');
  const [branchId, setBranchId] = useState('');
  const [yearId, setYearId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [invoiceData, setInvoiceData] = useState(null);

 
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://172.16.16.10:8082/api/EditInvoice`, {
        params: {
          LabNo: labNo,
          YearId: yearId,
          BranchId: branchId,
        },
      });
      const fetchedInvoiceData = response.data.invoiceDtls;
      setInvoiceData(fetchedInvoiceData);

      if (fetchedInvoiceData) {
        navigate('/edit', { state: { invoiceData: fetchedInvoiceData  } });
       
      } else {
        history.push('/create');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    }
  };

  return (
    <div>
      <Box className="navbar">
        <Typography variant="h4" className="navbar-heading">Edit Invoice</Typography>
        {/* <Box className="navbar-buttons">
          <Button variant="contained" color="primary" className="navbar-button">NEW</Button>
          <Button variant="contained" color="secondary" className="navbar-button" onClick={fetchData}>SEARCH</Button>
          <Button variant="contained" color="default" className="navbar-button" >EXIT</Button>
        </Box> */}
      </Box>
      {/* <Box className="fieldset"> */}
      <Container component="main" maxWidth="md" >
      <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              id="labNo"
              label="Lab No"
              variant="outlined"
              size="small"
              fullWidth
              value={labNo}
              onChange={(e) => setLabNo(e.target.value)}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="branchId"
              label="Branch Id"
              variant="outlined"
              size="small"
              fullWidth
              value={branchId}
              onChange={(e) => setBranchId(e.target.value)}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="yearId"
              label="Year Id"
              variant="outlined"
              size="small"
              fullWidth
              value={yearId}
              onChange={(e) => setYearId(e.target.value)}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" onClick={fetchData}>
                Search
              </Button>
            </Grid>
          {/* No need for Search button here */}
        </Grid>
      {/* </Box> */}
      {error && <Typography variant="body2" color="error">{error}</Typography>}
      </Paper>
    </Container>
    </div>
    
  );
};

export default MainComponent;
