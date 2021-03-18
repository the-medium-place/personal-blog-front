import React, { useState } from 'react';
// import { Row, Col, Form, Button } from 'react-bootstrap';
import API from '../../../utils/API';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    snackbar: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    loginForm: {
        color: 'rgba(20, 20, 20)',
        width: "100%", 
        padding: '1.2rem',
        '& > input': {
            color: 'rgba(20, 20, 20)'
        }
    }
}));

export default function LoginForm(props) {
    const history = useHistory();
    const classes = useStyles();

    const [loginState, setLoginState] = useState({
        username: '',
        password: ''
    })
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        severity: '',
        message: ''
    });

    const openSnackbar = (severity, message) => {
        setSnackbarState({
            open: true,
            severity,
            message
        })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarState({ ...snackbarState, open: false });
        if(snackbarState.severity === 'success') history.push('/crudposting/admin')
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginState({ ...loginState, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log(loginState);
        API.userLogin(loginState)
            .then(resToken => {
                // console.log(resToken.data.token)
                localStorage.setItem('token', resToken.data.token)
                // alert('success!\ntoken: ' + resToken.data.token)
                openSnackbar('success', 'Success! Redirecting to admin...')
                // history.push('/crudposting/admin')
            })
            .catch(err => {
                console.log(err)
                // if (err.response) alert(err.response.data + '\nStatus\n' + err.response.status)
                if (err.response) openSnackbar('error', err.response.data)
                // else if (err.response) alert
            })

    }

    return (
        <Box display="flex" justifyContent="center" className="LoginForm" style={{ color: 'black', marginTop: '20vh' }}>
            <Grid container spacing={2}>
                <Grid item xs={false} md={2} />
                <Grid item xs={12} md={8}>
                    <form onSubmit={handleFormSubmit}>
                        <Box
                            spacing={3}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            // style={{ width: "100%", padding: '1.2rem' }}
                            className={classes.loginForm}
                        >
                            <TextField
                                name="username"
                                variant="outlined"
                                label='Username'
                                placeholder="you@email.web"
                                value={loginState.username}
                                onChange={handleInputChange}
                                color="secondary"
                                type="text"
                                style={{ marginBottom: '1.3rem', color: 'black' }}
                            />
                            <TextField
                                name="password"
                                variant="outlined"
                                label="Password"
                                placeholder="forget?"
                                value={loginState.password}
                                onChange={handleInputChange}
                                type="password"
                                autoCapitalize="current-password"
                                style={{ marginBottom: '1.3rem', color: 'black' }}
                            />
                            <Button
                                variant="contained"
                                type="submit"
                                className="btn-lg"
                                style={{ width: '50%', margin: '0 auto' }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Grid>
                <Grid item xs={false} md={2} />
            </Grid>
            <Snackbar open={snackbarState.open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbarState.severity}>
                    {snackbarState.message}
                </Alert>
            </Snackbar>
        </Box>
    )
}

