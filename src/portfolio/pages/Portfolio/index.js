import React, { useState, useEffect } from 'react';
import PortfolioCard from '../../components/PortfolioCard';
import Grid from '@material-ui/core/Grid';
import projects from './projects';
import Box from '@material-ui/core/Box';
import logocss from '../../assets/images/logocss.png';
import logohtml from '../../assets/images/logohtml.png';
import logojavascript from '../../assets/images/logojavascript.png';
import logomongodb from '../../assets/images/logomongodb.png';
import logomongoose from '../../assets/images/logomongoose.png';
import logomysql from '../../assets/images/logomysql.png';
import logonode from '../../assets/images/logonode.png';
import logoreact from '../../assets/images/logoreact.png';
import logosequelize from '../../assets/images/logosequelize.png';
import ProjectCarousel from '../../components/ProjectCarousel';
import useWindowDimensions from '../../../hooks/WindowDimensions'

const logoIcons = [logocss, logohtml, logojavascript, logomongodb, logomongoose, logomysql, logonode, logoreact, logosequelize]

export default function Portfolio() {

    const { width, height } = useWindowDimensions();


    return (
        <Box style={{ minHeight: '100vh', paddingTop: '5vh', marginTop: '5vh' }}>
            <Grid container spacing={1} justify="center">
                <Grid item xs={12}>
                    <h1>My Projects:</h1>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>

                    <Grid container justify="center">
                        {width > 960 ? (
                            <ProjectCarousel />
                        ) : (projects.map(project => {
                            return (<>
                                <Grid item xs='auto' />
                                <Grid xs={9}>
                                    <PortfolioCard project={project} />
                                </Grid>
                                <Grid item xs='auto' />
                            </>)
                        })
                            )}
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
                {/* <hr/> */}
                {/* <Grid item xs={1}></Grid>
            <Grid item xs={10} style={{border: '1px solid black', padding: 10, display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: 100}}>
                {logoIcons.map((icon, i)=>{
                    return <img key={i} src={icon} alt={icon} style={{height: 100, margin: 10}}/>
                })}
            </Grid>
            <Grid item xs={1}></Grid> */}

            </Grid>
        </Box>
    )
}
