import React from 'react'
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const Blog = () => {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/Users/chris/Desktop/blogapp/client/src/static/data.png"
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
