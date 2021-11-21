import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Paper, Checkbox, TextField, Button, Link, FormControlLabel,  } from '@mui/material';

const Signup = () => {
    const classes = useStyles()
    
    const checkPassword = () => {}

    return (
        <div className={classes.background}>
            <div className={classes.content}>
                <Grid>
                    <Paper elevation={10} className={classes.paper}>
                        <Grid align='center'>
                            <h2>Sign up</h2>
                            <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                        </Grid>
                        <TextField label='Username' placeholder='Enter username' fullWidth required/>
                        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                        <TextField label='Confirm Password' placeholder="Confirm your password" fullWidth required/>
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Remember me"
                         />
                        <Button type='submit' color='primary' variant="contained" className={classes.btn} fullWidth>Sign in</Button>
                        <Typography className={classes.signup}> Already have an account?&nbsp;
                             <Link href='/login'>
                                Sign In
                            </Link>
                        </Typography>
                    </Paper>
                </Grid>
            </div>
            
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    background: {
        paddingLeft: '150px',
        paddingRight: '400px',
    },
    content: {
        //color: 'white',
        width: '120%',
        height: '100%',
        marginLeft: '30px',
        display: 'inline-block',

    },
    headline: {
        width: '80%',
        position: 'relative',
        left: '14%',
        //borderStyle: 'solid',
    },
    signup: {
        paddingTop: '10px'
    },
    paper: {
        padding:20,
        height:'70vh',
        width:280, 
        margin:"20px auto"
    },
    btn: {
        margin:'8px 0'
    },

}))

export default Signup