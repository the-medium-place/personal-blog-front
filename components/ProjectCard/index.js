import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import WebTwoToneIcon from '@mui/icons-material/WebTwoTone';
import { Chip, Box, Avatar, Grid, ButtonGroup, Button } from '@mui/material';
import useWindowDimensions from '../../utils/hooks/WindowDimensions';


import logocss from '../../public/images/devlogos/logocss.png';
import logohtml from '../../public/images/devlogos/logohtml.png';
import logomongodb from '../../public/images/devlogos/logomongodb.png';
import logomongoose from '../../public/images/devlogos/logomongoose.png';
import logomysql from '../../public/images/devlogos/logomysql.png';
import logonode from '../../public/images/devlogos/logonode.png';
import logoreact from '../../public/images/devlogos/logoreact.png';
import logosequelize from '../../public/images/devlogos/logosequelize.png';
import logoGraphQL from '../../public/images/devlogos/logoGraphQL.png';
import logoBootstrap from '../../public/images/devlogos/logoBootstrap.png';
import nextJsLogo from '../../public/images/devlogos/nextJsLogo.png'
import CRAlogo from '../../public/images/devlogos/CRAlogo.svg'


function fetchAvatar(tech) {
    // console.log("Avatar: ", tech)
    switch (tech) {
        case 'HTML5':
            return logohtml.src;
        case 'CSS3':
            return logocss.src;
        case 'Node.js':
            return logonode.src;
        case 'MySQL':
            return logomysql.src;
        case 'Sequelize':
            return logosequelize.src;
        case 'MongoDB':
            return logomongodb.src;
        case 'Mongoose':
            return logomongoose.src;
        case 'React JS':
            return logoreact.src;
        case 'GraphQL':
            return logoGraphQL.src;
        case 'Bootstrap':
            return logoBootstrap.src;
        case 'NextJS':
            return nextJsLogo.src;
        case 'create-react-app':
            return CRAlogo.src;
        default:
            return tech[0];
    }
}



const StyledCardFace = styled(motion.div)`
    width: 100%;
    border-radius: 5px;
    backface-visibility: hidden;
    position: absolute;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;


`

const StyledCardBack = styled(StyledCardFace)`
  transform: rotateY(180deg);
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
`

const FlipCard = styled(Grid)`
  border-radius: 5px;
  perspective: 1000px;
  background: transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 55vw;
  @media (min-width: 700px) {
    width: 50vw;  
    margin: 0 auto;
    height: 50vw;
}
  @media (min-width: 900px) {
      width: 90%;
      margin: 0 auto auto auto;
      height:30vw;
  }
  @media (min-width: 1200px) {
      width: 100%;
      height: 30vw;
  }
`
//height: !width ? 325 : width > 970 ? width / 3.7 : width > 900 ? width / 3 : width > 730 ? width / 2 : 325,
const FlipCardInner = styled(motion.div)`
position: absolute;
width: 100%;
height: 100%;
transition: transform 0.3s;
transform-style: preserve-3d;
transform: rotateY(180deg);
`


const CardImg = styled('img')`
    width: 80%;
    border-radius: 8px;
    transition: all .3s;
    margin: 0 auto;
    @media (max-width: 900px) {
        width: 80%;  
        margin: 0 auto;
    }
`

const TitleText = styled(motion.p)`
    font-size: 1.8rem;
    backface-visibility: hidden;
    font-weight: bold;
    position: absolute;
    top: 12%;
    z-index: 100;
    padding: .6rem;
    background: #ededed;
    color: rgb(50,50,50);
    border-radius: 5px;
    transition: opacity .3s;
    @media (max-width: 1000px) {
        font-size: 1rem;
    }
    @media (max-width: 900px) {
        font-size: .8rem;
    }
`

const TaglineText = styled(motion.p)`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: .6rem;
    backface-visibility: hidden;
    transition: transform 0.1s ease-in-out;
    height: 2.4rem;
`

const StyledButton = styled(Button)`
    background: rgb(20, 20, 20);
    color: #ededed;
    z-index: 110;
`

const ViewButton = styled(motion.button)`
    position: absolute;
    top: 3%;
    right: 5%;
    border-radius: 50%;
    aspect-ratio: 1/1;
    font-weight: 700;
    font-family: 'Lobster', cursive;
    background: red;
    color: white;
    border: .4rem solid red;
    z-index: 1000;
    backface-visibility: hidden;

`

const ChipBox = styled(motion.div)`
padding-x: .3rem; 
display: flex; 
justify-content: center;
flex-wrap: wrap;
flex: 1;
position: absolute;
bottom: 0; 
background: linear-gradient(to bottom, rgba(50, 50, 50, .6), rgba(50, 50, 50, .3));
padding: .6rem 0;
width: 100%;
`

export default function ProjectCard(props) {

    const { width, height } = useWindowDimensions();


    const {
        id,
        github,
        deployed,
        description,
        title,
        tagline,
        screenshot,
        technologies
    } = props.project;

    const cardRef = useRef(null);
    const viewBtnRef = useRef(null)


    const [frontView, setFrontView] = useState(true);
    const [hoverState, setHoverState] = useState(false)

    useEffect(() => {
        console.log({ width })
        cardRef.current.focus();
        viewBtnRef.current.focus();
    })


    function handleHoverStart(event) {
        console.log('hovered')
        setHoverState(true)
    }

    function handleHoverEnd(e) {
        console.log('stopped hover')
        setHoverState(false)
    }

    return (
        <FlipCard
            item
            id={id}
            xs={12}
            md={6}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
        >
            <TitleText
                animate={{
                    opacity: frontView && hoverState ? 1 : 0,
                }}
            >
                {title}
            </TitleText>
            <FlipCardInner
                animate={{
                    rotateY: frontView ? '0deg' : '180deg'
                }}
            >
                <StyledCardFace>
                    <ViewButton
                        color='error'
                        variant='contained'
                        onClick={() => { setFrontView(!frontView) }}
                        ref={viewBtnRef}
                        animate={{
                            boxShadow: hoverState ? '-4px 4px 10px rgba(50, 50, 50, .5)' : '0px 0px 0px rgba(0, 0, 0, 0)',
                            transform: hoverState ? 'scale(1.2)' : 'scale(1)',
                            opacity: frontView ? 1 : 0
                        }}
                    >
                        More<br />Info
                    </ViewButton>
                    <CardImg src={screenshot} ref={cardRef} />
                    <ChipBox animate={{
                        translateY: frontView && hoverState ? '0px' : '100%'
                    }}>
                        {technologies.map(tech => {
                            return (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    avatar={<Avatar alt={tech} src={fetchAvatar(tech)} />}
                                    style={{ margin: width > 1200 ? 1.3 : .8, fontSize: width > 1200 ? '.7em' : width > 900 ? '.4em' : '.2em', background: "#ededed" }}
                                />
                            )
                        })}
                    </ChipBox>
                </StyledCardFace>
                <StyledCardBack>
                    <Box padding=".3rem" display="flex" flexDirection={`column`} maxHeight={`100%`} overflowY='auto' justifyContent="flex-start">
                        <TaglineText>
                            {tagline}
                        </TaglineText>
                        <p style={{ lineHeight: '1.2rem', maxHeight: 145, overflow: 'auto', padding: '.4rem' }}>
                            {description}
                        </p>
                        <hr style={{ width: '100%' }} />
                        <ButtonGroup variant='outlined' size="small" aria-label="outlined primary button group" style={{ margin: '0 auto' }}>
                            <StyledButton
                                startIcon={<WebTwoToneIcon />}
                                href={deployed}
                                target="_blank"
                            >
                                Live App
                            </StyledButton>
                            <StyledButton
                                startIcon={<AccountTreeTwoToneIcon />}
                                href={github}
                                target="_blank"
                            >
                                Git Repo
                            </StyledButton>
                        </ButtonGroup>
                        <Button variant='contained' color="info" style={{ zIndex: 110, fontWeight: 900, marginTop: '3%', width: '85%', margin: '10px auto' }} onClick={() => { setFrontView(!frontView) }}>&larr; Return</Button>
                    </Box>
                </StyledCardBack>
            </FlipCardInner>
        </FlipCard>
    )
}
