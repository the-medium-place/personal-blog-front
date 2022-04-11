import React, { useRef, useEffect, useState } from 'react'
import styles from '../../styles/Hero.module.css';
import useMousePosition from '../../utils/hooks/MousePosition';
import useWindowDimensions from '../../utils/hooks/WindowDimensions';
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';
import faceIcon from '../../public/images/faceIcon.png'
import styled from '@emotion/styled';

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

const TextBubble = styled.div`
    position: absolute;
    top: 10%;
    right: 0;
    background: white;
    height: 20%;
    width: 35%;
    border-radius: 50%;
    padding: .7rem;
    color: rgb(50,50,50);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    z-index: 100;
    box-shadow: 0px 0px 3rem rgba(50, 50, 50, .4);
    &:after {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 24px solid #fff;
        border-right: 12px solid transparent;
        border-top: 12px solid #fff;
        border-bottom: 20px solid transparent;
        left: 15%;
        bottom: -12%;
        z-index:-1;
        transform: skew(-30deg)
    }
    `;

const DevImg = styled(motion.img)`
        transition: all .1s linear;
        width: 100%;
        &:hover {
            filter: drop-shadow(0px 0px 5px #ededed);
        }
    `

export default function Hero() {

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
        console.log(name)
        setDevname(name)
    }

    function handleLogoLeave(e) {
        setDevname(null);
    }

    return (
        <>
            <div className={styles.hero} ref={heroRef}>
                <Grid
                    container
                    component={motion.div}
                    style={{ flexDirection: 'row' }}
                    animate={{
                        rotateY: `${-(percentX / 3)}deg`,
                        rotateX: `${15 - percentY / 2}deg`
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        className={styles.nameWrapper}
                        component={motion.div}
                        display="flex"
                        flexDirection="column"
                        animate={{
                            rotateY: `${-(percentX / 2)}deg`,
                            rotateX: `${15 - percentY / 3}deg`
                        }}
                    >
                        <span className={styles.name}>Zac</span>
                        <span className={styles.name}>Stowell</span>
                        <span className={styles.name}>Codes</span>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        className={styles.imgWrapper}
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
                        <img src={faceIcon.src} style={{ width: width <= 600 ? '40%' : '60%' }} />

                        {
                            devName ? (
                                <TextBubble>
                                    {devName}!
                                </TextBubble>
                            ) : null
                        }
                    </Grid>

                </Grid>
                <div style={{ width: '100%', zIndex: 150, padding: '1rem 0' }}>


                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        {devLogos.map((img) => {
                            return (
                                <div
                                    key={img.image.name}
                                    style={{
                                        height: '100%',
                                        width: '10%',
                                        overflow: 'hidden',
                                        padding: '.5rem'
                                    }}
                                >
                                    <DevImg
                                        src={img.image.src}
                                        name={img.name}
                                        onMouseEnter={handleLogoHover}
                                        onMouseLeave={handleLogoLeave}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <p style={{ margin: '30px auto', textAlign: 'center', fontSize: '125%' }}>

                        That's me! I'm Zac Stowell. I love puzzles and problem solving. I love to code.
                    </p>
                </div>
            </div>
        </>
    )
}
