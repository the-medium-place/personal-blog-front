import React, { useState } from 'react'
// MATERIAL UI IMPORTS
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
// CUSTOM COMPONENT IMPORTS
import PostCard from '../../../blog/components/PostCard';
// import TypeText from '../../../blog/TypeText';
// HOOKS, STYLES AND UTILITIES
import useWindowDimensions from '../../../hooks/WindowDimensions';
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion"
import './style.css';
// LOGO AND IMAGE IMPORTS
import headshot from '../../assets/images/headshotminSquare.png'
import logocss from '../../assets/images/logocss.png';
import logohtml from '../../assets/images/logohtml.png';
import logojavascript from '../../assets/images/logojavascript.png';
import logomongodb from '../../assets/images/logomongodb.png';
import logomongoose from '../../assets/images/logomongoose.png';
import logomysql from '../../assets/images/logomysql.png';
import logonode from '../../assets/images/logonode.png';
import logoreact from '../../assets/images/logoreact.png';
import logosequelize from '../../assets/images/logosequelize.png';

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    minHeight: 10000
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  topSpacer: {
    height: '6rem',
    zIndex: -1
  },
  blogWrapper: {
    width: '100%',
    padding: '3rem'
  },
  aboutMePic: {
    height: '40vh',
    clipPath: 'circle(30% at 38% 35%)'
  },
  picWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  picIntroWrapper: {
    position: 'fixed',
    padding: '0 20vw 0 20vw'
  },
  missionStatement: {
    // transform: 'translateY(-18vh)'
  },
  scrollProgressIndicator: {
    position: 'fixed',
    top: '2.5rem',
    right: '1rem',
    width: 80,
    height: 80,
    aspectRatio: '1/1'
  },
  secondaryText: {
    position: 'fixed',
    fontSize: '2rem',
    perspective: 2000,
  },
  scrollProgressPercent: {
    position: 'fixed',
    top: '1rem',
    right: '1rem'
  }

}));

// GET LOCAL STORAGE USER OPTIONS OBJECT
const userOptions = JSON.parse(localStorage.getItem('userOptions')) || { menuHelper: true }

export default function AboutMe(props) {
  // GET LATEST BLOG POST FROM STATE
  const latestPost = props.latestPost;

  // =====
  // HOOKS
  // =====
  const classes = useStyles(props);
  const { width, height } = useWindowDimensions();
  const { scrollYProgress } = useViewportScroll()

  // ======================
  // PIECES O' STATE (ARR!)
  // ======================
  const [scrollState, setScrollState] = useState(`0% Scrolled`)
  const [isComplete, setIsComplete] = useState(false);
  const [menuHelperVisible, setMenuHelperVisible] = useState(userOptions.menuHelper);

  // ANIMATION VALUES FOR SCROLL PROGRESS CIRCLE
  const yRange = useTransform(scrollYProgress, [0, 0.99], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

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

  // =================================
  // ANIMATION / SCROLL POSITION SETUP
  // =================================
  const animations = {
    // X POSITION OF INTRO PIC ON SCROLL
    picXPosAnim: useTransform(scrollYProgress, [0, .07, .18, .25], ["-100vw", '0vw', "0vw", '100vw']),
    picOpacityAnim: useTransform(scrollYProgress, [0, .07, .18, .23], [0, 1, 1, 0]),

    // X POSITION OF INTRO TEXT ON SCROLL
    introXPosAnim: useTransform(scrollYProgress, [0, .07, .18, .25], ['100vw', '0vw', '0vw', '-100vw']),

    // MISSION STATEMENT SPECIFIC ANIMATION
    missionStatementXPos: useTransform(scrollYProgress, [0, .07], ['100vw', '0vw']),
    missionStatmentFontSize: useTransform(scrollYProgress, [0, .18, .5, .6, .7], ['1em', '1em', '1.4rem', '1.8rem', '1.9em']),
    missionnStatementYPos: useTransform(scrollYProgress, [0, .4, .5, .6, .7], ['0vh', '0vh', '-40vh', '-60vh', '-100vh']),
    missionStatementOpacity: useTransform(scrollYProgress, [0, .07, .55, .57], [0, 1, 1, 0]),

    // AFTER MISSION STATEMENT (SECONDARY) TEXT
    secondaryTextYPos: useTransform(scrollYProgress, [0, .55, .6], ['200vh', '100vh', '-25vh']),
    secondaryTextRotateAnim: useTransform(scrollYProgress, [0, .65, .8], ['0deg', '0deg', '180deg']),
    secondaryTextOpacity: useTransform(scrollYProgress, [0, .78, .83], [1, 1, 0]),
    secondaryTextRotateAnimBackside: useTransform(scrollYProgress, [0, .65, .8], ['-180deg', '-180deg', '0deg']),

    // TOP LINK BUTTON
    topButtonYPos: useTransform(scrollYProgress, [0, 0.04, 0.09], ['100vh', '100vh', '0vh']),

    // DEV LANGUAGES ICON LIST
    logoArrXPos: useTransform(scrollYProgress, [0, .22, .5], ['-300vw', '-300vw', '300vw']),

    // PAGE BOTTOM LINKS ANIMATIONS
    linksOpacity: useTransform(scrollYProgress, [0, 0.8, 0.84], [0, 0, 1]),
    linksYPos: useTransform(scrollYProgress, [0, .93, .98], ['0vh', '0vh', '-100vh' ]),

    portfolioLinkXPos: useTransform(scrollYProgress, [0, 0.8, 0.84], ['-1OOvw', '-100vw', '0vw']),
    portfolioDescXPos: useTransform(scrollYProgress, [0, 0.8, 0.84], ['1OOvw', '100vw', '0vw']),

    contactmeLinkXPos: useTransform(scrollYProgress, [0, 0.82, 0.86], ['-1OOvw', '-100vw', '0vw']),
    contactmeDescXPos: useTransform(scrollYProgress, [0, 0.82, 0.86], ['1OOvw', '100vw', '0vw']),

    blogLinkXPos: useTransform(scrollYProgress, [0, 0.84, 0.88], ['-1OOvw', '-100vw', '0vw']),
    blogDescXPos: useTransform(scrollYProgress, [0, 0.84, 0.88], ['1OOvw', '100vw', '0vw']),

    // BLOG POST 
    blogPostYPos: useTransform(scrollYProgress, [0, .9, .97], ['100vh', '100vh', '0vh'])
  }


  return (
    <div className={"AboutMe " + classes.root}>
      {/* MENU HELPER BOX */}
      {menuHelperVisible ? (<div
        style={{
          background: 'darkblue',
          color: 'yellow',
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
              duration: 1.2,
              repeatType: 'mirror',
              repeat: Infinity
            }}
          >
            &uarr;
            </motion.span>
            Click 'OPEN MENU' to navigate to another page, or scroll down to learn more about me!
          </p>
        <Button
          style={{ color: 'yellow', fontSize: '.9em' }}
          onClick={() => setMenuHelperVisible(false)}
        >
          <strong>&times; close</strong>
        </Button>
        <Button
          style={{ color: 'yellow', fontSize: '.9em' }}
          onClick={() => handleMenuVisibleChange()}
        >
          <strong>&times; Don't show again</strong>
        </Button>
      </div>) : null}

      {/* SCROLL PROGRESS TRACKER CIRCLE */}
      <svg className={classes.scrollProgressIndicator} viewBox="0 0 60 60">
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
      </svg>
      {/* SCROLL PROGRESS PERCENTAGE TRACKER TEXT */}
      <span className={classes.scrollProgressPercent}>
        {scrollState}
      </span>

      {/* SPACER DIV */}
      <div className={classes.topSpacer} id="aboutme-top" />

      {/* SIMPLE GREETING WITH ANIMATED 'DOWN' ARROW */}
      <Grid container direction="column" justify="center">
        <motion.h1
          // className={classes.aboutMeGreeting}
          style={{ margin: '0 auto' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          GREETINGS.
        </motion.h1>
        <motion.span
          style={{ margin: '20vh auto 0 auto', fontSize: '4rem' }}
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={{
            duration: 1,
            repeatType: 'mirror',
            repeat: Infinity
          }}
        >
          {/* <ArrowDownwardIcon /> */}
          &darr;
        </motion.span>
      </Grid>

      {/* ===================== */}
      {/* PIC AND INTRO CONTENT */}
      {/* ===================== */}
      <Grid container justify='center' className={classes.picIntroWrapper} style={{ top: width < 960 ? 10 : '30vh' }}>

        {/* PIC IN FROM LEFT SIDE */}
        <Grid item md={6} className={classes.picWrapper}>
          <motion.img
            style={{
              marginBottom: '-2rem',
              x: animations.picXPosAnim,
              opacity: animations.picOpacityAnim
            }}
            className={classes.aboutMePic}
            src={headshot}
          />
        </Grid>

        {/* SHORT INTRO IN WITH PIC */}
        <Grid item md={6} className="aboutme-intro-wrapper">
          <motion.div
            style={{
              marginBottom: '-.67em',
              x: animations.introXPosAnim,
              opacity: animations.picOpacityAnim,
              fontSize: '1em'
            }}
          >
            <h3 className="aboutme-intro">I'm Zac!</h3>
            <p className="aboutme-intro">
              I've loved coding since I built my first websites at the public library in the mid-90's. I had a collection of GeoCities sites about dragons, or martial arts, or some combination thereof... My life went in many directions since then, but the draw to web and application development has always been a constant.
            </p>
          </motion.div>

          {/* MISSION STATEMENT SPECIFIC CONTAINER */}
          <motion.h6 style={{
            y: animations.missionnStatementYPos,
            x: animations.missionStatementXPos,
            fontSize: animations.missionStatmentFontSize,
            // scale: missionStatementScale,
            width: '85vw',
            opacity: animations.missionStatementOpacity,
            margin: '0 auto',
            textShadow: '0px 10px 10px linear-gradient(to bottom, red, yellow)'
          }}
            className={classes.missionStatement}
          >
            So I became a <strong><em>Full-Stack Web Developer</em></strong>.
            </motion.h6>
        </Grid>
      </Grid>

      {/* ============================= */}
      {/* SECONDARY TEXT FLIP ANIMATION */}
      {/* ***AFTER MISSION STATEMENT*** */}
      {/* ============================= */}
      <Grid container justify="center" className={classes.secondaryText}>
        {/* SECONDARY TEXT FRONTSIDE */}
        <motion.p
          style={{
            position: 'abolute',
            top: 0,
            width: '85vw',
            margin: width < 960 ? '-10vh auto 0 auto' : '0 auto',
            y: animations.secondaryTextYPos,
            rotateY: animations.secondaryTextRotateAnim,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            textAlign: 'center',
          }}
        >
          Now I strive to build <strong>functional</strong>, <strong>beautiful</strong> and <strong>intuitive</strong> web applications...
          </motion.p>

        {/* SECONDARY TEXT BACKSIDE */}
        <motion.p
          style={{
            position: 'absolute',
            top: 0,
            width: '85vw',
            margin: width < 960 ? '-10vh auto 0 auto' : '0 auto',
            y: animations.secondaryTextYPos,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            textAlign: 'center',
            rotateY: animations.secondaryTextRotateAnimBackside,
            opacity: animations.secondaryTextOpacity
          }}
        >
          ...and to never stop learning and growing! Keep scrolling to see some links
        </motion.p>
      </Grid>

      {/* =========================== */}
      {/* BOTTOM OF PAGE LINK OPTIONS */}
      {/* =========================== */}
      {/* PORTFOLIO */}
      <Grid container spacing={3} style={{ width: '85vw', position: 'fixed', margin: '0 7.5vw 0 7.5vw', top: '20vh' }}>
        <Grid item xs={12} sm={4}>
          <Box display='flex' style={{ width: '100%' }} justifyContent={width >= 600 ? 'flex-end' : 'center'} alignItems={width > 960 ? 'flex-start' : 'flex-end'}>
            <motion.a href="/portfolio" style={{ x: animations.portfolioLinkXPos, opacity: animations.linksOpacity, y:animations.linksYPos }}>
              <Button variant="contained">
                <strong>
                  SEE MY PORTFOLIO
                </strong>
              </Button>
            </motion.a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box display='flex' style={{ width: '100%' }} justifyContent={width >= 600 ? 'flex-start' : 'center'} alignItems={width > 960 ? 'center' : 'flex-start'}>
            <motion.p style={{ marginTop: width>960?'0':'-.67em', x: animations.portfolioDescXPos, opacity: animations.linksOpacity, y:animations.linksYPos }}>
              A COLLECTION OF PROJECTS AND SKILLS.
            </motion.p>
          </Box>
        </Grid>

        {/* CONTACT ME */}
        <Grid item xs={12} sm={4}>
          <Box display='flex' style={{ width: '100%' }} justifyContent={width >= 600 ? 'flex-end' : 'center'} alignItems={width > 960 ? 'flex-start' : 'flex-end'}>
            <motion.a href="/contact" style={{ x: animations.contactmeLinkXPos, opacity: animations.linksOpacity, y:animations.linksYPos }}>
              <Button variant="contained">
                <strong>
                  CONTACT ME
                </strong>
              </Button>
            </motion.a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box display='flex' style={{ width: '100%' }} justifyContent={width >= 600 ? 'flex-start' : 'center'} alignItems={width > 960 ? 'center' : 'flex-start'}>
            <motion.p style={{ marginTop: width>960?'0':'-.67em', x: animations.contactmeDescXPos, opacity: animations.linksOpacity, y:animations.linksYPos }}>
              EMAIL ME&nbsp;<a href="mailto:zgstowell@gmail.com">HERE</a>&nbsp;OR CLICK THE LINK FOR OPTIONS
            </motion.p>
          </Box>
        </Grid>

        {/* BLOG */}
        <Grid item xs={12} sm={4}>
          <Box display='flex' style={{ width: '100%' }} justifyContent={width >= 600 ? 'flex-end' : 'center'} alignItems={width > 960 ? 'flex-start' : 'flex-end'}>
            <motion.a href="/crudposting" style={{ x: animations.blogLinkXPos, opacity: animations.linksOpacity, y:animations.linksYPos }}>
              <Button variant="contained">
                <strong>
                  READ MY BLOG
              </strong>
              </Button>
            </motion.a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box display='flex' style={{ width: '100%' }} justifyContent={width >= 600 ? 'flex-start' : 'center'} alignItems={width > 960 ? 'center' : 'flex-start'}>
            <motion.p style={{ marginTop: width>960?'0':'-.67em', x: animations.blogDescXPos, opacity: animations.linksOpacity, y:animations.linksYPos }}>
              PROGRAMMING STORIES AND RANDOM MUSINGS...
            <br />
              <strong>Read the latest entry below &darr;&darr;</strong>
            </motion.p>
          </Box>
        </Grid>
      </Grid>

      {/* ============================== */}
      {/* EXTRA ANIMATED UTILITY OBJECTS */}
      {/* ============================== */}
      {/* LATEST BLOG POST */}
      <motion.div style={{position: 'fixed',y: animations.blogPostYPos, top: '7rem', maxHeight: '70vh', overflowY: 'scroll', overflowX: 'hidden' }}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={1} md={2}></Grid>
        <Grid item xs={10} md={8}>
          <div>
            {latestPost ? <PostCard post={latestPost} /> : <h4>Oh noes! There must've been a server error, and there's no blog post to show! Please <a href="mailto:zgstowell@gmail.com">Email Zac</a> with the issue!</h4>}
          </div>
        </Grid>
        <Grid item xs={1} md={2}>
        </Grid>
      </Grid>
      </motion.div>

      {/* DEV LANGUAGE ICON ARRAY */}
      <motion.div style={{
        display: 'flex',
        position: 'fixed',
        flexDirection: 'row-reverse',
        flexWrap: 'nowrap',
        top: '35%',
        x: animations.logoArrXPos,
        width: '300vw',
        justifyContent: 'space-between'
      }}>
        {logoArr.map(logo => {
          return (
            <img
              src={logo}
              alt="developer language logo icon"
              style={{
                height: '15vh',
              }}
              key={logo}
            />
          )
        })}

      </motion.div>

      {/* 'BACK TO TOP' BUTTON */}
      <motion.a style={{
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        y: animations.topButtonYPos,
        background: 'transparent',
        border: 'none',
        textDecoration: 'none'
      }} href="#aboutme-top">
        <Button
          variant="contained"
        >
          &uarr; back to top
      </Button>
      </motion.a>
    </div >
  )
}
