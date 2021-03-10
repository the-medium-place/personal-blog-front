import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ParallaxSlide from './ParallaxSlide';
import projects from '../../pages/Portfolio/projects';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import WebTwoToneIcon from '@material-ui/icons/WebTwoTone';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';


import cx from 'clsx'
import './style.css';

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
    root: {
        fontSize: 48,
        fontWeight: 900,
        height: '25vh'
        // paddingTop: spacing(5)
        // filter: 'drop-shadow(0 1.4rem 1.2rem rgba(20, 20, 20, 0.4))'
    },
    box: {
        display: 'block',
    },
    descriptionText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        margin: '0 auto',
        width: '90%',
        background: 'rgba(20, 20, 20, 0.6)',
        color: 'rgb(201, 201, 201)',
        padding: '1rem',
    },
    carouselImage: {
        maxWidth: '60%',
        transform: 'rotateY(45deg) translateX(3rem)',
        marginBottom: '20vh',
        maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))'
    },
    titleText: {
        position: 'absolute',
        transform: 'rotateY(45deg) translateX(5rem)',
        top: '25%',
        left: '36%',
        fontSize: '1.6rem',
        width: '50%',
        zIndex: 5,
        padding: '.2rem .8rem .2rem .8rem',
        color: 'rgb(201, 201, 201)',
        background: 'linear-gradient(to bottom, rgba(20, 20, 20, 0.8), rgba(20, 20, 20, 0.4))',
        '&:hover': {
            transform: 'rotateY(0)'
        }
    },
    slide: {
        perspective: 1000, // create perspective
        overflow: 'hidden',
        // relative is a must if you want to create overlapping layers in children
        position: 'relative',
        paddingTop: spacing(8),
        paddingLeft: spacing(3),
        [breakpoints.up('sm')]: {
            paddingTop: spacing(10),
        },
        [breakpoints.up('md')]: {
            paddingTop: spacing(14),
        },
    },
    arrow: {
        display: 'none',
        position: 'absolute',
        top: '50%',
        borderRadius: '50%',
        aspectRatio: '1/1',
        // transform: 'translateY(-50%)',
        [breakpoints.up('sm')]: {
            display: 'inline-flex',
        },
    },
    arrowLeft: {
        left: -20,
        [breakpoints.up('lg')]: {
            left: -64,
        },
    },
    arrowRight: {
        right: -20,
        [breakpoints.up('lg')]: {
            right: -64,
        },
    },
    linkBtn: {
        width: '50%',
        // margin: '0 auto',
        background: palette.secondary.dark,
        color: palette.text.secondary,
        textAlign: 'center',
        '& a': {
            color: 'white',
            '&:hover': {
                color: 'red'
            }
        },
        '&:hover': {
            color: palette.text.primary
        }
        // alignContent: 'center'
    },
    buttonGroup: {
        width: '100%',
        margin: '0 auto'
    }
}));




const ProjectCarousel = () => {

    const data = projects;
    const classes = useStyles();


    const renderElements = ({ index, onChangeIndex }) => (
        <>
            <Button
                variant="contained"
                color="secondary"
                className={cx(classes.arrow, classes.arrowLeft)}
                direction={'left'}
                disabled={index === 0}
                onClick={() => onChangeIndex(index - 1)}
            >&larr;</Button>
            <Button
                variant="contained"
                color="secondary"
                className={cx(classes.arrow, classes.arrowRight)}
                direction={'right'}
                disabled={index === data.length - 1}
                onClick={() => onChangeIndex(index + 1)}
            >&rarr;</Button>
        </>
    );


    return (
        <Box className={classes.box} width={'100%'}>
            <ParallaxSlide renderElements={renderElements}>
                {({ injectStyle }) =>
                    data.map((project, i) => (
                        <Box key={i} className={classes.slide} >
                            <div style={injectStyle(i, 60)} className={classes.titleText}>
                                <h2>{project.title}</h2>
                                <p style={injectStyle(i, 20)}>{project.tagline}</p>
                            </div>
                            {/* <Typography
                                noWrap
                                align={'center'}
                                className={classes.root}
                                style={injectStyle(i, 80)}
                                >
                                {project.title}
                            </Typography> */}

                            <img className={classes.carouselImage} src={project.screenshot} style={injectStyle(i, 40)} />
                            <div className={classes.descriptionText}>

                                <Typography
                                    align="center"
                                    // className={classes.descriptionText}
                                    style={injectStyle(i, 10)}
                                >
                                    {project.description}
                                    {/* <br /><br /> */}
                                </Typography>
                                <br />

                                    <ButtonGroup
                                        // fullWidth
                                        size="small"
                                        color="secondary-dark"
                                        aria-label="outlined primary button group"
                                        >
                                            <div className={classes.buttonGroup}>

                                        <Button
                                            startIcon={<WebTwoToneIcon />}
                                            href={project.deployed}
                                            variant="contained"
                                            className={classes.linkBtn}
                                            >
                                            Live App
                                        </Button>
                                        <Button
                                            startIcon={<AccountTreeTwoToneIcon />}
                                            href={project.github}
                                            variant="contained"
                                            className={classes.linkBtn}
                                            >
                                            Git Repo
                                        </Button>
                                            </div>
                                    </ButtonGroup>
                                <br />
                                <Typography
                                    align="center"
                                    style={injectStyle(i, 10)}
                                >
                                    <strong>
                                        {project.technologies}
                                    </strong>
                                </Typography>
                            </div>
                        </Box>
                    ))
                }
            </ParallaxSlide>
        </Box>
    );
};

export default ProjectCarousel;