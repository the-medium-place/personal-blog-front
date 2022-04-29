import React, { useRef, useEffect, useState } from 'react'
import useMousePosition from '../../utils/hooks/MousePosition';
import useWindowDimensions from '../../utils/hooks/WindowDimensions';
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';
import faceIcon from '../../public/images/faceIcon.png'

import {
    TextBubble,
    DevImg,
    FaceImg,
    HeroDiv,
    NameWrapper,
    ImgWrapper,
    NameSpan,
    DevSection,
    DevLogoWrapper,
    DevLogoBox,
    AboutMeText,
    TextBubbleWrapper
} from './heroStyles';

import logomongodb from '../../public/images/devlogos/logomongodb.png';
import logomongoose from '../../public/images/devlogos/logomongoose.png';
import logomysql from '../../public/images/devlogos/logomysql.png';
import logonode from '../../public/images/devlogos/logonode.png';
import logoreact from '../../public/images/devlogos/logoreact.png';
import logosequelize from '../../public/images/devlogos/logosequelize.png';
import logoGraphQL from '../../public/images/devlogos/logoGraphQL.png';

const devLogos = [
    { image: logoreact, name: 'ReactJS' },
    { image: logonode, name: 'Node.js' },
    { image: logomongodb, name: 'MongoDB' },
    { image: logomongoose, name: 'Mongoose' },
    { image: logomysql, name: 'MySQL' },
    { image: logosequelize, name: 'Sequelize' },
    { image: logoGraphQL, name: 'GraphQL' },
]


export function Hero() {

    const heroRef = useRef(null)

    const { x, y } = useMousePosition(heroRef);
    const { width, height } = useWindowDimensions();

    const percentX = x ? Math.round(50 - ((x / width) * 100)) : 0;
    const percentY = y ? Math.round(((y / height) * 100)) : 0;

    // console.log({ percentX, percentY })

    const [devName, setDevname] = useState(null)
    // console.log({ x, width, y, height })
    useEffect(() => {
        heroRef.current.focus();
    }, [])

    function handleLogoHover(e) {
        const { name } = e.target;
        // console.log(name)
        setDevname(name)
    }

    function handleLogoLeave(e) {
        setDevname(null);
    }

    return (
        <>
            <HeroDiv ref={heroRef} id="top">
                <Grid
                    container
                    component={motion.div}
                    style={{ flexDirection: 'row' }}
                    animate={{
                        rotateY: `${-(percentX / 3)}deg`,
                        rotateX: `${15 - percentY / 2}deg`
                    }}
                >
                    <NameWrapper
                        item
                        xs={12}
                        sm={6}
                        // className={styles.nameWrapper}
                        component={motion.div}
                        display="flex"
                        flexDirection="column"
                        animate={{
                            rotateY: `${-(percentX / 2)}deg`,
                            rotateX: `${15 - percentY / 3}deg`
                        }}
                    >
                        <NameSpan>Zac</NameSpan>
                        <NameSpan>Stowell</NameSpan>
                        <NameSpan>Codes</NameSpan>
                    </NameWrapper>
                    <ImgWrapper
                        item
                        xs={12}
                        sm={6}
                        // className={styles.imgWrapper}
                        component={motion.div}
                        animate={{
                            rotateY: `${-(percentX / 2)}deg`,
                            rotateX: `${15 - percentY / 3}deg`
                        }}
                        display="flex"
                        justifyContent={'center'}
                        alignItems="center"
                        position={'relative'}
                    >
                        <FaceImg src={faceIcon.src} />

                        {
                            devName ? (
                                <TextBubbleWrapper>

                                    <TextBubble>
                                        {devName}!
                                    </TextBubble>
                                </TextBubbleWrapper>
                            ) : null
                        }
                    </ImgWrapper>

                </Grid>
                <DevSection id="aboutme">


                    <DevLogoWrapper>
                        {devLogos.map((img) => {
                            return (
                                <DevLogoBox
                                    key={img.name}
                                >
                                    <DevImg
                                        src={img.image.src}
                                        name={img.name}
                                        onMouseEnter={handleLogoHover}
                                        onMouseLeave={handleLogoLeave}
                                    />
                                </DevLogoBox>
                            )
                        })}
                    </DevLogoWrapper>
                </DevSection>
                <AboutMeText>
                    That's me! Making websitez. Coding appz. Playing drumz.
                    {/* That's me! I'm Zac Stowell. I love puzzles and problem solving. I love to code.
                    <br /><br />
                    I am endlessly driven to learn and grow. Breaking problems down to their smallest parts and rebuilding has always been a passion, and the world of Web Development grants me the opportunity to spend every day doing just that.
                    <br /><br />
                    If you are in need of a developer for any project - big or small - reach out! I am excited to solve your problems. I love to code. */}
                </AboutMeText>
            </HeroDiv>
        </>
    )
}
