import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Registration from './components/Registration'
// import './App.css'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import MainComponent from './components/MainComponent'


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#4caf50', // Custom primary color
//     },
//     secondary: {
//       main: '#ff9800', // Custom secondary color
//     },
//     default: {
//       main: '#9e9e9e', // Custom default color
//     },
//   },
// });
function App() {
  

  return (
    <>
    {/* <div className="app-container">
      <h1>My App</h1>
      <ThemeProvider theme={theme}>
      <MainComponent />
      </ThemeProvider>
    </div> */}
     <div className="App">
      <Registration />
    </div>
     
    </>
  )
}

export default App
