import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import WebTwoToneIcon from '@material-ui/icons/WebTwoTone';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ScrollTrigger from 'react-scroll-trigger';

const useStyles = makeStyles((theme) => ({
    projectCardWrapper: {
        // transform: 'translateX(-100vw)'
    },
    root: {
        // height: 'auto',
        // marginBottom: '10vh',
        height: '100%',
    },
    paper: {
        color: theme.palette.text.main,
    },
    heading: {
        fontSize: '1.2rem',
        fontWeight: theme.typography.fontWeightBold,

    },
    padContent: {
        padding: theme.spacing(3)
    },
    accordion: {
        background: theme.palette.secondary.light,
    },
    linkBtn: {
        background: theme.palette.secondary.dark,
        color: theme.palette.text.secondary,
        textAlign: 'center',
        // '& a': {
        //     color: 'white',
        //     '&:hover': {
        //         color: 'red'
        //     }
        // },
        // alignContent: 'center'
    },
    projectImg: {
        // clipPath: 'ellipse(350px 240px at 15% 6%)',
        width: '100%',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
    },
    cardTitleText: {
        position: 'absolute',
        bottom: '20%',
        // left: 'center',
        maxWidth: '100%',
        color: 'rgb(201, 201, 201)',
        background: 'rgba(20, 20, 20, 0.6)',
        padding: '0.5rem',
        fontSize: 20,
        fontWeight: 'bold',
        '& small': {
            fontSize: '0.7em',
        }
    }

}));

export default function PortfolioCard({ project }) {

    const minWidth1000 = useMediaQuery('(min-width:1000px)');

    // console.log(minWidth1000)
    // console.log(project)
    const { github, deployed, description, title, screenshot, technologies, tagline } = project;
    const classes = useStyles();





    return (
        <ScrollTrigger
            component="div"
            className={classes.projectCardWrapper}
            style={{ height: 500 }}
            onEnter={()=>{
                console.log('in view with #'+project.id)
                // classes.projectCardWrapper.transform = 'translateX(0)'
            }}
        >
            <Grid container justify="center" className={classes.root}>
                <Grid item xs={11} className="flip-card" >
                    <div className={classes.paper + " flip-card-inner"}>
                        <Grid container justify="center" className="flip-card-front">
                            <Grid item xs={12} style={{ width: '100%' }}>
                                <img className={classes.projectImg} src={screenshot} alt={title} style={{ width: '100%' }} />
                                <div style={{ width: '100%' }}>

                                    <p className={classes.cardTitleText}>
                                        {title}<br />
                                        <small>{tagline}</small>
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                        <div className="flip-card-back">
                            <Grid container style={{ overflow: 'auto', height: 400 }}>
                                <Grid item xs={12} spacing={3}>
                                    <p>{description}</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <h4>{technologies}</h4>
                                </Grid>
                                <Grid item xs={12}>
                                    <ButtonGroup size="small" aria-label="outlined primary button group" style={{ position: 'absolute', bottom: '5%' }}>
                                        <Button
                                            startIcon={<WebTwoToneIcon />}
                                            href={deployed}
                                            variant="contained"
                                            className={classes.linkBtn}
                                        >
                                            Live App
                                    </Button>
                                        <Button
                                            startIcon={<AccountTreeTwoToneIcon />}
                                            href={github}
                                            variant="contained"
                                            className={classes.linkBtn}
                                        >
                                            Git Repo
                                    </Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </ScrollTrigger>
    )
}
