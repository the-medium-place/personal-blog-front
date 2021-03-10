import React from 'react';
import Headshot from '../../assets/images/headshot.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import LinedPaper from '../../assets/images/linedpaper.png'


const useStyles = makeStyles((theme) => ({
    root: {
        // position: 'absolute',
        // top: '7vh'
        // marginTop: '10vw'

        // minHeight: '120vh',
        // width: '100vw',
        // overflowX: 'hidden'
        maxHeight: '80vh',
        backgrond: 'transparent',

    },
    noBg: {
        background: 'transparent'
    },
    headshot: {
        position: 'relative',
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: '0.8rem',
        maxHeight: '40vw',
        // marginBottom: '15vh',
        // zIndex: 1,
        maxWidth: '80vw',
        // padding: '.6rem',
        background: 'white',
        boxShadow: '0 0 5px rgb(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)',
        transform: `rotate(-15deg)`,
        transition: '.3s',
        // '&:before, &:after': {
        //     position: 'absolute',
        //     zIndex: '-1',
        //     width: '40%',
        //     height: 10,
        //     content: '""',
        //     left: 12,
        //     bottom: 8,
        //     background: 'rgba(0, 0, 0, 0)',
        //     transform: 'skew(-10deg) rotate(-5deg)',
        //     boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
        // },
        // '&:after': {
        //     left: 'auto',
        //     right: 12,
        //     transform: "skew(10deg) rotate(5deg)"
        // }
        '&:hover': {
            transform: 'rotate(0)',
            transition: '.3s'
        }
    },
    headshotOver1000: {
        position: 'relative',
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: '0.8rem',
        maxHeight: '65vw',
        // marginBottom: '15vh',
        // zIndex: 1,
        maxWidth: '24vw',
        // padding: '.6rem',
        background: 'white',
        boxShadow: '0 0 5px rgb(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)',
        transform: `rotate(-15deg)`,
        transition: '.3s',
        '&:hover': {
            transform: 'rotate(0)',
            transition: '.3s'
        }
    },
    splashHeading: {
        fontSize: '7vw',
        color: 'yellow',
        textShadow: '1px 1px 1px black',

    },
    splashHeadingOver1000: {
        fontSize: '5vw',
        color: 'yellow',
        textShadow: '1px 1px 1px black',
    },
    headingWrap: {
        // transform: 'translateY(-12rem)',
        transform: 'translateY(-5vh)',
        zIndex: '10'
    },
    splashSubHeading: {
        // transform: 'translateY(4rem)',
        color: 'yellow',
        textShadow: '1px 1px 1px black',
        fontSize: '1.8vw'
    },
    splashSubHeadingOver1000: {
        // transform: 'translateY(4rem)',
        color: 'yellow',
        textShadow: '1px 1px 1px black',
        fontSize: '1.3vw'
    },
    topHeadingWrapper: {
        zIndex: '10',
        textAlign: 'left',
        background: 'transparent'
        // borderRadius: '5px'
    }
}))


export default function Splash() {

    const classes = useStyles();
    const minWidth1000 = useMediaQuery('(min-width:1000px)');


    return (
        <Grid container className={classes.root}>
            <Grid item xs={5} className={classes.noBg}></Grid>
            <Grid item xs={7} className={classes.topHeadingWrapper}>
                <div style={{ width: '100%', transform: 'translateY(4rem)', padding: '0.7rem'}}>
                    <a href="/home"><h1 className={minWidth1000 ? classes.splashHeadingOver1000:classes.splashHeading}>Zac Stowell</h1></a>
                    <p className={minWidth1000 ? classes.splashSubHeadingOver1000 : classes.splashSubHeading}>Full-Stack Web Developer</p>
                    <p className={minWidth1000 ? classes.splashSubHeadingOver1000 : classes.splashSubHeading}>Portland, OR | zgstowell@gmail.com</p>
                </div>
            </Grid>

            <Grid xs={3}></Grid>
            <Grid item xs={6}>
                <img src={Headshot} className={minWidth1000 ? classes.headshotOver1000 : classes.headshot} />
            </Grid>
            <Grid xs={3}></Grid>

            <Grid item xs={5} className={classes.headingWrap} style={{ textAlign: 'right' }}>
                <a href="/portfolio"><h1 className={minWidth1000 ? classes.splashHeadingOver1000 : classes.splashHeading}>Portfolio</h1></a>
                <p className={minWidth1000 ? classes.splashSubHeadingOver1000 : classes.splashSubHeading} style={{ transform: 'translateY(-1vh)' }}>A selection of projects</p>
            </Grid>
            <Grid item xs={2} style={{maxHeight: 1}}></Grid>
            <Grid item xs={5} className={classes.headingWrap} style={{ textAlign: 'left' }}>
                <a href="/contact"><h1 className={minWidth1000 ? classes.splashHeadingOver1000 : classes.splashHeading}>Contact</h1></a>
                <p className={minWidth1000 ? classes.splashSubHeadingOver1000 : classes.splashSubHeading} style={{ transform: 'translateY(-1vh)' }}>Send me a message!</p>
            </Grid>

            <Grid xs={12}></Grid>
        </Grid>
    )
}
