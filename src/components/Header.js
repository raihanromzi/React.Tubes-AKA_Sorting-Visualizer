import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  btn: {
  	marginRight: '2vw' 
  }
}));

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: "#5f5f5f"}}>
        <Toolbar>
        	<div className={classes.root}>
	        	<Button variant="contained" className={classes.btn} >
	            	<Link to="/">Single Sorting</Link>
	          	</Button>
	         	<Button variant="contained" className={classes.btn} >
	            	<Link to="/doubleContainer">Compare 2 Sorting Algorithm</Link>
	          	</Button>
         	</div>
         	<div className={classes.root}></div>
         	<div>
	         	<Button variant="contained" className={classes.btn} onClick={() => props.handleNewArray()}>
	            	Generate Array
	          	</Button>
	         	<Button variant="contained" className={classes.btn} 
              style={{marginRight: '0vw'}} onClick={()=>props.onStart()}>
	            	GO!
	         	</Button>
         	</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;