import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const Input = styled('input')({
  display: 'none',
});

const Create = () => {
    const classes = useStyles()
    const history = useHistory()
    const [isUploaded, setIsUploaded] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')
    

    const handleSubmit = async () => {
        //e.preventDefault()
        console.log('Submitted!')
        let postBody = {
            "title": title,
            "text": text,
            "image": image
        }

        console.log('fetched from frontend')
        try {
            const response = await axios.post('/blogs', postBody)
            let res = response.data
            history.push(`/blogs/${res._id}`)
        } catch(err) {
            return err.message
        }
    }

    useEffect(() => {
        //setIsUploaded(!isUploaded)
    }, [])

    return (
        <div className={classes.background}>
            <div className={classes.content}>
                <h2 className={classes.headline}>Create your blog</h2>
                <div>
                    <form className={classes.form} onSubmit={e => e.preventDefault()}>
                        <TextField
                            required
                            id="title"
                            //label="Required"
                            placeholder="Title"
                            className={classes.title}
                            onChange={e => setTitle(e.target.value)}
                        ></TextField>
                        <TextField
                            required
                            id="text"
                            //label="Required"
                            multiline
                            rows={20}
                            placeholder="Share your story..."
                            className={classes.text}
                            onChange={e => setText(e.target.value)}
                        ></TextField>
                        <div className={classes.btns}>
                            <label htmlFor="blog-background-image" className={classes.btn_upload}>
                                <Input accept="image/*" id="blog-background-image" multiple type="file" />
                                <Button variant="contained" component="span">
                                    Upload
                                </Button>
                                { isUploaded && 
                                    <>
                                        <h6 className={classes.upload_msg}>Image uploaded!</h6>
                                    </>
                                }
                            </label>
                            <Button variant="contained" component="span" type="submit" startIcon={<SendIcon />} className={classes.btn_submit} onClick={handleSubmit}>
                                Publish
                            </Button>
                        </div>
                    </form>
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
        left: '18%',
    },
    form: {
        width: '80%',
        position: 'relative',
        left: '10%',
    },
    title: {
        width: '80%',
        left: '10%',
    },
    text: {
        width: '80%',
        left: '10%',
    },
    btns: {
        width: '80%',
        position: 'relative',
        marginTop: '20px',
        left: '10%',
        /* borderStyle: 'solid',
        borderWidth: 'thick', */
    },
    btn_upload: {
        //left: '90%',
        marginLeft: '10px',
    },
    upload_msg: {
        display: 'inline',
        position: 'relative',
        left: '20px',
    },
    btn_submit: {
        right: '-55%',
    },
}))

export default Create
