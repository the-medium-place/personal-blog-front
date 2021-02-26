import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PostCard from '../../../blog/components/PostCard';
import TypeText from '../../../blog/TypeText';


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
  console.log(latestPost)
  const classes = useStyles(props);

  return (
    <div className={"AboutMe" + classes.root}>
      <div className={classes.topSpacer}>

      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>

          <div className="aboutme-top">
            <h1>All About Zac</h1>
            <TypeText />
          </div>

        </Grid>
        {/* <Grid item xs={'auto'}></Grid> */}
        <Grid item xs={9}>
          <div className={classes.blogWrapper}>
            {latestPost ? <PostCard post={latestPost} /> : null}
          </div>
        </Grid>
        <Grid item xs={'auto'}>
          <h3>check out the latest post from my blog CRUDposting!</h3>

        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div >
  )
}
