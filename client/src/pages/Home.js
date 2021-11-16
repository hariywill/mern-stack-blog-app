import React, { useState, useEffect } from 'react'
import Jumbotron from '../components/Jumbotron'
import { makeStyles } from '@mui/styles';
import Bloglist from '../components/Bloglist';

const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.home}>
            <div className={classes.jumbo}>
                <Jumbotron />
            </div>
            <Bloglist />
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    home: {
        paddingLeft: '150px',
        paddingRight: '400px',
    },
    jumbo: {
        //color: 'white',
        display: 'inline-block',
        marginLeft: '30px',
        backgroundColor: 'yellow',
        //whiteSpace: 'nowrap',
    },
}))

export default Home
