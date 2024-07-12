import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, Autocomplete, FormControlLabel, FormGroup, Checkbox, Container, Paper } from '@mui/material';


function Component() {
  const [refBy, setRefBy] = useState('');
  const [outDr, setOutDr] = useState('');
  const [errorRefBy, setErrorRefBy] = useState(null);
  const [searchResultsRefBy, setSearchResultsRefBy] = useState([]);
  const [searchResultsCollBy, setSearchResultsCollBy] = useState([]);
  const [searchResultsBranch, setSearchResultsBranch] = useState([]);
  const [searchResultsCollMode, setSearchResultsCollMode] = useState([]);

// Error states for each search field

  const [errorCollBy, setErrorCollBy] = useState(null);
  const [errorBranch, setErrorBranch] = useState(null);
  const[errorCollMode, setErrorCollMode] = useState(null);

// Selected key states for each search field
  const [selectedRefByKey, setSelectedRefByKey] = useState('');
  const [selectedCollByKey, setSelectedCollByKey] = useState('');
  const [selectedBranchKey, setSelectedBranchKey] = useState('');
  const[selectedCollModeKey,setSelectedCollModeKey] = useState('')

  // Handler for changing Ref By
  const handleRefByChange = (event, newValue) => {
    if (newValue) {
      const selectedRefBy = searchResultsRefBy.find(result => result.AhMst_pName === newValue);
      if (selectedRefBy) {
        setSelectedRefByKey(selectedRefBy.AhMst_Key);
        setRefBy(newValue);
        setInvData(prevState => ({
          ...prevState,
          Inv_DrId: selectedRefBy.AhMst_Key,
        }));
        setOutDr('');
      }
    } else {
      setSelectedRefByKey('');
      setRefBy('');
      setInvData(prevState => ({
        ...prevState,
        Inv_DrId: 0,
      }));
    }
  };

  // Handler for changing Out Dr
  const handleOutDrChange = (event) => {
    setOutDr(event.target.value);
    setRefBy(''); // Clear Ref By when Out Dr changes
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Autocomplete
          freeSolo
          options={searchResultsRefBy.map((result) => result ? result.AhMst_pName : '')}
          value={refBy}
          onInputChange={(event, newValue) => handleRefByChange(event, newValue)}
          onChange={(event, newValue) => handleRefByChange(event, newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              id="refBy"
              label="Ref By"
              variant="outlined"
              size="small"
              fullWidth
              error={!!errorRefBy}
              helperText={errorRefBy}
              InputLabelProps={{ style: { fontSize: '16px' } }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="outDr"
          label="Out Dr"
          variant="outlined"
          size="small"
          fullWidth
          value={outDr}
          onChange={handleOutDrChange}
          disabled={!!refBy} // Disable if Ref By has a value
          InputLabelProps={{ style: { fontSize: '16px' } }}
        />
      </Grid>
    </Grid>
  );
}

export default Component;
