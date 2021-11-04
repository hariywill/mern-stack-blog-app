import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@mui/material';
import Jumbo from '../static/jumbo.svg'

const Jumbotron = () => {
    const classes = useStyles()
    return (
        <Grid container >
            <Grid item xs={6} className={classes.text}>
                <Typography variant='h1' className={classes.title} >Share Your Stories to the World</Typography>
                <Typography variant='h4' className={classes.subtitle}>Join now! You can share today.</Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={Jumbo} className={classes.jumbo} alt='Jumbo' />
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles(theme => ({
    text: {},
    title: {
        display: 'center'
    },
    subtitle: {
        color: 'grey'
    },
    jumbo: {
        widows: '90%',
        height: '90%'
        //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }
}))



export default Jumbotron
