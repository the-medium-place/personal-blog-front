import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { motion, useViewportScroll } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import LunchDiningSharpIcon from '@mui/icons-material/LunchDiningSharp';
import useWindowDimensions from '../../utils/hooks/WindowDimensions';



const Nav = styled(motion.nav)(() => [
    `
    width: 100%;
    margin: 0 auto;
    display: block;
    top: 0;
    height: 45px;
    margin: 0 auto;
    z-index: 1000;
    padding: .6rem;
    `
])

const NavContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 90%;
    margin: 0 auto;
`

const NavLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 200%;
    width: 15%;
    height: 100%;
    padding: .6rem;
`

const NavLinkWrapper = styled.div`
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

const MobileLinkWrapper = styled(motion.div)`
@media (min-width:999px) {
    display:none;
}
`

const LinkUL = styled.ul`
    list-decoration: none;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-weight: 700;
`

const DropdownUL = styled(motion.ul)`
    list-decoration:none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    width: 100%;


`

const StyledLink = styled(motion.a)`

`

const StyledLI = styled(motion.li)`
    font-size: 170%;
    font-weight: 600;
    line-height: 2rem;
    width: 100%;
    padding: 1rem;
    margin: .4rem;
    &:hover {
        background: rgb(50,50,50);
        color: #ededed;
    }
    &:hover a {
        color: #ededed !important;
    }
`

const DropdownWrapper = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #ededed;
    display: flex;
    color: rgb(50,50,50);
    z-index:500;
`

export default function NavBar() {


    const { width, height } = useWindowDimensions();

    // const percentY = y ? Math.round(((y / (height)) * 100)) : 0;
    const { scrollYProgress } = useViewportScroll();

    const [scrollState, setScrollState] = useState();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        console.log('testing intitial width: ', { width })
        // scrollBarRef.current.focus()

        scrollYProgress.onChange(x => {
            setScrollState(Math.ceil(x * 100))

        })
        if (width > 1000) { setMenuOpen(false) }
    }, [width])

    return (
        <>
            <Nav
                animate={{
                    position: scrollState > 12 ? 'fixed' : 'absolute',
                    background: scrollState > 12 || menuOpen ? '#ededed' : 'transparent',
                    color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed',
                    // opacity: scrollState < 7 ? 1 : scrollState < 11 ? 0 : 1
                }}
            >
                <NavContentWrapper>
                    <NavLogoWrapper>
                        <h1>{`<ZGS>`}</h1>
                    </NavLogoWrapper>
                    <NavLinkWrapper>
                        <LinkUL>
                            <li>About</li>

                            <li>
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}
                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                    href="#projects"
                                >
                                    Projects
                                </StyledLink>
                            </li>
                            <li>
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}

                                    href="#contact"
                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                >
                                    Contact
                                </StyledLink>
                            </li>
                            <li>
                                Resumé&nbsp;|&nbsp;
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}

                                    href="ZacStowellResume.pdf"
                                    target="_blank"
                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                >
                                    View
                                </StyledLink>
                                &nbsp;-&nbsp;
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}

                                    href="ZacStowellResume.pdf"
                                    download
                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                >
                                    Download
                                </StyledLink>
                            </li>

                        </LinkUL>
                    </NavLinkWrapper>
                    <MobileLinkWrapper>
                        <LunchDiningSharpIcon onClick={() => setMenuOpen(!menuOpen)} />
                        {/* <MenuIcon
                            onClick={() => setMenuOpen(!menuOpen)}
                        /> 
                        */}
                    </MobileLinkWrapper>
                    <DropdownWrapper
                        animate={{
                            // transform: menuOpen ? 'translateY(60px)' : 'translateY(-100%)'
                            top: menuOpen ? 60 : '-100vh'
                        }}
                        transition={{
                            duration: .6,
                            ease: 'circInOut'
                        }}
                    >
                        <DropdownUL>
                            <StyledLI>About</StyledLI>

                            <StyledLI>
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}

                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                    href="#projects"
                                >
                                    <div style={{ width: '100%', height: '100%' }}>

                                        Projects
                                    </div>
                                </StyledLink>
                            </StyledLI>
                            <StyledLI>
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}

                                    href="#contact"
                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                >
                                    <div style={{ width: '100%', height: '100%' }}>
                                        Contact Me
                                    </div>
                                </StyledLink>
                            </StyledLI>
                            <StyledLI>
                                Resumé&nbsp;:&nbsp;
                                <br />
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}

                                    href="ZacStowellResume.pdf"
                                    target="_blank"
                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                >
                                    View
                                </StyledLink>
                                &nbsp;|&nbsp;
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}

                                    href="ZacStowellResume.pdf"
                                    download
                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                >
                                    Download
                                </StyledLink>
                            </StyledLI>
                            <StyledLI onClick={() => setMenuOpen(false)}>
                                Close
                            </StyledLI>

                        </DropdownUL>
                    </DropdownWrapper>
                </NavContentWrapper>
                {menuOpen ? (
                    <Overlay
                        setMenuOpen={setMenuOpen} />
                ) : null}
            </Nav>
        </>
    )
}

function Overlay({ setMenuOpen }) {
    useLockBodyScroll();

    return (
        <motion.div
            style={{
                zIndex: '-1',
                background: 'rgba(50,50,50,.8)',
                position: 'fixed',
                top: 70,
                bottom: 0,
                right: 0,
                left: 0

            }}
            onClick={() => setMenuOpen(false)}
        ></motion.div>
    )


}

function useLockBodyScroll() {
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        return () => (document.body.style.overflow = originalStyle)
    })
}
