import React from 'react';
import {Paper, makeStyles} from '@material-ui/core';
import './App.css';

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    height: "100vh"
  },
  paper: {
    height: "50rem",
    width: "100rem",
  }
}));



const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.main} >
      <Paper elevation={5} className={classes.paper}>
        <h1>Connectify app</h1>
      </Paper>
    </div>
  );
} 

export default App;
