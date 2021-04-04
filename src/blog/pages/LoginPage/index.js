import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import API from '../../../utils/API'
import Snackbar from '@material-ui/core/Snackbar';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
// import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockOutlined from '@material-ui/icons/LockOutlined'
// core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
// import Footer from "components/Footer/Footer.js";
// import Grid container from "components/Grid/Grid container.js";
// import Grid item from "components/Grid/Grid item.js";
import Grid from '@material-ui/core/Grid'
// import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput";
import MuiAlert from '@material-ui/lab/Alert';

import Button from '@material-ui/core/Button'

import styles from "../../../assets/js/pageStyles/loginPage";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(styles);

export default function LoginPage() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  const [loginState, setLoginState] = useState({
    username: '',
    password: ''
  })
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    severity: '',
    message: ''
  });



  const classes = useStyles();
  const history = useHistory();

  const openSnackbar = (severity, message) => {
    setSnackbarState({
      open: true,
      severity,
      message
    })
  }

  setTimeout(function () {
    setCardAnimation("");
  }, 700);



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarState({ ...snackbarState, open: false });
    if (snackbarState.severity === 'success') history.push('/crudposting/admin')
  };

  const handleInputChange = (e) => {
    console.log(e.target)
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
    <div>
      <div className={classes.container}>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={4}>
            <Card className={classes[cardAnimaton]}>
              <form className={classes.form} onSubmit={handleFormSubmit}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Login to Admin</h4>
                  <div className={classes.socialLine}>
                  </div>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    name="username"
                    value={loginState.username}
                    // onChange={handleInputChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      name:'username',
                      onChange:handleInputChange,
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="password"
                    value={loginState.password}
                    // onChange={handleInputChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      name:"password",
                      onChange:handleInputChange,
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockOutlined className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                      autoComplete: "off"
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button variant="contained" color="primary" type="submit" size="lg">
                    Login!
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Snackbar open={snackbarState.open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackbarState.severity}>
          {snackbarState.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
