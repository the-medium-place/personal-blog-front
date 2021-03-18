import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import LaptopIcon from '@material-ui/icons/LaptopMac';
import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  button: {
    position:'absolute',
    top:'1rem',
    left:'1rem',
    zIndex: 100
  }

}));

export default function NavDrawer({ componentViewState, setComponentViewState }) {

  const classes = useStyles();
  const [visibleState, setVisibleState] = useState(false);
  const anchorEl = useRef(null);
  const history = useHistory();

  const handleClick = () => {
    setVisibleState(true);
  };

  const handleClose = (e) => {
    setComponentViewState(e.target.id)
    setVisibleState(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/crudposting')
}

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        ref={anchorEl}
        className={classes.button}
        variant="contained"
      >
       Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl.current}
        keepMounted
        open={visibleState}
        onClose={handleClose}
        transitionDuration={{enter: 400, exit: 200}}
      >
        <MenuItem onClick={handleClose} id="main"><HomeIcon /> Dashboard</MenuItem>
        <MenuItem onClick={handleClose} id="addpost"><LaptopIcon /> Add New Post</MenuItem>
        <MenuItem onClick={handleClose} id="posts"><MailIcon />  All Posts</MenuItem>
        <MenuItem onClick={handleClose} id="tags"><CommentIcon /> All Tags</MenuItem>
        <MenuItem onClick={handleClose} id="comments"><CommentIcon /> All Comments</MenuItem>
        <MenuItem onClick={handleLogout}><CommentIcon /> Logout/Exit</MenuItem>
   </Menu>
    </div>
  );
}
