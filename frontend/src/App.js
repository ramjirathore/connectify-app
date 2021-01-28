import React from 'react';
import {Paper, makeStyles} from '@material-ui/core';
import './App.css';
import Sidebar from './sidebar/pages/sidebar.component';
import Chat from './chat/pages/chat.component';

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#090e11",
    height: "100vh"
  },
  paper: {
    display: "flex",
    height: "90vh",
    background: '#131c21',
    width: "90vw",
  }
}));




const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.main} >
      <Paper elevation={5} className={classes.paper}>
        <Sidebar />
        <Chat />
      </Paper>
    </div>
  );
} 

export default App;
