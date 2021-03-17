import React, { useState } from 'react';
// import { Row, Col, Form, Button } from 'react-bootstrap';
import API from '../../../utils/API';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export default function LoginForm(props) {
    const history = useHistory();

    const [loginState, setLoginState] = useState({
        username: '',
        password: ''
    })


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
                alert('success!\ntoken: ' + resToken.data.token)
                history.push('/crudposting/admin')
            })
            .catch(err => {
                console.log(err.response)
                if (err.response) alert(err.response.data + '\nStatus\n' + err.response.status)
                // else if (err.response) alert
            })

    }

    return (
        <Box display="flex" justifyContent="center" className="LoginForm" style={{ color: 'black' }}>
            <Grid container spacing={2}>
                <Grid item xs={false} md={2} />
                <Grid item xs={12} md={8}>
                    <form onSubmit={handleFormSubmit}>
                        <Box
                            spacing={3}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            style={{ width: "100%", padding: '1.2rem' }}
                        >
                            <TextField
                                name="username"
                                variant="outlined"
                                label='E-Mail'
                                placeholder="you@email.web"
                                value={loginState.username}
                                onChange={handleInputChange}
                                type="text"
                                style={{marginBottom: '1.3rem'}}
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
                                style={{marginBottom: '1.3rem'}}
                            />
                            <Button
                                variant="contained"
                                type="submit"
                                className="btn-lg"
                                style={{width: '50%', margin: '0 auto'}}
                            >
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Grid>
                <Grid item xs={false} md={2} />
            </Grid>
        </Box>
    )
}

