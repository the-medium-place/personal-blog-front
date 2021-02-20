import React, { useState } from 'react';
import API from '../../../utils/API';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EightBitAvatar from '../../assets/images/8bitAvatar.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ContactMailIcon from '@material-ui/icons/ContactMail'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    pageTitle: {
        fontSize: '2.5rem'
    },
    button: {
        margin: theme.spacing(3),
    },
    form: {
        margin: theme.spacing(3)
    },
    formTitle: {
        textAlign: 'center'
    },
    formTitleText: {
        paddingTop: '1.2rem'
    },
    contactLinkBox: {
        display: 'flex',
        justifyContent: 'center'
    },
    contactLink: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '40px',
        background: "darkblue",
        color: 'azure',
        margin: "3px",
        alignItems: 'center'
    }
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function ContactMe() {
    const [emailState, setEmailState] = useState({
        userEmail: "",
        username: "",
        userMessage: ""
    })

    const [successBarOpen, setSuccessBarOpen] = useState(false);
    const [failureBarOpen, setFailureBarOpen] = useState(false);
    const [failureBarText, setFailureBarText] = useState('')

    const handleSendClick = (e) => {
        e.preventDefault();

        if (emailState.username.length < 1 && emailState.userMessage.length < 1 && !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(emailState.userEmail)) {
            console.log('please enter valid info');
            setFailureBarText("You didn't enter any valid information!")
            setFailureBarOpen(true);
        } else {

            API.sendMail(emailState).then(res => {
                console.log(res)
                if (res.data === 'success') {
                    console.log('success');
                    setSuccessBarOpen(true);
                } else {
                    console.log('didnt work');
                    setFailureBarText('Server error! Oh noes!')
                    setFailureBarOpen(true);
                }
            });
            setEmailState({
                userEmail: '',
                username: '',
                userMessage: ''
            })
        }

    }

    const classes = useStyles();


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmailState({ ...emailState, [name]: value })
    }

    const handleSuccessBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessBarOpen(false);
    }

    const handleFailureBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setFailureBarOpen(false);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid
                    item
                    container
                    xs={12}
                    justify="center"
                    alignItems="center"
                >
                    <h1 className={classes.pageTitle}>Choose an option here, or use the form below!</h1>
                </Grid>
                <Grid className={classes.contactLinkBox} item xs={12} md={4}>
                    <Button
                        variant="contained"
                        style={{ width: '90%', height: '3rem' }}
                        color="default"
                        className={classes.button}
                        href="mailto:zgstowell@gmail.com"
                        target="_blank"
                        startIcon={<ContactMailIcon />}
                    >
                        zgstowell@gmail.com
                    </Button>
                </Grid>
                <Grid className={classes.contactLinkBox} item xs={12} md={4}>
                    <Button
                        variant="contained"
                        style={{ width: '90%', height: '3rem' }}
                        color="default"
                        className={classes.button}
                        href="http://github.com/the-medium-place"
                        startIcon={<GitHubIcon />}
                        target="_blank"
                    >
                        GitHub Profile
                    </Button>
                </Grid>
                <Grid className={classes.contactLinkBox} item xs={12} md={4}>

                    <Button
                        variant="contained"
                        style={{ width: '90%', height: '3rem' }}
                        color="default"
                        className={classes.button}
                        href="https://www.linkedin.com/in/zachary-stowell/"
                        startIcon={<LinkedInIcon />}
                        target="_blank"
                    >
                        LinkedIn Profile
                    </Button>
                </Grid>
                <Grid item xs={5} style={{ borderTop: '3px dotted black' }}></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5} style={{ borderTop: '3px dotted black' }}></Grid>

                <Grid item xs={5}></Grid>
                <Grid item xs={2} style={{ marginTop: '-3.3rem', textAlign: 'center' }}><h2>OR</h2></Grid>
                <Grid item xs={5}></Grid>

                <Grid item md={2} xs={false}></Grid>
                <Grid item xs={12} md={8}>
                    <Paper>
                        <Grid item xs={12} className={classes.formTitle}>
                            <h1 className={classes.formTitleText}>Reach out and touch someone (me)!</h1>
                        </Grid>
                        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSendClick}>
                            <Grid item xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item xs={8} md={3}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="standard-basic"
                                            label="Name"
                                            name="username"
                                            value={emailState.username}
                                            onChange={handleInputChange}
                                            helperText={emailState.username.length < 1 ? 'Please enter your name...' : `Oh, hello ${emailState.username}`}
                                        />
                                    </Grid>
                                    <Grid item xs={8} md={3}>
                                        <TextField
                                            error={(emailState.userEmail.length !== 0) && !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(emailState.userEmail)}
                                            required
                                            fullWidth
                                            type="email"
                                            id="standard-basic"
                                            label="Email"
                                            name="userEmail"
                                            value={emailState.userEmail}
                                            onChange={handleInputChange}
                                            helperText={(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(emailState.userEmail)) ? "Where can I reach you?" : `I'll be responding to you at '${emailState.userEmail}'`}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            id="standard-multiline-flexible"
                                            helperText={emailState.userMessage.length < 1 ? 'Say something nice!' : emailState.userMessage.length}
                                            required
                                            multiline
                                            rows={4}
                                            rowsMax={30}
                                            label="Message"
                                            name="userMessage"
                                            value={emailState.userMessage}
                                            onChange={handleInputChange}
                                            fullWidth 
                                            />
                                    </Grid>
                                    <Button
                                        variant="contained"
                                        // color="primary"
                                        type="submit"
                                        className={classes.button}
                                        endIcon={<SendIcon />}
                                    >
                                        Send
                                </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
                <Grid item md={2} xs={false}></Grid>

            </Grid>

            {/* SUCCESS SNACKBAR */}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={successBarOpen}
                autoHideDuration={3000}
                onClose={handleSuccessBarClose}
            >
                <Alert onClose={handleSuccessBarClose} severity="success">
                    You message has been sent... Maybe Zac is reading it already!!
                </Alert>
            </Snackbar>

            {/* FAILURE SNACKBAR */}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={failureBarOpen}
                autoHideDuration={3000}
                onClose={handleFailureBarClose}
            >
                <Alert onClose={handleFailureBarClose} severity="error">
                    {failureBarText}
                </Alert>
            </Snackbar>
        </div>
    )
}
