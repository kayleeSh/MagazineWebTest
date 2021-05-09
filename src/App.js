import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import logo from './logo.svg';
import cover01 from './cover01.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';
import WorkIcon from '@material-ui/icons/Work';
import EventIcon from '@material-ui/icons/Event';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import './App.css';

import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';


const theme = createMuiTheme(
  {
    palette:{
      main:"#2e1667",
    },
    secondary:{
      main:"#c7d8ed",
    },
    typography:{
      fontFamily:[
        'Roboto'
      ],
      h4:{
        fontWeight:600,
        fontSize:28,
        lineHeight:'2rem',
      },
      h5:{
        fontWeight:100,
        lineHeight:'2rem',
      },

      
    }
  }
)


const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },

})





function App() {

  

  const classes = styles(); 

  return(
    <div className="App">
      <ThemeProvider theme={theme}>
          <NavBar/>
          <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Magazine Republic
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Welcome to Magazine Repulic! Enjoying unlimited digital readling by subscribing as an loyalty member!
          </Typography>
        </div>


        <div className={`${classes.grid} ${classes.bigSpace}`}> 
        <Container>
          <Row>
            <Col><img src="cover01.png" alt="cover01" width="60%" /></Col>
            <Col><img src="cover01.png" alt="cover01" width="60%" /></Col>
            <Col><img src="cover01.png" alt="cover01" width="60%" /></Col>
          </Row>
          <Row>
            <Col>
            <Button variant="outlined" color="primary">Subscribe</Button>
            <Button variant="outlined" color="secondary">Preview</Button>
            <Button variant="outlined">Add to Cart</Button>
            </Col>
            <Col>
            <Button variant="outlined" color="primary">Subscribe</Button>
            <Button variant="outlined" color="secondary">Preview</Button>
            <Button variant="outlined">Add to Cart</Button>
            </Col>
            <Col>
            <Button variant="outlined" color="primary">Subscribe</Button>
            <Button variant="outlined" color="secondary">Preview</Button>
            <Button variant="outlined">Add to Cart</Button>
            </Col>
          </Row>
        </Container>
        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}> 
        <Container>
          <Row>
            <Col><img src="cover01.png" alt="cover01" width="60%" /></Col>
            <Col><img src="cover01.png" alt="cover01" width="60%" /></Col>
            <Col><img src="cover01.png" alt="cover01" width="60%" /></Col>
          </Row>
          <Row>
            <Col>
            <Button variant="outlined" color="primary">Subscribe</Button>
            <Button variant="outlined" color="secondary">Preview</Button>
            <Button variant="outlined">Add to Cart</Button>
            </Col>
            <Col>
            <Button variant="outlined" color="primary">Subscribe</Button>
            <Button variant="outlined" color="secondary">Preview</Button>
            <Button variant="outlined">Add to Cart</Button>
            </Col>
            <Col>
            <Button variant="outlined" color="primary">Subscribe</Button>
            <Button variant="outlined" color="secondary">Preview</Button>
            <Button variant="outlined">Add to Cart</Button>
            </Col>
          </Row>
        </Container>
        </div>

       
        <div className={`${classes.grid} ${classes.bigSpace}`}>
         
          <Grid icon={<InfoIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="About Us" btnTitle="Show me More" />
          <Grid icon={<BookIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reading Community" btnTitle="Show me More"/>
          <Grid icon={<WorkIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Career" btnTitle="Show me More"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<EventIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Event" btnTitle="Show me More"/>
          <Grid icon={<LoyaltyIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Loyalty Privileges" btnTitle="Show me More"/>
          <Grid icon={<ContactPhoneIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Contact Us" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>

    </div>
  )



 


  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
