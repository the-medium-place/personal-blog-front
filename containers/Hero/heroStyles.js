import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';

export const TextBubbleWrapper = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 10%;
right: -5%;
padding: 1.2rem;
height: 20%;
width: 35%;
border-radius: 50%;
background: linear-gradient(to bottom right, var(--primaryLight), var(--primaryColor));
box-shadow: 0px 0px 3rem rgba(50, 50, 50, .4);

`


export const TextBubble = styled.div`

background: #ededed;
border-radius: 50%;
height: 100%;
width: 100%;
padding: .7rem;
color: rgb(50,50,50);
display: flex;
justify-content: center;
align-items: center;
font-weight: 900;
z-index: 100;
&:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 24px solid #ededed;
    border-right: 12px solid transparent;
    border-top: 12px solid #ededed;
    border-bottom: 20px solid transparent;
    left: 18%;
    bottom: -12%;
    z-index:-1;
    transform: skew(-30deg)
}
@media (min-width: 960px) {
    &:after {
        left: 20%;
        bottom: -9%;
    }
}
@media (min-width: 1400px) {
    &:after {
        left: 25%;
        bottom: -9%;
    }
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
    -webkit-font-smoothing: antialiased;
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
    @media (max-width: 900px) {
        width: 14%;
    }
`

export const AboutMeText = styled.p`
    margin: 0 auto;
    font-size: 175%;
    margin-top: 40px;
    text-align: center;
    padding: 1.3rem;
    margin-bottom: 40px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;

`