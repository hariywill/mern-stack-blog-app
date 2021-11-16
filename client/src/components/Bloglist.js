import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Container,  } from '@mui/material'
import BlogCard from './BlogCard'

const Bloglist = ({ }) => {
    const classes = useStyles()
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
