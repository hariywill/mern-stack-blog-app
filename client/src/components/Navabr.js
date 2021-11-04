import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const Navabr = () => {
    const classes = useStyles()
    const [isLogin, setIsLogin] = useState(true)
    return (
        <div className={classes.nav}>
            <h2 className={classes.navtitle}>MyBlog</h2>
            <div className={classes.navlinks}>
                <Link className={classes.link} to='/'>Home</Link>
                {isLogin ? 
                    <>
                        <Link className={classes.link} to='/newblog'>New Blog</Link>
                        <Link className={classes.link} to='/blogs'>Blogs</Link>
                        <Link className={classes.link} to='/profile'>Profile</Link>
                        <Link className={classes.link} to='/logout'>Logout</Link>   
                    </>
                :
                    <Link className={classes.link} to='/login'>Login/Register</Link>
                }
                
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    nav: {
        backgroundColor: '#2b3144',
    },
    navtitle: {
        color: 'white',
        display: 'inline-block',
        marginLeft: '30px',
    },
    navlinks: {
        display: 'inline-block',
        float: 'right',
        marginTop: '25px',
        marginLeft: '100px',
        width:'30%',
        height: '50%',
    },
    link: {
        padding: '10px',
        color: 'white',
        fontSize: '120%',
        textDecoration: 'none',
    }
}))


export default Navabr
