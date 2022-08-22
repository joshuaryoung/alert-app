import { ThemeProvider } from '@emotion/react';
import { AppBar, Button, createTheme, CssBaseline, Stack, Toolbar } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import React, { useState } from 'react';
import './App.css';
import AlertExample from './Components/Alerts/AlertExample';
import AlertManager, { useAlertReducer } from './Components/Alerts/AlertManager';

function App() {
  const { dispatch } = useAlertReducer()
  const [darkModeOn, setDarkModeOn] = useState(false)
  const theme = createTheme({
    palette: {
      mode: darkModeOn ? 'dark' : 'light'
    }
  })

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='static'>
          <Toolbar >
            <Stack spacing={2} direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
              <h3>Alerts Demo</h3>
              <Button onClick={() => setDarkModeOn(!darkModeOn)} sx={{ color: darkModeOn ? '' : 'white' }}>{darkModeOn ? 'Light' : 'Dark'} Mode</Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <div id="app-content-container">
          <SnackbarProvider
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={10000}
            maxSnack={100}
          >
            <AlertManager />
            <AlertExample dispatch={dispatch} />
          </SnackbarProvider>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
