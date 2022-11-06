import React from "react";
import {Paper,Grid,Typography,Button,Box, AppBar} from "@material-ui/core/";
import {Link} from 'react-router-dom';
import Header from "./Header";
// 

function LoginCards() {  
    return (
    <>
        <div style={{height:70,display:"flex",alignItems:"center"}}>
                 <div className='decen'>DECENROD</div>
                 <div className='header'> <Button variant="text" component={Link} to="/admin">Admin Login</Button></div>
                 <div className='header'><Button variant="text" component={Link} to="/hospital">Hospital Login</Button></div>
                 <div className='header'><Button variant="text" component={Link} to="/patient">Patient Login</Button></div>
                 <div className='header'><Button variant="text" component={Link} to="/signup">Patient Signup</Button></div>
                 <div className='header'><Button variant="text" component={Link} to="/">Health Insurer</Button></div>
            </div>
            
    {/* <Box m={1}>
        <Grid container spacing={1} justify="center" >
            <Grid item>
            <Paper>
                <Box p={1}>
                <div style={{height:70,display:"flex",alignItems:"center"}}>
                 <div className='header'>Admin</div>
                 <div className='header'>Hospital</div>
                 <div className='header'>Patient</div>
            </div>
                <AppBar>
                     <Button variant="contained" color="primary" component={Link} to="/admin">Admin Login</Button>
                     <Button variant="contained" color="primary" component={Link} to="/hospital">Hospital Login</Button>
                     <Button variant="contained" color="primary" component={Link} to="/patient">Patient Login</Button>
                     <Button variant="contained" color="primary" component={Link} to="/signup">Patient Sign Up</Button>

                </AppBar>
                <Typography variant="h5">
                    Admin Login
                </Typography>
               

                </Box>
            </Paper>
            <Grid container justify="space-evenly">
                <Grid item>
                    <Box mt={1}>
                        <Button variant="contained" color="primary" component={Link} to="/admin">Login</Button>
                    </Box>
                </Grid>
            </Grid>
            </Grid>

            <Grid item >
            <Paper>
                <Box p={1}>
                <Typography variant="h5">
                    Hospital Login
                </Typography>
               
                </Box>
            </Paper>
            <Grid container justify="space-evenly">
                <Grid item>
                    <Box mt={1}>
                        <Button variant="contained" color="primary" component={Link} to="/hospital">Login</Button>
                    </Box>
                </Grid>
            </Grid>
            </Grid>

            <Grid item >
            <Paper>
                <Box p={1}>
                <Typography variant="h5">
                    Patient Login
                </Typography>
             
                </Box>
            </Paper>
            <Grid container justify="center" spacing={2}>
                <Grid item>
                    <Box mt={1}>
                        <Button variant="contained" color="primary" component={Link} to="/signup">Sign Up</Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Box mt={1}>
                        <Button variant="contained" color="primary" component={Link} to="/patient">Login</Button>
                    </Box>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
    </Box> */}
    </>
    );}
export default LoginCards;