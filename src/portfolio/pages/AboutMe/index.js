import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PostCard from '../../../blog/components/PostCard';
import TypeText from '../../../blog/TypeText';
import useScrollPosition from '../../../hooks/ScrollPosition';
import useWindowDimensions from '../../../hooks/WindowDimensions';
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import headshot from '../../assets/images/headshotminSquare.png'
import facepic from '../../assets/images/facepicmin.jpg'
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // position: 'fixed',
    // top: 0,
    // left: 0,
    width: '100vw',
    minHeight: 10000
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  topSpacer: {
    height: '6rem'
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
    // top: 40,
    padding: '0 20vw 0 20vw'
    // left: '3vw'
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
  }

}));


export default function AboutMe(props) {
  const latestPost = props.latestPost;
  // const maxHeight = window.screen.height;

  // GET WINDOW DIMENSIONS
  const { width, height } = useWindowDimensions();



  const classes = useStyles(props);

  const [showState, setShowState] = useState({
    greeting: false,
    picture: false,
    intro: false
  })

  const [scrollState, setScrollState] = useState(`0% Scrolled`)
  const [isComplete, setIsComplete] = useState(false);

  const greetingRef = useRef(null)
  const picRef = useRef(null)
  const introRef = useRef(null)


  const { scrollYProgress, scrollY } = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 0.97], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  scrollYProgress.onChange(x => {
    setScrollState(`${Math.floor(x * 100)}% Scrolled`)
    setIsComplete(Math.floor(x * 100) >= 97)
  })

  // ANIMATION / SCROLL POSITION SETUP
  // =================================

  // X POSITION OF INTRO PIC ON SCROLL
  // const picXPosAnim = useTransform(scrollYProgress, [0, .18, .3, .4], ["-100vw", '0vw', "0vw", '100vw'])
  // const picOpacityAnim = useTransform(scrollYProgress, [0, .18, .3, .37], [0, 1, 1, 0])
  const picXPosAnim = useTransform(scrollYProgress, [0, .07, .18, .25], ["-100vw", '0vw', "0vw", '100vw'])
  const picOpacityAnim = useTransform(scrollYProgress, [0, .07, .18, .23], [0, 1, 1, 0])
  // X POSITION OF INTRO TEXT ON SCROLL
  // const introXPosAnim = useTransform(scrollYProgress, [0, .18, .3, .4], ['100vw', '0vw', '0vw', '-100vw'])
  const introXPosAnim = useTransform(scrollYProgress, [0, .07, .18, .25], ['100vw', '0vw', '0vw', '-100vw'])


  // MISSION STATEMENT SPECIFIC ANIMATION
  // const missionStatementXPos = useTransform(scrollYProgress, [0, .18, .3, .5], ['100vw', '0vw', '0vw', '0vw'])
  const missionStatementXPos = useTransform(scrollYProgress, [0, .07, .18, .5], ['100vw', '0vw', '0vw', '0vw'])
  const missionStatmentFontSize = useTransform(scrollYProgress, [0, .18, .5], ['1.2em', '1.2em', '1.9em'])
  const missionnStatementYPos = useTransform(scrollYProgress, [0, .4, .5, .6, .7], ['0vh', '0vh', '-20vh', '-60vh', '-100vh'])
  // const missionStatementOpacity = useTransform(scrollYProgress, [0, .18, .5, .6, .7], [0, 1, 1, .8, 0])
  const missionStatementOpacity = useTransform(scrollYProgress, [0, .07, .5, .6, .7], [0, 1, 1, .8, 0])

  // AFTER MISSION STATEMENT (SECONDARY) TEXT
  const secondaryTextYPos = useTransform(scrollYProgress, [0, .55, .6], ['200vh', '100vh', '-25vh'])
  const secondaryTextRotateAnim = useTransform(scrollYProgress, [0, .65, .8], ['0deg', '0deg', '180deg'])
  const secondaryTextOpacity = useTransform(scrollYProgress, [0, .78, .83], [1, 1, 0])
  const secondaryTextRotateAnimBackside = useTransform(scrollYProgress, [0, .65, .8], ['-180deg', '-180deg', '0deg'])

  // TOP LINK BUTTON
  const topButtonYPos = useTransform(scrollYProgress, [0, 0.04, 0.09],['20vh', '100vh', '0vh'])

  return (
    <div className={"AboutMe " + classes.root}>
      <div className={classes.topSpacer} id="aboutme-top" />
      {/* SIMPLE GREETING */}
      <span style={{ position: 'fixed', top: '1rem', right: '1rem' }}>
        {scrollState}
      </span>

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


      <Grid container direction="column" justify="center">
        <motion.h1
          // className={classes.aboutMeGreeting}
          style={{ margin: '0 auto' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          ref={greetingRef}
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
      {/* PIC AND INTRO CONTENT */}
      {/* ===================== */}
      <Grid container justify='center' className={classes.picIntroWrapper} style={{ top: width < 960 ? 10 : '30vh' }}>

        {/* PIC IN FROM LEFT SIDE */}
        <Grid item md={6} className={classes.picWrapper}>
          <motion.img
            style={{
              marginBottom: '-2rem',
              x: picXPosAnim,
              opacity: picOpacityAnim
            }}
            ref={picRef}
            className={classes.aboutMePic}
            src={headshot}
          />
        </Grid>

        {/* SHORT INTRO IN FROM RIGHT WITH PIC */}
        <Grid item md={6} className="aboutme-intro-wrapper" ref={introRef}>
          <motion.div
            style={{
              // margin: '0 7vh -.67em 7vh',
              marginBottom: '-.67em',
              x: introXPosAnim,
              opacity: picOpacityAnim,
              fontSize: '1.2em'
            }}
          >
            <h3 className="aboutme-intro">I'm Zac!</h3>
            <p className="aboutme-intro">
              I've loved coding since I built my first websites at the public library in the mid-90's. I had a collection of GeoCities sites about dragons, or martial arts, or some combination thereof... My life went in many directions since then, but the draw to web and application development has always been a constant.
            </p>
          </motion.div>
          <motion.p style={{
            y: missionnStatementYPos,
            x: missionStatementXPos,
            fontSize: missionStatmentFontSize,
            width: '85vw',
            opacity: missionStatementOpacity,
            margin: '0 auto',
            // textAlign: 'center',
            // textJustify:'inter-word'
          }}
            className={classes.missionStatement}
          >
            So, I reinvented myself as a <strong><em>Full-Stack Web Developer</em></strong>.
            </motion.p>
        </Grid>
      </Grid>

      <Grid container justify="center" className={classes.secondaryText}>
        <motion.p
          style={{
            position: 'abolute',
            top: 0,
            width: '85vw',
            // margin:'0 auto',
            y: secondaryTextYPos,
            rotateY: secondaryTextRotateAnim,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility:'hidden',
            textAlign: 'center',

            // textJustify:'inter-word'
            // opacity: secondaryTextOpacity
          }}
        >
          Now I build <strong>functional</strong>, <strong>beautiful</strong> and <strong>intuitive</strong> web application while constantly learning and growing.
          </motion.p>
        <motion.p
          style={{
            position: 'absolute',
            top: 0,
            width: '85vw',
            margin: '0 auto',
            y: secondaryTextYPos,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility:'hidden',
            textAlign: 'center',
            // textJustify:'inter-word',
            rotateY: secondaryTextRotateAnimBackside,
            opacity: secondaryTextOpacity
          }}
        >
          here's a bunch more text on the other side of the div... now it's visible!
          </motion.p>
      </Grid>
      {/* <Grid container style={{ height: 3000 }}>

      </Grid> */}
      {/* LATEST BLOG POST */}
      <Grid container justify="center">
        <Grid item xs={false} md={2}></Grid>
        <Grid item xs={11} md={8}>
          <motion.div style={{
            width: '100%',
            position: 'fixed',
            y: '100vh'
          }}>
            {latestPost ? <PostCard post={latestPost} /> : <h4>Oh noes! There must've been a server error, and there's no blog post to show! Please <a href="mailto:zgstowell@gmail.com">Email Zac</a> right away!</h4>}
          </motion.div>
        </Grid>
        <Grid item xs={false} md={2}>
        </Grid>
      </Grid>
      <a href="#aboutme-top">
        <motion.button
          style={{ 
            position: 'fixed', 
            bottom: '1rem', 
            left: '1rem', 
            y:topButtonYPos, 
            background:'transparent', 
            border: 'none' 
          }}
        >
          &uarr; back to top
      </motion.button>
      </a>
    </div >
  )
}
