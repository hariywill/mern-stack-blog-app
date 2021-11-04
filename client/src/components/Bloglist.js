import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@mui/material'
import Blog from './Blog'

const Bloglist = ({ }) => {
    const classes = useStyles()
    return (
        <div>
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
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

export default Bloglist
