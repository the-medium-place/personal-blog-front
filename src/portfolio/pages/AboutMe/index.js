import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PostCard from '../../../blog/components/PostCard';
import TypeText from '../../../blog/TypeText';
import useScrollPosition from '../../../hooks/ScrollPosition';
import headshot from '../../assets/images/headshot.jpg'

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

  // console.log(greetingRef, picRef, introRef);
  useLayoutEffect(() => {

    const topPos = element => element.getBoundingClientRect().top;

    const greetingTop = topPos(greetingRef.current),
      picTop = topPos(picRef.current),
      introTop = topPos(introRef.current);

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      // if (greetingTop < scrollPosition) {
      //   console.log('greeting');
      // }
      if (picRef.current.getBoundingClientRect().bottom < scrollPosition) {
        picRef.current.style.transform = 'translateX(0vw)';
      }
      if (introTop < scrollPosition) {
        introRef.current.style.transform = 'translateX(0vw) translateY(0vh)'
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, []);

  return (
    <div className={"AboutMe" + classes.root}>
      <div className={classes.topSpacer}></div>

      {/* SIMPLE GREETING */}
      <Grid container spacing={1} justify="center">
        <h1 className="fade-in aboutme-greeting" ref={greetingRef}>GREETINGS.</h1>
      </Grid>

      {/* PIC IN FROM RIGHT SIDE */}
        <div className="aboutme-picture-wrapper" style={{ margin: '3rem auto' }}>
          <img ref={picRef} className="aboutme-picture" style={{ marginTop: '15vh' }} src={headshot} />
        </div>

      {/* SHORT INTRO IN FROM LEFT WITH PIC */}
        <div className="aboutme-intro-wrapper" style={{ marginTop: '80vh' }} ref={introRef}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta quam iaculis justo rhoncus convallis. Sed hendrerit sapien sed ante vulputate, quis commodo ante malesuada. Vestibulum eget sodales nulla. Donec non ante sed erat porttitor condimentum. Ut rhoncus tortor quis feugiat pretium. In eu massa dolor. Donec felis augue, pharetra et varius vitae, maximus eu massa.

            Maecenas placerat orci non urna lobortis porta. Aenean egestas elit non enim consequat imperdiet. Pellentesque vitae ex quis quam vestibulum semper tincidunt sit amet justo. Maecenas et leo justo. Proin suscipit orci ex, non faucibus dolor pulvinar a. Fusce interdum nec velit nec ultrices. Sed ante nunc, tincidunt non elementum at, feugiat in dolor. Quisque libero diam, scelerisque quis urna eu, tincidunt imperdiet metus. Donec sit amet feugiat massa. Aliquam erat volutpat. Integer ut porta lacus, vel luctus est. Nullam non nisl commodo, lacinia felis vitae, volutpat ligula.
          </p>
        </div>


      {/* LATEST BLOG POST */}
      <Grid container spacing={1} style={{ marginTop: '80vh' }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <div style={{ width: '100%' }}>
            {latestPost ? <PostCard post={latestPost} /> : null}
          </div>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div >
  )
}
