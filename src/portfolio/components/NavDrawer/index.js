import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import LaptopIcon from '@material-ui/icons/LaptopMac';
import CommentIcon from '@material-ui/icons/Comment';
import Link from '@material-ui/core/Link'
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

export default function NavDrawer() {
  const classes = useStyles();
  const [visibleState, setVisibleState] = useState(false);
  const anchorEl = useRef(null);

  const handleClick = (event) => {
    setVisibleState(true);
  };

  const handleClose = () => {
    setVisibleState(false);
  };
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
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl.current}
        keepMounted
        open={visibleState}
        onClose={handleClose}
        transitionDuration={{enter: 400, exit: 200}}
      >
        <MenuItem onClick={handleClose}><Link href='/' color="inherit"><HomeIcon /> About Me</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/portfolio' color="inherit"><LaptopIcon /> Portfolio</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/contact' color="inherit"><MailIcon /> Contact Me</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/crudposting' color="inherit"><CommentIcon /> CRUDposting</Link></MenuItem>
      </Menu>
    </div>
  );
}
