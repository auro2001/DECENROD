import React, { Component } from 'react'
// import Header from "../components/Header";
import {Card,CardContent,CardMedia,Grid,Typography,Box} from "@material-ui/core/";
import LoginCards from "../components/LoginCards";
import front from '../../src/assets/front2.webp';
import "./home.css";

class Home extends Component {
    render(){
        return(
            <div >
            {/* <Header></Header> */}
            {/* <div style={{height:70,display:"flex",alignItems:"center"}}>
                 <div className='header' >Admin</div>
                 <div className='header'>Hospital</div>
                 <div className='header'>Patient</div>
            </div> */}
            <Box m={0.5}>
                {/* <Card >
                    <CardMedia image={front} style={{height:50,paddingBottom:'25%'}}></CardMedia>
                </Card> */}
            </Box>
            <Box p={-10}>
            <LoginCards/>
            </Box>
            </div>
        );
    }
}
export default Home;