import styled from '@emotion/styled';
import { motion } from 'framer-motion';


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