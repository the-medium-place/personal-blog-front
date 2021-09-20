import React, { useRef, useState } from 'react'
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion"
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import WebTwoToneIcon from '@material-ui/icons/WebTwoTone';
import './style.css';

import logocss from '../../assets/images/devlogos/logocss.png';
import logohtml from '../../assets/images/devlogos/logohtml.png';
import logojavascript from '../../assets/images/devlogos/logojavascript.png';
import logomongodb from '../../assets/images/devlogos/logomongodb.png';
import logomongoose from '../../assets/images/devlogos/logomongoose.png';
import logomysql from '../../assets/images/devlogos/logomysql.png';
import logonode from '../../assets/images/devlogos/logonode.png';
import logoreact from '../../assets/images/devlogos/logoreact.png';
import logosequelize from '../../assets/images/devlogos/logosequelize.png';
import logoGraphQL from '../../assets/images/devlogos/logoGraphQL.png';
import logoBootstrap from '../../assets/images/devlogos/logoBootstrap.png';

import { Card, CardContent, CardHeader, CardMedia, Chip, Box, Avatar } from '@material-ui/core';

const CssPortCard = withStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0 auto',
        height: 'auto',
        '& .MuiCardHeader-root': {
        },
        '& .MuiCardContent-root': {
        },
        '& .proj-desc': {
            height: 250,
            overflowY: 'auto',
            background: 'salmon',
            position: 'absolute',
            top: 0,
            padding: theme.spacing(1),
        },
        '& .MuiChip-root': {
            margin: theme.spacing(0.5)
        },
        '& .MuiCardMedia-root': {
            height: 250,
            backgroundSize: '100% 100%',
        }
    },
}))(Card)

const usePortfolioStyles = makeStyles((theme) => ({

    root: {
        display: 'block',
        position: 'relative'
        // height: 500
        // perspective: 1000,
        // '&:hover': {
        //     transform: 'rotateY(180deg)'
        // }
    },
    // portContentWrapper: {
    //     width: '100%',
    //     overflowX: 'hidden',
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     flexDirection: 'row',
    //     position: 'relative',
    //     transition: 'all 0.8s ease-in-out',
    //     transform: 'rotateY(180deg)',
    //     transformStyle: 'preserve-3d'
    // },
    // portPic: {
    //     width: '100%',
    // }
}))

export default function PortfolioCard({ project }) {
    console.log(project)

    const classes = usePortfolioStyles();

    const portCardFront = useRef(null);
    const portCardBack = useRef(null);

    const [hoverState, setHoverState] = useState(false)

    function handleHoverStart(event) {
        console.log('hovered')
        // console.log(event)
        setHoverState(true)
        // portCardBack.current.style.transform = 'translateX(0)';

    }

    function handleHoverEnd(e) {
        console.log('stopped hover')
        setHoverState(false)
        // portCardBack.current.style.transform = 'translateX(100%)';

    }

    function fetchAvatar(tech) {
        switch (tech) {
            case 'HTML5':
                return logohtml;
            case 'CSS3':
                return logocss;
            case 'Node.js':
                return logonode;
            case 'MySQL':
                return logomysql;
            case 'Sequelize':
                return logosequelize;
            case 'MongoDB':
                return logomongodb;
            case 'Mongoose':
                return logomongoose;
            case 'React JS':
                return logoreact;
            case 'GraphQL':
                return logoGraphQL;
            case 'Bootstrap':
                return logoBootstrap;
            default:
                return tech[0];
        }
    }

    return (
        <Grid item xs={12} md={6} lg={4} style={{ position: 'relative', overflow: 'hidden' }}>
            <CssPortCard
                raised={hoverState}
                onMouseOver={handleHoverStart}
                onMouseLeave={handleHoverEnd}
                className={classes.root}
            >

                <CardMedia
                    image={project.screenshot}

                // component='img'
                />
                <CardContent >
                    <CardHeader
                        title={project.title}
                        subheader={project.tagline}
                        titleTypographyProps
                        subheaderTypographyProps={{ color: '' }}
                    />
                    <Box marginBottom="15px" display="flex" justifyContent="flex-start" flexWrap="wrap">
                        {project.technologies.map(tech => {
                            return (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    avatar={<Avatar alt={tech} src={fetchAvatar(tech)} />}
                                />
                            )
                        })}
                    </Box>
                    <hr />
                    <ButtonGroup size="small" aria-label="outlined primary button group">
                        <Button
                            startIcon={<WebTwoToneIcon />}
                            href={project.deployed}
                            target="_blank"
                            variant="contained"
                            className={classes.linkBtn}
                        >
                            Live App
                        </Button>
                        <Button
                            startIcon={<AccountTreeTwoToneIcon />}
                            href={project.github}
                            target="_blank"
                            variant="contained"
                            className={classes.linkBtn}
                        >
                            Git Repo
                        </Button>
                    </ButtonGroup>
                </CardContent>
            </CssPortCard>
        </Grid>
    )
}
