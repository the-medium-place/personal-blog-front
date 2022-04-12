
// import ProjectCard from '../../components/ProjectCard'
import projects from '../../utils/projects'
import { Grid } from '@mui/material'
import styled from '@emotion/styled'
import { ProjectCard } from '../../components'

const Header = styled.h1`
font-size: 200%;
margin-bottom: 2rem;
text-align: center;

`

export function Projects() {


    return (
        <div id="projects" >
            <Header>Look what I can do!</Header>
            <Grid
                container

                display={'flex'}
                width='85vw'
                padding=".2rem"
                alignItems={'center'}
                justifyContent={'space-around'}
            >

                {projects.map((project) => {
                    return (
                        <ProjectCard project={project} key={project.id} />
                    )
                })}
            </Grid>
        </div>
    )
}
