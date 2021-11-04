import React, { useState, useEffect } from 'react'
import Jumbotron from '../../components/Jumbotron'
import { makeStyles } from '@material-ui/core/styles';
import Bloglist from '../../components/Bloglist';

const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.home}>
            <Jumbotron className={classes.jumbo}/>
            <Bloglist />
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    home: {
        paddingLeft: '150px',
        paddingRight: '400px'
    },
    jumbo: {
        color: 'white',
        display: 'inline-block',
        marginLeft: '30px',
    },
}))

export default Home
