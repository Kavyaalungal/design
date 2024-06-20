import React, { useEffect, useState } from 'react';
import { Container,Grid,Paper,TextField,Typography,FormControl,InputLabel,Select,MenuItem,Button,TableContainer,
Table,TableHead, TableBody, TableRow, TableCell,Box,FormGroup,FormControlLabel,Checkbox} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pending = () => {
  const [error, setError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [prefix,setPrefix] = useState('');
  const [gender,setGender] = useState('');


  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    const prefixToGender = { Mr: 'M',Mrs: 'F',Ms: 'F', Miss: 'F',};

    setGender(prefixToGender[prefix] || '');
  }, [prefix]);
  // Sample data for the table
  const rows = [
    { id: 1, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7', col8: 'Data 8' },
    { id: 2, col1: 'Data 9', col2: 'Data 10', col3: 'Data 11', col4: 'Data 12', col5: 'Data 13', col6: 'Data 14', col7: 'Data 15', col8: 'Data 16' },
    { id: 3, col1: 'Data 17', col2: 'Data 18', col3: 'Data 19', col4: 'Data 20', col5: 'Data 21', col6: 'Data 22', col7: 'Data 23', col8: 'Data 24' },
    { id: 4, col1: 'Data 25', col2: 'Data 26', col3: 'Data 27', col4: 'Data 28', col5: 'Data 29', col6: 'Data 30', col7: 'Data 31', col8: 'Data 32' }
  ];

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      <Container maxWidth="lg">
      <Grid container alignItems="center" spacing={2} style={{ marginBottom: '20px' }}>
       <Grid item xs={12} sm={6}>
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
     <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
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
                    InputLabelProps={{ style: { fontSize: '18px' } }}

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="dateTime"
                    label="Date/Time"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}  >
                    <InputLabel  sx={{
                     fontSize: '1.2rem',
                     color: 'rgba(0, 0, 0, 0.6)', 
                     marginTop: '-6px' 
  
                       }}>Prefix</InputLabel>
                   <Select
                   name="prefix"
                    value={prefix}
                 onChange={(e) => setPrefix(e.target.value)}
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
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={1}>
                  <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.7)', fontSize: '16px', marginTop: '8px', textAlign: 'left' }}>
                    Age
                  </Typography>
                </Grid>
                {/* <Grid item container xs={12} sm={7} spacing={1}> */}
                  <Grid item xs={2}>
                    <TextField
                      id="dd"
                      label="Day"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '18px' } }}
               
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      id="mm"
                      label="Month"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '18px' } }}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      id="yyyy"
                      label="Year"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '18px' } }}
                    />
                  </Grid>
                {/* </Grid> */}
                <Grid item xs={12} sm={3}>
                <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}  >
                <InputLabel  sx={{fontSize: '1.2rem',color: 'rgba(0, 0, 0, 0.6)',  marginTop: '-6px' }}>Prefix</InputLabel>
                <Select
                name="prefix"
               value={gender}
              onChange={(e) => setGender(e.target.value)}
                label="Prefix"
                sx={{ width: '100%',height:'75%' }}
       
            
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
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                  />
                </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                id='email'
                label='Email'
                variant='outlined'
                size='small'
                fullWidth
                InputLabelProps={{style: {fontSize: '18px'}}}
                />
              </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="paymode"
                    label="Pay Mode"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="cardno"
                    label="Card No"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="bank"
                    label="Bank"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="invamount"
                    label="Inv.Amount"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="curbalance"
                    label="Cur.Balance"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="colamount"
                    label="Col.Amount"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="coldatetime"
                    label="Col.DateTime"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '18px' } }}
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
                    InputLabelProps={{ style: { fontSize: '18px' } }}
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
                    InputLabelProps={{style:{ fontSize: '18px'}}}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="dateTo"
                    label="To"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '18px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container alignItems="center" justifyContent="flex-start" spacing={1}>
                <Grid item>
                  <Button variant="contained" color="primary" size="small" style={{ marginRight: '8px' }}>
                    REFRESH
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="default" size="small">
                    PRINT
                  </Button>
                </Grid>
              </Grid>

   
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl component="fieldset" fullWidth>
                    <FormGroup row>
                      <FormControlLabel
                        label="Corporate"
                        labelPlacement='start'
                        control={
                          <Checkbox
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            name="corporate"
                          />
                        }
                      />
                      {isChecked && (
                        <Grid item>
                          <TextField
                            label="Input"
                            variant="outlined"
                            size='small'
                            InputLabelProps={{ style: { fontSize: '18px' } }}
                            style={{ marginTop: '8px',marginLeft:'6px' }} // Adjust this value to move the input further down or up
                          />
                        </Grid>
                      )}
                    </FormGroup>
                  </FormControl>
                </Grid>
              </Grid>
                {/* Table */}
                <Grid item xs={12}>
                  <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY:'auto' }}>
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
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Pending;
