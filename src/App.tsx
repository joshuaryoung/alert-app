import React, { useState } from 'react';
import './App.css';
import AlertExample from './Components/Alerts/AlertExample';
import AlertManager, { useAlertReducer } from './Components/Alerts/AlertManager';

function App() {
  const { alerts, dispatch } = useAlertReducer()
  const [open, setOpen] = useState([true])
  return (
    <div className="App">
      <AlertManager open={open} setOpen={setOpen} alerts={alerts} />
      <AlertExample dispatch={dispatch} open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
