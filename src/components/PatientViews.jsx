// import React from 'react';
// import './PatientViews.css';

// const patients = [
//   { slNo: 1, labNo: 5749, name: "KRISHNA A S", age: 22, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "N Mohanan BSc MBBS MS", tests: ["COMPLETE HAEMOGRAM +", "HBsAg", "HIV-DUO (Ivth GENERATION T", "Anti HCV", "HAEMOGLOBIN (HB)"], specimen: "EDTA WHOLE ...", total: 1860, pendingAmt: 0 },
//   { slNo: 2, labNo: 5748, name: "RABESHNA", age: 36, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "Vineetha S MBBS DGO FMAS", tests: ["HAEMOGLOBIN (HB)", "ANTI MULLARIAN HORMONE", "THYROID STIMULATING HORM..."], specimen: "SERUM", total: 1510, pendingAmt: 0 },
//   { slNo: 3, labNo: 5747, name: "JAYAN N P", age: 57, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE"], specimen: "SERUM", total: 140, pendingAmt: 0 },
//   { slNo: 4, labNo: 5746, name: "JOHN", age: 30, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE", "GLUCOSE PLASMA FASTING"], specimen: "PLASMA(fasti...", total: 1500, pendingAmt: 0 }
// ];

// const PatientViews = () => {
//   return (
//     <div className="container">
//       <header>
//         <h1>JEEVA SPECIALTY LABORATORY</h1>
//         <p>User: SUMESH | Work Station: DESKTOP-NAJROUS | Fin. Year: 2425 | 26, Wednesday, June, 2024</p>
//       </header>
//       <div className="card">
//         <div className="card-header">
//           Patient Views
//         </div>
//         <div className="card-body">
//           <div className="form-row">
//             <div className="form-group">
//               <label>Area</label>
//               <input type="text" />
//             </div>
//             <div className="form-group">
//               <label>Corporate</label>
//               <input type="text" />
//             </div>
//             <div className="form-group">
//               <label>Sample ID</label>
//               <input type="text" />
//             </div>
//             <div className="form-group">
//               <label>Department</label>
//               <input type="text" />
//             </div>
//             <div className="form-group">
//               <label>Lab No</label>
//               <input type="text" />
//             </div>
//             <div className="form-group">
//               <label>Name</label>
//               <input type="text" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Phone No</label>
//               <input type="text" />
//             </div>
//             <div className="form-group">
//               <label>Referral</label>
//               <input type="text" />
//             </div>
//             <div className="form-group">
//               <label>IPOP</label>
//               <input type="text" />
//             </div>
//             <div className="form-group">
//               <label>Specimen</label>
//               <input type="text" />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" />
//             </div>
//             <div className="form-group">
//               <label>Payment</label>
//               <select>
//                 <option value="0">Select</option>
//                 <option value="1">Paid</option>
//                 <option value="2">Pending</option>
//               </select>
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Tests</label>
//               <input type="text" />
//             </div>
//             <div className="form-group">
//               <label>From</label>
//               <input type="date" />
//             </div>
//             <div className="form-group">
//               <label>To</label>
//               <input type="date" />
//             </div>
//             <div className="form-group">
//               <label>Status</label>
//               <select>
//                 <option value="0">All</option>
//                 <option value="1">Result Issued</option>
//                 <option value="2">On Processing</option>
//                 <option value="3">Cancelled Invoice</option>
//                 <option value="4">Half Verified</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <button className="btn-primary">Refresh</button>
//             </div>
//           </div>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Sl No</th>
//                 <th>Lab No</th>
//                 <th>Name</th>
//                 <th>Date</th>
//                 <th>Collected At</th>
//                 <th>Reference</th>
//                 <th>Tests</th>
//                 <th>Specimen</th>
//                 <th>Total</th>
//                 <th>Pending Amt</th>
//               </tr>
//             </thead>
//             <tbody>
//               {patients.map((patient, index) => (
//                 <tr key={index}>
//                   <td>{patient.slNo}</td>
//                   <td>{patient.labNo}</td>
//                   <td>{patient.name} ({patient.age} Years {patient.gender})</td>
//                   <td>{patient.date}</td>
//                   <td>{patient.collectedAt}</td>
//                   <td>{patient.reference}</td>
//                   <td>{patient.tests.join(', ')}</td>
//                   <td>{patient.specimen}</td>
//                   <td>{patient.total}</td>
//                   <td>{patient.pendingAmt}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientViews;
import React from 'react';
import './PatientViews.css';
import { Grid, TextField } from '@mui/material';

const patients = [
  { slNo: 1, labNo: 5749, name: "KRISHNA A S", age: 22, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "N Mohanan BSc MBBS MS", tests: ["COMPLETE HAEMOGRAM +", "HBsAg", "HIV-DUO (Ivth GENERATION T", "Anti HCV", "HAEMOGLOBIN (HB)"], specimen: "EDTA WHOLE ...", total: 1860, pendingAmt: 0 },
  { slNo: 2, labNo: 5748, name: "RABESHNA", age: 36, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "Vineetha S MBBS DGO FMAS", tests: ["HAEMOGLOBIN (HB)", "ANTI MULLARIAN HORMONE", "THYROID STIMULATING HORM..."], specimen: "SERUM", total: 1510, pendingAmt: 0 },
  { slNo: 3, labNo: 5747, name: "JAYAN N P", age: 57, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE"], specimen: "SERUM", total: 140, pendingAmt: 0 },
  { slNo: 4, labNo: 5746, name: "JOHN", age: 30, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE", "GLUCOSE PLASMA FASTING"], specimen: "PLASMA(fasti...", total: 1500, pendingAmt: 0 }
];

const PatientViews = () => {
  return (
    <div className="container">
      {/* <header>
        <h1>JEEVA SPECIALTY LABORATORY</h1>
        <p>User: SUMESH | Work Station: DESKTOP-NAJROUS | Fin. Year: 2425 | 26, Wednesday, June, 2024</p>
      </header> */}
      <div className="card">
        <div className="card-header">
          <div className="header-row">
            <div>
              Patient Views
              <div className="radio-buttons">
                <label>
                  <input type="radio" name="view" value="bill" /> Bill View
                </label>
                <label>
                  <input type="radio" name="view" value="result" /> Result View
                </label>
                <label>
                  <input type="radio" name="view" value="track" /> Track View
                </label>
              </div>
              <div className="checkboxes">
                <label>
                  <input type="checkbox" /> Result Issued
                </label>
                <label>
                  <input type="checkbox" /> On Processing
                </label>
                <label>
                  <input type="checkbox" /> Time Over
                </label>
                <label>
                  <input type="checkbox" /> Cancelled Invoice
                </label>
                <label>
                  <input type="checkbox" /> Half Verified
                </label>
                <label>
                  <input type="checkbox" /> Time Over Reminder
                </label>
              </div>
            </div>
            <div className="form-group">
              <select>
                <option value="JEEVA SPECIALTY LABORATORY">JEEVA SPECIALTY LABORATORY</option>
                {/* Add more options here if needed */}
              </select>
            </div>
            <div className="form-group">
              <select>
                <option value="--All-->">--All--</option>
                {/* Add more options here if needed */}
              </select>
            </div>
            <div className="form-group">
              <label>From</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>To</label>
              <input type="date" />
            </div>
            <button className="btn-primary">Refresh</button>
          </div>
        </div>
        <div className="card-body">
          <div className="form-row">
            {/* <div className="form-group">
              <label>Area</label>
              <input type="text" />
            </div> */}
            {/* <div className="form-group">
              <label>Corporate</label>
              <input type="text" />
            </div> */}
            {/* <div className="form-group">
              <label>Sample ID</label>
              <input type="text" />
            </div> */}
            {/* <div className="form-group">
              <label>Department</label>
              <input type="text" />
            </div> */}
            {/* <div className="form-group">
              <label>Lab No</label>
              <input type="text" />
            </div> */}
            {/* <div className="form-group"> */}
            <Grid container spacing={2}>
          
          <Grid item xs={12} sm={2}>
                <TextField
                  id="area"
                  label="Area"
                  variant="outlined"
                  size="small"
                  fullWidth
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="corperate"
                  label="Corperate"
                  variant="outlined"
                  size="small"
                  fullWidth
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="phoneno"
                  label="Phone No"
                  variant="outlined"
                  size="small"
                  fullWidth
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              {/* <Grid item xs={12} sm={2}>
                <TextField
                  id="labno"
                  label="Lab No"
                  variant="outlined"
                  size="small"
                  fullWidth
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="referral"
                  label="Referral"
                  variant="outlined"
                  size="small"
                  fullWidth
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              </Grid>
              <Grid container spacing={2}>
          
          <Grid item xs={12} sm={2}>
                <TextField
                  id="sampleid"
                  label="Sample Id"
                  variant="outlined"
                  size="small"
                  fullWidth
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
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
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
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
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
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
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
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
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              </Grid>
              <Grid container spacing={2}>
          
          <Grid item xs={12} sm={2}>
                <TextField
                  id="labno"
                  label="Lab No"
                  variant="outlined"
                  size="small"
                  fullWidth
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
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
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
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
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
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
                //   value={labNo}
                //   onChange={(e) => setLabNo(e.target.value)}
                  InputLabelProps={{ style: { fontSize: '14px' } }}
                  style={{ marginBottom: '10px' }}
                />
              </Grid>
              </Grid>
            {/* </div> */}
          </div>
          {/* <div className="form-row">
            <div className="form-group">
              <label>Phone No</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Referral</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>IPOP</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Specimen</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Payment</label>
              <select>
                <option value="0">Select</option>
                <option value="1">Paid</option>
                <option value="2">Pending</option>
              </select>
            </div>
          </div> */}
          {/* <div className="form-row">
            <div className="form-group">
              <label>Tests</label>
              <input type="text" />
            </div> */}
            {/* <div className="form-group">
              <label>From</label>
              <input type="date" />
            </div> */}
            {/* <div className="form-group">
              <label>To</label>
              <input type="date" />
            </div> */}
            {/* <div className="form-group">
              <label>Status</label>
              <select>
                <option value="0">All</option>
                <option value="1">Result Issued</option>
                <option value="2">On Processing</option>
                <option value="3">Cancelled Invoice</option>
                <option value="4">Half Verified</option>
              </select>
            </div>
            <div className="form-group">
              <button className="btn-primary">Refresh</button>
            </div> */}
          {/* </div> */}
          {/* <table className="table">
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
                <th>Pending Amt</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td>{patient.slNo}</td>
                  <td>{patient.labNo}</td>
                  <td>{patient.name} ({patient.age} Years {patient.gender})</td>
                  <td>{patient.date}</td>
                  <td>{patient.collectedAt}</td>
                  <td>{patient.reference}</td>
                  <td>{patient.tests.join(', ')}</td>
                  <td>{patient.specimen}</td>
                  <td>{patient.total}</td>
                  <td>{patient.pendingAmt}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default PatientViews;
