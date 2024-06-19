import React from 'react';
import './PendingCollection.css';
import { Grid, Paper, TextField, Typography } from '@mui/material';

const PendingCollections = () => {
    return (
        <div className="pending-collection">
            <div className="form-container">
                <h2>Pending Collection</h2>
                <Grid container spacing={2}>
          {/* Left side - Form */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
              <Grid container spacing={2}>
                {/* Error Message */}
                {/* {error && (
                  <Grid item xs={12}>
                    <Typography variant="body2" color="error">{error}</Typography>
                  </Grid>
                )} */}

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
                </Grid>
                </Paper>
                </Grid>
                </Grid>
                <div className="form">
                    <div className="form-row">
                         {/* <Grid item xs={12} sm={6}>
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
                    id="invamount"
                    label="Inv.Amount"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '14px' } }}
                  />
                </Grid> */}
                    </div>
                    <div className="form-row">
                        <label>Name</label>
                        <input type="text" />
                        <label>Age & Gender</label>
                        <input type="text" />
                        <label>Phone</label>
                        <input type="text" />
                    </div>
                    <div className="form-row">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className="form-row">
                        <label>Pay mode</label>
                        <select>
                            <option>Cash</option>
                            <option>Card</option>
                        </select>
                        <label>Card No</label>
                        <input type="text" />
                    </div>
                    <div className="form-row">
                        <label>Bank</label>
                        <input type="text" />
                        <label>Inv. Amount</label>
                        <input type="text" />
                        <label>Cur. Balance</label>
                        <input type="text" />
                    </div>
                    <div className="form-row">
                        <label>Coll. Amount</label>
                        <input type="text" />
                        <label>Coll. Date Time</label>
                        <input type="datetime-local" />
                    </div>
                    <div className="buttons">
                        <button>Print</button>
                        <button>Save</button>
                        <button>Exit</button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>SlNo</th>
                            <th>Lab</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Balance</th>
                            <th>Corporate</th>
                            <th>User</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td></tr>
                        <tr><td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td></tr>
                        
                        {/* Add table rows here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingCollections;
