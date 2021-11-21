import React , { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Box, Stack, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useGlobalContext } from '../context/context';

const Setting = () => {
    const classes = useStyles()
    const { password, name } = useGlobalContext()

    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isPasswordDisabled, setIsPasswordDisabled] = useState(false)
    const [isNameDisabled, setIsNameDisabled] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    const handleName = async () => {
        if (!isNameDisabled) {
            setIsNameDisabled(!isNameDisabled)
        } else {
            setIsNameDisabled(!isNameDisabled)
            //Submit new password 
        }
    }
    const handlePassword = async () => {
        if (!isPasswordDisabled) {
            setIsPasswordDisabled(!isPasswordDisabled)
        } else {
            setIsPasswordDisabled(!isPasswordDisabled)
            //Submit new password 
        }
    }
    const checkPassword = (oldPsw, newPsw) => {
        //check if old password correct

        //check if new password is the same as old
    }

    const checkName = (oldPsw, newPsw) => {
        //check if new name is the same as old
    }
    const handleDialogOpen = () => setIsDialogOpen(!isDialogOpen)
    const handleDialogClose = () => setIsDialogOpen(!isDialogOpen)

    const handleChangeDel = (value) =>{
        console.log(value)
        if (value === 'permanently delete') setIsButtonDisabled(!isButtonDisabled)
    }

    useEffect(() => {
        
    }, [])

    return (
        <div className={classes.background}>
            <Box
                component={Grid}
                className={classes.content}
                boxShadow={1}
            >
                <h2 className={classes.headline}>Setting</h2>
                <Box component={Grid} container className={classes.settings}>
                    <Box component={Grid} boxShadow={2} item className={classes.setting}>
                        <Typography variant='h6' className={classes.sub_headline}>Name</Typography>
                        <Typography variant='subtitle2' className={classes.description}>Your name appears on your Profile page, as your byline, and in your responses. It is a required field.</Typography>
                        <Button className={`${classes.btn} ${classes.out_btn}`} variant="outlined" onClick={handleName}>Change your name</Button>
                        {isNameDisabled ?
                            <>  
                            {/* This needs to be a form */}
                                <Stack
                                    component="form"
                                    sx={{
                                        marginTop: '15px',
                                        width: '25ch',
                                        position: 'relative'
                                    }}
                                    spacing={2}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        //label="Required"
                                        placeholder="New name"
                                        className={classes.input}
                                    />
                                    <Button className={classes.btn} variant="outlined" onClick={handleName}>Confirm</Button>
                                </Stack>
                            </> : null}
                    </Box>
                    {/* <Box component={Grid} boxShadow={2} item className={classes.setting}>
                        <Typography variant='h6' className={classes.sub_headline}>Photo</Typography>
                        <Typography variant='h7' className={classes.info}>Your Avatar</Typography>
                        <Typography variant='subtitle2' className={classes.description}>Your name appears on your Profile page, as your byline, and in your responses. It is a required field.</Typography>
                    </Box> */}
                    <Box component={Grid} boxShadow={2} item className={classes.setting}>
                        <Typography variant='h6' className={classes.sub_headline}>Password</Typography>
                        <Typography variant='subtitle2' className={classes.description}>Your name appears on your Profile page, as your byline, and in your responses. It is a required field.</Typography>
                        <Button className={`${classes.btn} ${classes.out_btn}`} variant="outlined" onClick={handlePassword}>Change Password</Button>
                        {isPasswordDisabled ?
                            <>  
                            {/* This needs to be a form */}
                                <Stack
                                    component="form"
                                    sx={{
                                        marginTop: '15px',
                                        width: '25ch',
                                        position: 'relative'
                                    }}
                                    spacing={2}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        //label="Required"
                                        placeholder="Your old password"
                                        className={classes.input}
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        //label="Required"
                                        placeholder="New password"
                                        className={classes.input}
                                    />
                                    <Button className={classes.btn} variant="outlined" onClick={handlePassword}>Confirm</Button>
                                </Stack>
                            </> : null}
                        
                        
                    </Box>
                    <Box component={Grid} boxShadow={2} item className={classes.setting}>
                        <Typography variant='h6' className={classes.sub_headline}>Delete</Typography>
                        <Typography variant='h7' className={classes.description}>Delete your account</Typography>
                        <Button className={`${classes.btn} ${classes.out_btn}`} variant="outlined" onClick={handleDialogOpen}>Delete</Button>
                        <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                            <DialogTitle>Delete</DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                To delete this account, please enter <em>permanently delete</em> here.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="delete"
                                type="text"
                                fullWidth
                                variant="standard"
                                placeholder="permanently delete"
                                onChange={e => handleChangeDel(e.target.value)}
                            />
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleDialogClose}>Cancel</Button>
                              <Button onClick={handleDialogClose} disabled={isButtonDisabled}>Confirm</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Box>
            </Box>
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
        width: '100%',
        height: '100%',
        position: 'relative',
        left: '10%',
        marginLeft: '30px',
        display: 'inline-block',
    },
    headline: {
        width: '80%',
        position: 'relative',
        left: '10%',
    },
    settings: {
        width: '100%',
        position: 'relative',
        display: 'inline-block',

        left: '10%',
        marginBottom: '5px'
    },
    setting: {
        width: '80%',
        height: 'auto',
        padding: '10px',
        margin: '0 5px',
        display: 'block',
    },
    sub_headline: {
        padding: '20px',
    },
    /* info: {
        position: 'relative',
        //paddingLeft: '20px',
        left: '20px',
        margin: '10px 20px',
        //borderStyle: 'solid',
    }, */
    description: {
        position: 'relative',
        //paddingLeft: '20px',
        width: 'auto',
        left: '20px',
        margin: '10px 20px',
        paddingBottom: '15px',
        //borderStyle: 'solid',
    },
    btn: {
        position: 'relative',
        //paddingLeft: '20px',
        left: '20px',
        margin: '10px 20px',
        borderStyle: 'solid',
    },
    input: {
        position: 'relative',
        //paddingLeft: '20px',
        //width: '25ch',
        left: '20px',
        display: ''
    },
    out_btn: {
        width: '25ch'
    }
    
}))

export default Setting


/* const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }
}

const Setting = () => {
    const classes = useStyles()
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '500px' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Name" {...a11yProps(0)} />
                <Tab label="Photo" {...a11yProps(1)} />
                <Tab label="Password" {...a11yProps(2)} />
                <Tab label="Delete" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Name
                <Typography component='h1'>Name</Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Photo
            </TabPanel>
            <TabPanel value={value} index={2}>
                Photo
            </TabPanel>
            <TabPanel value={value} index={3}>
                Delete
            </TabPanel>
        </Box>
    )
} */