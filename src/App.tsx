import React from 'react';
import MainRoute from './routes/MainRoute';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme/theme.config';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
