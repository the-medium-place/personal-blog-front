import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import WebTwoToneIcon from '@material-ui/icons/WebTwoTone';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        // marginBottom: '10vh',
        height: 380,
        // overflow: 'auto'
        // transition: '0.3s',
        // flexGrow: 1,
        // '&:hover': {
        // transform: 'translateY(-3px)',
        // boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
        // filter: 'drop-shadow(0 4px 20px 0 rgba(0,0,0,0.12)'
        // },
    },
    paper: {
        // padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.main,
        // height: 'auto'
        // marginBottom: theme.spacing(3),
        // background: theme.palette.primary.main
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
        '& a': {
            color: 'white',
            '&:hover': {
                color: 'red'
            }
        },
        // alignContent: 'center'
    }
}));

export default function PortfolioCard({ project }) {

    const minWidth1000 = useMediaQuery('(min-width:1000px)');

    console.log(minWidth1000)
    console.log(project)
    const { github, deployed, description, title, screenshot, technologies, tagline } = project;
    const classes = useStyles();





    return (
        <Grid container justify="center" className={classes.root}>
            {/* <Grid item xs={11}>
                <Paper square className={classes.paper} style={{ height: 'auto' }} elevation={3}>
                    <Grid container>
                        <Grid item xs={12}>
                            <img src={screenshot} alt="kitten" style={{ maxWidth: '100%' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion className={classes.accordion}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>{title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {description}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Grid style={{ padding: '.6rem', fontWeight: 'bold' }} item xs={12}>
                                {technologies}
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <ButtonGroup fullWidth size="small" color="secondary-dark" aria-label="outlined primary button group">
                                <Button
                                startIcon={<WebTwoToneIcon/>}
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

                </Paper>
            </Grid> */}
            <Grid item xs={11} className="flip-card" >
                <div className={classes.paper + " flip-card-inner"}>
                    <Grid container justify="center" className="flip-card-front">
                        <Grid item xs={12} style={{ height: 'auto' }}>
                            <img src={screenshot} alt={title} style={{ width: '100%' }} />
                        </Grid>
                        {/* <Grid item xs={12}> */}
                        {/* <Accordion className={classes.accordion}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>{title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {description}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion> */}
                        <Grid style={{ fontWeight: 'bold' }} item xs={10}>
                            <h2 style={{ marginTop: '-7rem' }}>
                                {title}<br />
                                <small>{tagline}</small>
                            </h2>
                        </Grid>
                        {/* </Grid> */}
                    </Grid>
                    <div className="flip-card-back">
                        <Grid container>
                            <Grid item xs={12} spacing={3} style={{ overflow: 'auto', height: 200 }}>
                                <p>{description}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <h4>{technologies}</h4>
                            </Grid>
                            <Grid item xs={12}>
                                <ButtonGroup fullWidth size="small" color="secondary-dark" aria-label="outlined primary button group">
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


        // <Card className={'MuiPostCard--01'}>
        //     <CardMedia
        //         className={'MuiCardMedia-root'}
        //         image={
        //             'http://placekitten.com/300/300' // SCREENSHOT
        //         }
        //     >
        //         <div className={'MuiTag--ribbon'}>
        //             <Typography color={'inherit'} className={'MuiTypography-root'}>
        //                 Norway
        //             </Typography>
        //         </div>
        //         {/* <Avatar
        //             className={'MuiAvatar-root'}
        //             src={'http://i.pravatar.cc/300?img=5'}
        //         /> */}
        //     </CardMedia>
        //     <CardContent className={'MuiCardContent-root'}>
        //         <Typography
        //             className={'MuiTypography--heading'}
        //             variant={'h6'}
        //             gutterBottom
        //         >
        //             First Snow Storm {/* PROJECT TITLE */}
        //         </Typography>
        //         <Typography className={'MuiTypography--subheading'} variant={'caption'}>
        //             Snow storm coming in Sommaroy island, Arctic Norway. This is something
        //             that you definitely wanna see in your life. {/* PROJECT DESCRIPTION */}
        //         </Typography>
        //     </CardContent>
        //     <CardActions className={'MuiCardActions-root'}>
        //         <Typography variant={'caption'}>
        //             <Link block href={'javascript:;'} underline={'none'}>
        //                 March 8, 2016
        //             </Link>
        //         </Typography>
        //         <div>
        //             <IconButton>
        //                 <Icon>share</Icon>
        //             </IconButton>
        //             <IconButton>
        //                 <Icon>favorite_border_rounded</Icon>
        //             </IconButton>
        //         </div>
        //     </CardActions>
        // </Card>

    )
}
