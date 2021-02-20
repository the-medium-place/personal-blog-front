import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import LaptopIcon from '@material-ui/icons/LaptopMac';
import CommentIcon from '@material-ui/icons/Comment';

import Link from '@material-ui/core/Link'
import React from 'react';


import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.7)',
    position: 'fixed',
    top: 0,
    zIndex: 100
  },

}));

export default function NavDrawer({ routes }) {
  const minWidth900 = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link href='/' color="inherit"><HomeIcon /> About Me</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/portfolio' color="inherit"><LaptopIcon /> Portfolio</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/contact' color="inherit"><MailIcon/> Contact Me</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/crudposting' color="inherit"><CommentIcon /> CRUDposting</Link></MenuItem>
      </Menu>
    </div>
  );
}
