
import Invoice from './components/Invoice'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Editinvoice from './components/Editinvoice'
import Pending from './components/Pending'
import PendingCollections from './components/PendingCollections';
import PatientViews from './components/PatientViews';
import Patient from './components/Patient';
import Registration from './components/Registration';
// import Header from './components/Header';
// import MainComponent from './components/MainComponent'


const theme = createTheme({
  palette: {
    primary: {
      main: '#7fb3d5', // Custom primary color
    },
    secondary: {
      main: '#ff9800', // Custom secondary color
    },
    default: {
      main: '#7dcea0', // Custom default color
    },
  },
});
function App() {
  

  return (
    <>
  
    <div className="app-container">
      <ThemeProvider theme={theme}>
        <Router>
          {/* <Header/> */}
          <Routes>
            <Route path='/' element={<Registration/>}/>
            {/* <Route path='/' element={<Patient/>}/> */}
            {/* <Route path="/" element={<PatientViews />} /> */}
            <Route path="/edit" element={<Editinvoice />} />
            <Route path="/pending" element={<Pending />} />
            <Route path='/pending' element={<PendingCollections/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
    </>
  )
}

export default App
