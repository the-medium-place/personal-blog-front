import React, { useRef, useState } from 'react'
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import WebTwoToneIcon from '@material-ui/icons/WebTwoTone';


const usePortfolioStyles = makeStyles((theme) => ({
    portContentWrapper: {
        width: '100%',
        overflowX: 'hidden',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    portPic: {
        width: '100%',
    }
}))

export default function PortfolioCard({ project }) {

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


    return (
        <Grid item xs={12} md={6} lg={4} style={{ position: 'relative', overflow: 'hidden' }}>
            <motion.div className={classes.portContentWrapper} onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd}>
                <motion.div
                    ref={portCardBack}
                    style={{
                        textAlign: 'center',
                        width: '100%',
                        position: 'absolute',
                        height: '100%',
                        top: 0,
                        right: hoverState ? '0%' : '100%',
                        overflowY: 'auto',
                        // x: hoverState ? '0%' : '100%',
                        background: 'white',
                        // padding: '.6rem',
                        // transition: 'all .6s eas-in-out',
                        zIndex: 2
                    }}

                >
                   <p style={{margin: 5}}>
                       {project.description}
                    </p> 
                    <ButtonGroup>
                        <Button
                         size="small"
                         startIcon={<WebTwoToneIcon />}
                         href={project.deployed}
                         variant="contained"
                         target="_blank"
                        >
                            Live App
                        </Button>
                        <Button
                          size="small"
                          startIcon={<AccountTreeTwoToneIcon />}
                          href={project.github}
                          variant="contained"
                          target="_blank"
                        >
                            Git Repo
                        </Button>
                    </ButtonGroup>
                </motion.div>
                <motion.div ref={portCardFront} style={{ width: '100%'}}>
                    <img src={project.screenshot} alt={project.id} className={classes.portPic} transition={{ duration: '.2s' }} />
                </motion.div>

            </motion.div>
        </Grid>
    )
}
