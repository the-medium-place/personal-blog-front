import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Nav = styled(motion.nav)(() => [
    `
    width: 100vw;
    margin: 0 auto;
    display: block;
    top: 0;
    height: 45px;
    margin: 0 auto;
    z-index: 1000;
    padding: .6rem;
    `
])

export const NavContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 90%;
    margin: 0 auto;
`

export const NavLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 200%;
    width: 15%;
    height: 100%;
    padding: .6rem;
`

export const NavLinkWrapper = styled.div`
    height: 100%;
    width:70%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: .6rem;
    @media (max-width: 1000px) {
        display:none;
    }
`

export const MobileLinkWrapper = styled(motion.div)`
@media (min-width:999px) {
    display:none;
}
`

export const LinkUL = styled.ul`
    list-decoration: none;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-weight: 700;
`

export const DropdownUL = styled(motion.ul)`
    list-decoration:none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    width: 100%;


`

export const StyledLink = styled(motion.a)`
    &:hover {
        text-decoration: underline;
    }
`

export const StyledLI = styled(motion.li)`
    font-size: 170%;
    font-weight: 600;
    line-height: 2rem;
    width: 100vw;
    padding: 1rem;
 
    &:hover {
        background-image: linear-gradient(to bottom right, var(--primaryColor), var(--primaryLight));
        color: #ededed;
    }
    &:hover a {
        color: #ededed !important;
    }
`

export const DropdownWrapper = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #ededed;
    display: flex;
    color: rgb(50,50,50);
    z-index:500;
    @media (min-width:1000px) {
        display: none;
    }
`

export const OverlayDiv = styled(motion.div)`
z-index: -1;
background: rgba(50,50,50,.8);
position: fixed;
top: 70px;
bottom: 0;
right: 0;
left: 0;
@media (min-width:1000px) {
    display: none;
}
`