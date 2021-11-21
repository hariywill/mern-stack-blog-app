import React from 'react'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useGlobalContext } from '../context/context';


const Blog = ({ blog }) => {
    const classes = useStyles()
    const history = useHistory()
    const { setCurrentBlog } = useGlobalContext()
    //const { title, text, image, _id } = blog

    const handleClick = () => {
        history.push(`/blog/${blog?._id}`)
        setCurrentBlog(Blog)
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardActionArea
                    onClick={handleClick}
                >
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/data.jpg"
                        alt="Card"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
const useStyles = makeStyles(theme => ({
    card: {
        //left: '20px',
        
        display: 'inline-block',
        position: 'relative',
    },
    
}))

export default Blog
