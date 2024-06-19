import React, { useState } from 'react';
import { Container,Grid,Paper,TextField,Typography,FormControl,InputLabel,Select,MenuItem,Button,TableContainer,
    Table,TableHead, TableBody, TableRow, TableCell,Box,
    FormGroup,
    FormControlLabel,Checkbox} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pending = () => {
  const [error, setError] = useState('');
  const [report, setReport] = useState({ urgentwork: false });
  // Sample data for the table
  const rows = [
    { id: 1, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7', col8: 'Data 8' },
    { id: 2, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7', col8: 'Data 8' },
    { id: 3, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7', col8: 'Data 8' },
    { id: 4, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7', col8: 'Data 8' }
  ];

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      <Container maxWidth="lg">
      <Grid container alignItems="center" style={{ marginBottom: '20px' }}>
  <Grid item xs={12} sm={3}>
  <Typography 
      variant="h6" 
      sx={{ 
        margin: 0, 
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: '#333' 
      }}
    >PENDING COLLECTION</Typography>
  </Grid>
  <Grid item xs={12} sm={9} md={6} lg={4} container>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
      <Button variant="contained" color="primary" className="navbar-button">
        PRINT
      </Button>
      <Button variant="contained" color="secondary" className="navbar-button">
        SAVE
      </Button>
      <Button variant="contained" color="default" className="navbar-button">
        EXIT
      </Button>
    </Box>
  </Grid>
</Grid>


        {/* Form and Table */}
        <Grid container spacing={2}>
          {/* Left side - Form */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
              <Grid container spacing={2}>
                {/* Error Message */}
                {error && (
                  <Grid item xs={12}>
                    <Typography variant="body2" color="error">{error}</Typography>
                  </Grid>
                )}

                {/* Form Fields */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="labno"
                    label="Lab No"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '14px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="dateTime"
                    label="Date/Time"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '14px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
  <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}  >
    <InputLabel  sx={{
    fontSize: '0.9rem',
    color: 'rgba(0, 0, 0, 0.6)', 
    marginTop: '-3px' 
  
  }}>Prefix</InputLabel>
    <Select
      name="prefix"
    //   value={prefix}
    //   onChange={(e) => setPrefix(e.target.value)}
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
                <Grid item xs={12} sm={9}>
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
                  <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.7)', fontSize: '16px', marginTop: '8px', textAlign: 'right' }}>
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
                </Grid>
                <Grid item xs={12} sm={3}>
  <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}  >
    <InputLabel  sx={{
    fontSize: '0.9rem',
    color: 'rgba(0, 0, 0, 0.6)', 
    marginTop: '-3px'
  }}>Prefix</InputLabel>
    <Select
      name="prefix"
    //   value={prefix}
    //   onChange={(e) => setPrefix(e.target.value)}
      label="Prefix"
      sx={{ width: '100%',height:'75%' }}
       
      // Adjust the width of the Select box
    >
       <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="M">Male</MenuItem>
                      <MenuItem value="F">Female</MenuItem>
                      <MenuItem value="O">Other</MenuItem>
    </Select>
  </FormControl>
</Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="phone1"
                    label="Phone1"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '14px' } }}
                  />
                </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                id='email'
                label='Email'
                variant='outlined'
                size='small'
                fullWidth
                InputLabelProps={{style: {fontSize: '14px'}}}
                />
              </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="paymode"
                    label="Pay Mode"
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
                  <TextField
                    id="bank"
                    label="Bank"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '14px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="invamount"
                    label="Inv.Amount"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '14px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="currbalance"
                    label="Curr.Balance"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '14px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="collamount"
                    label="Coll.Amount"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '14px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="colldatetime"
                    label="Coll.DateTime"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '14px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="notes"
                    label="Notes"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={2}
                    InputLabelProps={{ style: { fontSize: '14px' } }}
                  />
                </Grid>
            
              </Grid>
            </Paper>
          </Grid>

          {/* Right side - Table */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px', height: '100%' }}>
              {/* Date fields and buttons */}
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                    <TextField 
                    id='dateFrom'
                    label='From'
                    variant='outlined'
                    size='small'
                    fullWidth
                    InputLabelProps={{style:{ fontSize: '14px'}}}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="dateTo"
                    label="To"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '14px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button variant="contained" color="primary" size="small" style={{ marginRight: '8px' }}>
                    REFRESH
                  </Button>
                  <Button variant="contained" color="default" size="small">
                    PRINT
                  </Button>
                </Grid>
   
                <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormGroup row>
                 <FormControlLabel
                  label="coroperate"
                  labelPlacement='start'
                    control={<Checkbox checked={report.urgentwork}  name="coroperate" />}
                   
                  />
                </FormGroup>
              </FormControl>
            </Grid> 
                {/* Table */}
                <Grid item xs={12}>
                  <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>SlNo</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Lab</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Date</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Name</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Balance</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Corporate</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>User</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>View</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.id}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col1}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col2}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col3}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col4}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col5}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col6}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col7}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Pending;
