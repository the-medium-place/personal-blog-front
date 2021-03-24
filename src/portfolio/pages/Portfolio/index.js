import React from 'react'
// import CollapsibleTable from '../../components/CollapsibleTable';

import projects from './projects'
import Grid from '@material-ui/core/Grid';
import PortfolioCard from '../../components/PortfolioCard';



export default function Portfolio() {


    return (
        // <div className="Portfolio" style={{marginTop:150}}>
        //     <CollapsibleTable projects={projects}/>
        // </div>
        <div className="Portfolio">
            <Grid container spacing={3} style={{ marginTop: 150 }}>
                {projects.map(project => {
                    return <PortfolioCard project={project} key={project.id}/>
                })}
            </Grid>
        </div>
    )
}
