import React, { useState } from 'react'
// MATERIAL UI IMPORTS
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
// CUSTOM COMPONENT IMPORTS
import PostCard from '../../../blog/components/PostCard';
// import TypeText from '../../../blog/TypeText';
// HOOKS, STYLES AND UTILITIES
import useWindowDimensions from '../../../hooks/WindowDimensions';
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion"
// EXTERNAL STYLING IMPORTS
import './style.css';
import useStyles from './styles.js' // external material styles file
// LOGO AND IMAGE IMPORTS
// import sittingPic from '../../assets/images/personal/sitting-cropped.jpg'
import sittingPicCircle from '../../assets/images/personal/sitting-cropped-circle.png'
// import headshot from '../../assets/images/personal/headshotminSquare.png'
import logocss from '../../assets/images/devlogos/logocss.png';
import logohtml from '../../assets/images/devlogos/logohtml.png';
import logojavascript from '../../assets/images/devlogos/logojavascript.png';
import logomongodb from '../../assets/images/devlogos/logomongodb.png';
import logomongoose from '../../assets/images/devlogos/logomongoose.png';
import logomysql from '../../assets/images/devlogos/logomysql.png';
import logonode from '../../assets/images/devlogos/logonode.png';
import logoreact from '../../assets/images/devlogos/logoreact.png';
import logosequelize from '../../assets/images/devlogos/logosequelize.png';

const logoArr = [
    logocss,
    logohtml,
    logojavascript,
    logomongodb,
    logomongoose,
    logomysql,
    logonode,
    logoreact,
    logosequelize
]

// GET LOCAL STORAGE USER OPTIONS OBJECT
const userOptions = JSON.parse(localStorage.getItem('userOptions')) || { menuHelper: true };


export default function AboutMe(props) {
    // GET LATEST BLOG POST FROM STATE
    const latestPost = props.latestPost;

    // =====
    // HOOKS
    // =====
    const classes = useStyles(props);
    const { width, height } = useWindowDimensions();
    const { scrollYProgress } = useViewportScroll();

    // ======================
    // PIECES O' STATE (ARR!)
    // ======================
    const [scrollState, setScrollState] = useState(`0% Scrolled`)
    const [isComplete, setIsComplete] = useState(false);
    const [menuHelperVisible, setMenuHelperVisible] = useState(userOptions.menuHelper);

    // ANIMATION VALUES FOR SCROLL PROGRESS CIRCLE
    const yRange = useTransform(scrollYProgress, [0, 0.99], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    // // ANIMATIONS
    const animations = {
        // TOP LINK BUTTON
        topButtonYPos: useTransform(scrollYProgress, [0, 0.04, 0.09, .89, .95], ['100vh', '100vh', '0vh', '0vh', '85vh']),

    }

    // SCROLL PROGRESS TRACKER STATE SETTING
    scrollYProgress.onChange(x => {
        setScrollState(`${Math.floor(x * 100)}% Scrolled`)
        setIsComplete(Math.floor(x * 100) > 99)
    })

    // USER CLICKS "DON'T SHOW AGAIN" ON MENU HELPER
    function handleMenuVisibleChange() {
        // SAVE 'CLOSE' OPTION
        userOptions.menuHelper = false;
        // CLOSE THE MENU
        setMenuHelperVisible(false);
        // SET OPTION IN LOCALSTORAGE
        localStorage.setItem('userOptions', JSON.stringify(userOptions))
    }


    return (
        <div className={`AboutMe ${classes.root}`}>
            {/* MENU HELPER BOX */}
            {/* {menuHelperVisible ? (<div
                style={{
                    background: 'cornflowerblue',
                    color: 'white',
                    padding: '.5rem',
                    position: 'absolute',
                    top: '3.8rem',
                    left: '1rem',
                    width: 200,
                    textAlign: 'center',
                    zIndex: 100,
                    borderRadius: 15,
                    boxShadow: '3px 5px .5rem rgba(20, 20, 20, 0.5)'
                }}
            >
                <p style={{ marginTop: '0em' }}>
                    <motion.span
                        style={{ fontSize: '1.5em' }}
                        initial={{ y: '0px' }}
                        animate={{ y: '-10px' }}
                        transition={{
                            duration: 1,
                            repeatType: 'mirror',
                            repeat: Infinity
                        }}
                    >
                        &uarr;
                    </motion.span>
                    Click 'OPEN MENU' to navigate to another page, or scroll down to learn more about me!
                </p>
                <Button
                    style={{ color: 'darkred', fontSize: '.9em', cursor: 'pointer' }}
                    onClick={() => setMenuHelperVisible(false)}
                >
                    <strong>&times; Close</strong>
                </Button>
                <Button
                    style={{ color: 'darkred', fontSize: '.9em', cursor: 'pointer' }}
                    onClick={() => handleMenuVisibleChange()}
                >
                    <strong>&times; Don't show again</strong>
                </Button>
            </div>) : null} */}

            {/* SCROLL PROGRESS TRACKER CIRCLE */}
            {/* <svg className={classes.scrollProgressIndicator} viewBox="0 0 60 60">
                <motion.path
                    fill="none"
                    strokeWidth="5"
                    stroke="rgba(20, 20, 20)"
                    strokeDasharray="0 1"
                    d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                    style={{
                        pathLength,
                        rotate: 90,
                        translateX: 5,
                        translateY: 5,
                        scaleX: -1 // Reverse direction of line animation
                    }}
                />
                <motion.path
                    fill="none"
                    strokeWidth="5"
                    stroke="rgba(20, 20, 20)"
                    d="M14,26 L 22,33 L 35,16"
                    initial={false}
                    strokeDasharray="0 1"
                    animate={{ pathLength: isComplete ? 1 : 0 }}
                />
            </svg> */}

            {/* SCROLL PROGRESS PERCENTAGE TRACKER TEXT */}
            {/* <span className={classes.scrollProgressPercent}>
                {scrollState}
            </span> */}

            {/* ============ */}
            {/* PAGE CONTENT */}
            {/* ============ */}
            <Grid container justify="center" className={classes.aboutmeTop}>
                {/* <Grid item sm='auto' /> */}
                {/* <Grid item sm={12} md={8}> */}
                <strong>
                    <h1>
                        My name is Zac Stowell
                            <br />
                        <small>
                            I love making things and solving puzzles.<br />
                                I love coding.
                            </small>
                    </h1>
                </strong>
                {/* </Grid> */}
                {/* <Grid item sm='auto' /> */}
            </Grid>
            <Grid container justify="center" className={classes.aboutmePicWrapper}>
                {/* <Grid item xs='auto' /> */}
                <Grid item xs={5} md={4} lg={3} >
                    <img src={sittingPicCircle} className={classes.aboutmePic} alt="I'm looking majestically off into the distance." />
                </Grid>
                {/* <Grid item xs='auto' /> */}
                <Grid container justify="center">
                    {/* <Grid item xs='auto' /> */}
                    <Grid item xs={8} style={{ textAlign: 'center' }}>
                        <h2>
                            I'm a Full-Stack Web Developer based in the Pacific Northwest.
                        </h2>
                        <p>
                            I also have a passion for making music, retro video games, and Billie - my incredible Labraheeler pup!
                        </p>
                    </Grid>
                    {/* <Grid item xs='auto' /> */}
                </Grid>
            </Grid>


        </div>
    )
}
