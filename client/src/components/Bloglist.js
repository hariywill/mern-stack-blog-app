import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Container,  } from '@mui/material'
import BlogCard from './BlogCard';
import { useGlobalContext } from '../context/context';

const Bloglist = ({ }) => {
    const classes = useStyles()
    const { blogs } = useGlobalContext()
    return (
        <>
            <Container className={classes.blogsContainer}>
                <Grid 
                    container 
                    spacing={3} 
                    className={classes.cards}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {/* {blogs.map((blog) => {
                        return <BlogCard blog={blog} />
                    })} */}
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </Grid>
            </Container>
        </>
    )
}

const useStyles = makeStyles(theme => ({
    blogsContainer: {
        paddingLeft: '150px',
        paddingRight: '400px'
    },
    cards: {
        //display: 'inline',
    }
    
}))

export default Bloglist
