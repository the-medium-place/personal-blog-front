import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PostCard from '../../../blog/components/PostCard';
import TypeText from '../../../blog/TypeText';
import useScrollPosition from '../../../hooks/ScrollPosition';
// import { motion } from 'framer-motion';
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion"

import headshot from '../../assets/images/headshotminSquare.png'
import facepic from '../../assets/images/facepicmin.jpg'
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: 4000
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
  aboutMeGreeting: {
    marginBottom: '60vh'
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
    top: 40,
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
  }

}));


export default function AboutMe(props) {
  const latestPost = props.latestPost;
  // const maxHeight = window.screen.height;
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

  // let yPosCounter = 100;
  // let opacityCounter = 0;

  // useEffect(() => {
  //   introRef.current.style.transform = `translateX(100vw)`
  //   introRef.current)
  //   picRef.current.style.transform = `translateX(-100vw)`
  // }, [])
  const { scrollYProgress, scrollY } = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 0.97], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  scrollYProgress.onChange(x => {
    setScrollState(`${Math.floor(x * 100)}% Scrolled`)
    // Math.floor(x * 100) >= 97 ? setIsComplete(true) : setIsComplete(false);
    setIsComplete(Math.floor(x*100) >= 97)
  })

  // X POSITION OF INTRO PIC ON SCROLL
  const picXPosAnim = useTransform(scrollYProgress, [0, .18, .3, .4], ["-100vw", '0vw', "0vw", '100vw'])
  const picOpacityAnim = useTransform(scrollYProgress, [0, .18, .3, .37], [0, 1, 1, 0])

  // X POSITION OF INTRO TEXT ON SCROLL
  const introXPosAnim = useTransform(scrollYProgress, [0, .18, .3, .4], ['100vw', '0vw', '0vw', '-100vw'])

  // MISSION STATEMENT SPECIFIC ANIMATION
  const missionStatementXPos = useTransform(scrollYProgress, [0, .18, .3, .5], ['100vw', '0vw', '0vw', '-15vw'])
  const missionStatmentFontSize = useTransform(scrollYProgress, [0, .3, .5], ['1em', '1em', '2.4em'])
  const missionStatementWidth = useTransform(scrollYProgress, [0, .3, .5], ['100%', '100%', '200%'])
  const missionnStatementYPos = useTransform(scrollYProgress, [0, .4, .5, .6, .7], ['0vh', '0vh', '-20vh', '-60vh', '-100vh'])
  const missionStatementOpacity = useTransform(scrollYProgress, [0, .5, .6, .7], [1, 1, .8, 0])

  return (
    <div className={"AboutMe" + classes.root}>

      {/* <motion.div
      style={{
        position: 'fixed', 
        y:yPosAnim, 
        top: '1rem', 
        left:'1rem'
      }}
        initial={{
          position: 'fixed',
          left: '1rem',
          top: '1rem',
          y: 0,
          color: '#bada55',
          textShadow: '5px 5px 0.1rem black'
        }}
        animate={{
          textShadow: '60px 60px 2.5rem black',
          // x: 0,
          // y: 200,
          y: yPosAnim,
          // backgroundColor: "#000",
          // boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          position: "fixed",
          left: '1rem',
          top: '1rem',
          fontSize: '36px',
          color: '#fff'
          // transitionEnd: {
          //   display: "none",
          // },
        }}
        transition={{ repeatType: 'mirror', repeat: Infinity, duration: 2 }}
      >
        <h1><strong>test</strong></h1>
      </motion.div> */}
      <div className={classes.topSpacer}></div>
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


      <Grid container justify="center">
        <motion.h1
          className={classes.aboutMeGreeting}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          ref={greetingRef}
        >
          GREETINGS.
        </motion.h1>
      </Grid>
      {/* PIC AND INTRO CONTENT */}
      {/* ===================== */}
      <Grid container justify='center' className={classes.picIntroWrapper}>

        {/* PIC IN FROM LEFT SIDE */}
        <Grid item md={6} className={classes.picWrapper}>
          <motion.img
            style={{ x: picXPosAnim, opacity: picOpacityAnim }}
            ref={picRef}
            className={classes.aboutMePic}
            src={headshot}
          />
        </Grid>

        {/* SHORT INTRO IN FROM RIGHT WITH PIC */}
        <Grid item md={6} className="aboutme-intro-wrapper" ref={introRef}>
          <motion.div
            style={{
              x: introXPosAnim,
              opacity: picOpacityAnim
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
            width: missionStatementWidth,
            opacity: missionStatementOpacity
          }}
            className={classes.missionStatement}
          >
            So, I reinvented myself as a <br /><strong><em>Full-Stack Web Developer</em></strong>.
            </motion.p>
        </Grid>
      </Grid>

      <Grid container style={{ height: 3000 }}>

      </Grid>
      {/* LATEST BLOG POST */}
      {/* <Grid container spacing={1} style={{ marginTop: '80vh' }}>
        <Grid item xs={false} md={2}></Grid>
        <Grid item xs={11} md={8}>
          <div style={{ width: '100%' }}>
            {latestPost ? <PostCard post={latestPost} /> : <h4>Oh noes! There must've been a server error, and there's no blog post to show! Please <a href="mailto:zgstowell@gmail.com">Email Zac</a> right away!</h4>}
          </div>
        </Grid>
        <Grid item xs={false} md={2}>
        </Grid>
      </Grid> */}
    </div >
  )
}
