import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Registration from './components/Registration'
import Invoice from './components/Invoice'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainComponent from './components/MainComponent'
import Registration1 from './components/Registration1'
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
        <Registration/>
      </ThemeProvider>
    </div>
    {/* <div className="app-container">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/edit" element={<Registration />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div> */}
    </>
  )
}

export default App
