import { Button } from '@mui/material'
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SectionWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const ContactWrapper = styled(motion.div)`
    padding: .6rem;
    width: 40%;
    margin: .2rem;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    @media (max-width: 760px) {
        width: 100%;
    }

`

export const ContactButton = styled(Button)`
    color: #ededed;
    border: 2px solid #47056b;
    background: #47056b;
    width: 100%;
    &:hover {
        background: #6e08a6;
        border: 2px solid #6e08a6;
        box-shadow: 0px 0px 1rem 5px #6e08a6;
    }
`

export const ButtonWrapper = styled(motion.div)`
    width:100%;
    display: flex;
    justify-content:center;

`

export const QRWrapper = styled(motion.div)`
width: 40%;
padding: 1.2rem;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
export const QRHeader = styled(motion.h2)`
font-size: 150%;
margin-bottom: 1rem;
text-align: center;
`

export const QRImg = styled(motion.img)`
width: 50%;
@media (max-width: 760px) {
    width: 80%;
}
`

export const ContactContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const Header = styled(motion.h1)`
 font-size: 200%;
 text-align: center;
 margin: 1rem;
`