import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PostCard from '../../../blog/components/PostCard';
import TypeText from '../../../blog/TypeText';
import useScrollPosition from '../../../hooks/ScrollPosition';
// import { motion } from 'framer-motion';
import { motion, useViewportScroll, useTransform } from "framer-motion"

import headshot from '../../assets/images/headshotminSquare.png'
import facepic from '../../assets/images/facepicmin.jpg'
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%'
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

  scrollYProgress.onChange(x => {
    console.log(x)
  })
  // X position of intro pic during scroll
  const picXPosAnim = useTransform(scrollYProgress, [0, .22], [-100, 0])
  const picOpacityAnim = useTransform(scrollYProgress, [0, .22], [0, 1])
  // X potiion of intro text during scroll
  const introXPosAnim = useTransform(scrollYProgress, [0, .20], [100, 0])


  // useScrollPosition(({ currPos, prevPos }) => {
  //   // console.log(scrollYProgress)
  //   // CAPTURE SCROLL DIRECTION
  //   const scrollingUp = currPos.y > prevPos.y;
  //   const scrollingDown = currPos.y < prevPos.y;
  //   // GET TOP AND BOTTOM POSITIONS OF EACH ANIMATED ELEMENT
  //   const greetingTop = topPos(greetingRef.current),
  //     picTop = topPos(picRef.current),
  //     introTop = topPos(introRef.current),
  //     greetingBottom = bottomPos(greetingRef.current),
  //     picBottom = bottomPos(picRef.current),
  //     introBottom = bottomPos(introRef.current);

  //   // MOVE INTRO TEXT/PIC IN ON SCROLL DOWN
  //   if (scrollingDown && yPosCounter > 0 && opacityCounter < 1) {
  //     yPosCounter--
  //     opacityCounter += 0.007;
  //   }
  //   // MOVE INTRO TEXT/PIC OUT ON SCROLL UP
  //   if (scrollingUp && yPosCounter < 100 && opacityCounter > 0) {
  //     yPosCounter++
  //     opacityCounter -= 0.02;
  //   }
  //   // ENSURE TEXT/PIC STAYS VISIBLE AT HOME POSITION
  //   // AND STAY IN PLACE WHILE SCROLLING UP 
  //   // UNTIL READY TO SCROLL
  //   if (yPosCounter === 0) {
  //     opacityCounter = 1;
  //   }
  //   if (picBottom < 1000) {
  //     yPosCounter = 0;
  //     opacityCounter = 1;
  //   }
  //   // APPLY INTRO TEXT ANIMATION STYLES
  //   introRef.current.style.transform = `translateX(${yPosCounter}vw)`
  //   introRef.current.style.opacity = opacityCounter;
  //   picRef.current.style.transform = `translateX(${-yPosCounter}vw)`
  //   picRef.current.style.opacity = opacityCounter;
  //   // console.log(yPosCounter, currPos.y)
  //   // console.log(picTop, picBottom)
  //   // console.log('up: ', JSON.stringify(scrollingUp))
  //   // console.log('down: ', JSON.stringify(scrollingDown))
  // }, [])
  // const topPos = element => element.getBoundingClientRect().top;
  // const bottomPos = element => element.getBoundingClientRect().bottom;
  // function setElementOpacity(element) {
  //   element.style.opacity = 0;
  // }

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
      <Grid container spacing={1} justify="center">
        <motion.h1 className={classes.aboutMeGreeting} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} ref={greetingRef}>GREETINGS.</motion.h1>
      </Grid>
      {/* PIC AND INTRO CONTENT */}
      {/* ===================== */}
      <Grid container justify='center' className="aboutme-pic-intro-wrapper">

        {/* PIC IN FROM LEFT SIDE */}
        <Grid item md={6} className={classes.picWrapper}>
          <motion.img style={{ x: picXPosAnim, opacity: picOpacityAnim }} ref={picRef} className={classes.aboutMePic} src={headshot} />
        </Grid>

        {/* SHORT INTRO IN FROM RIGHT WITH PIC */}
        <Grid item md={6} className="aboutme-intro-wrapper" ref={introRef}>
          <motion.div style={{ x: introXPosAnim, opacity: picOpacityAnim }}>
            <h3 className="aboutme-intro">I'm Zac!</h3>
            <p className="aboutme-intro">
              I've loved coding since I built my first website at the public library in the mid-90's. It was all about Bruce Lee. I didn't know anything about Bruce Lee, but He was the coolest thing I could think of.  My life went in many directions since then, but the draw to web and application development was constant.
            </p>
            <p className="aboutme-intro">
              So, I have reinvented myself as a <em>Full-Stack Web Developer</em>. With training from the UW Coding Bootcamp
            </p>
          </motion.div>
        </Grid>
      </Grid>


      {/* LATEST BLOG POST */}
      <Grid container spacing={1} style={{ marginTop: '80vh' }}>
        <Grid item xs={false} md={2}></Grid>
        <Grid item xs={11} md={8}>
          <div style={{ width: '100%' }}>
            {latestPost ? <PostCard post={latestPost} /> : <h4>Oh noes! There must've been a server error, and there's no blog post to show! Please <a href="mailto:zgstowell@gmail.com">Email Zac</a> right away!</h4>}
          </div>
        </Grid>
        <Grid item xs={false} md={2}>
        </Grid>
      </Grid>
    </div >
  )
}
