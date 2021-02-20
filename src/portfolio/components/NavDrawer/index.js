import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CodeIcon from '@material-ui/icons/Code';
import EightBitIcon from '../../assets/images/8bitAvatar.png'
import NavAvatar from '../../assets/images/navAvatar.png';
import AlbumIcon from '@material-ui/icons/AlbumOutlined'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
        {routes.map((route, i) => { return <MenuItem key={i} onClick={handleClose}><Link href={route.path} color="inherit">{route.name}</Link></MenuItem> })}
        <MenuItem onClick={handleClose}><Link href='/crudposting' color="inherit">CRUDposting</Link></MenuItem>
      </Menu>
    </div>
  );
}
