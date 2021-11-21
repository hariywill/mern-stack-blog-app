import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import axios from 'axios'
import Bloglist from '../components/Bloglist';

const Blogs = () => {
    const classes = useStyles()
    const history = useHistory()
    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
        axios.get('/blogs')
            .then(({ data}) => setBlogs())
            .catch(error => console.log(error))
    }

    useEffect(() => {
        //fetch blogs from 
        //fetchBlogs()
    }, [])

    return (
        <div className={classes.background}>
            <div className={classes.content}>
                <h2 className={classes.headline}>All blogs</h2>
                <div className={classes.cardsContainer}>
                    <Bloglist />
                </div>
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
    cardsContainer: {
        width: '80%',
        position: 'relative',
        left: '10%',
        padding: '10px',
    },
    title: {
        width: '80%',
        left: '10%',
    },
    text: {
        width: '80%',
        left: '10%',
    },
}))


export default Blogs
