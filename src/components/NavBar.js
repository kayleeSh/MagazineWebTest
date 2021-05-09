import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import {Button, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Popup from './Popup';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';



const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },

    logo: {
        width: "100%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }




})

function NavBar() {

    const classes = styles()

    const [buttonPopup, setButtonPopup] = useState(false);




    return (
        
        <Toolbar position="sticky" color="rgba(0,0,0,0.87)" className={classes.bar}>
         
          <MenuBookIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>
            <Typography variant="h6" className={classes.menuItem}>About</Typography>
            <Typography variant="h6" className={classes.menuItem}>Reading Community</Typography>
            <Typography variant="h6" className={classes.menuItem}>Careers</Typography>
            <Typography variant="h6" className={classes.menuItem}>Event</Typography>
            <Typography variant="h6" className={classes.menuItem}>Loyalty Privileges</Typography>
            <Typography variant="h6" className={classes.menuItem}>Contact Us</Typography>
            
            <Button  variant="contained"  color="primary" onClick={()=> setButtonPopup(true)} >LOGIN</Button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> 
                <div style={{height:80}}>
                <h3>LOGIN</h3>
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                    <div style={{height:80}}>
                    <TextField id="outlined-basic" label="UserName" variant="outlined" />
                    </div>
                    
                    <div style={{height:80}}>
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                    </div>

                    <Button variant="contained"  color="primary">LOGIN</Button>
                
                </form>
               
            </Popup>

        </Toolbar>
    )
}

export default NavBar
