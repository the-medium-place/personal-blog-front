import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';


export const TextBubble = styled.div`
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

export const DevImg = styled(motion.img)`
    transition: all .1s linear;
    width: 100%;
    &:hover {
        filter: drop-shadow(0px 0px 5px #ededed);
    }
`

export const FaceImg = styled(motion.img)`
    width: 60%;
    @media (max-width: 600px) {
        width: 40%;
    }
`

export const HeroDiv = styled(motion.div)`
    width: 100%;
    perspective: 1000px;
    position: relative;
`

export const NameWrapper = styled(Grid)`
    height: 100%;
    transform-style: preserve-3d;
    padding-top: 5%;
    width: 100%;
`

export const ImgWrapper = styled(Grid)`
    transform-style: preserve-3d;
`

export const NameSpan = styled(motion.span)`
    display: block;
    font-size: 9.5vw;
    font-weight: 900;
    text-align: right;
    width: 100%;
    @media (max-width: 600px) {
        font-size: 4rem;
        text-align: center;
    }
`

export const DevSection = styled.section`
    width: 100%;
    z-index: 150;
    padding: 1rem 0px;
`

export const DevLogoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const DevLogoBox = styled.div`
    height: 100%;
    width: 10%;
    overflow: hidden;
    padding: .5rem;
`

export const AboutMeText = styled.p`
    width: 80%;
    margin: 0 auto;
    font-size: 125%;
    margin-top: 40px;
    text-align: center;
    padding: 1.3rem;
    border: 2px solid #ededed;
    margin-bottom: 40px;
`