import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useViewportScroll } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import LunchDiningSharpIcon from '@mui/icons-material/LunchDiningSharp';
import {
    Nav,
    NavContentWrapper,
    NavLogoWrapper,
    NavLinkWrapper,
    MobileLinkWrapper,
    LinkUL,
    DropdownUL,
    StyledLink,
    StyledLI,
    DropdownWrapper,
    OverlayDiv
} from './navBarStyles'

export function NavBar() {


    const { scrollYProgress } = useViewportScroll();

    const [scrollState, setScrollState] = useState();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        scrollYProgress.onChange(x => {
            setScrollState(Math.ceil(x * 100))

        })
    }, [])

    return (
        <>
            <Nav
                animate={{
                    position: scrollState > 12 ? 'fixed' : 'absolute',
                    background: scrollState > 12 || menuOpen ? '#ededed' : 'rgba(0,0,0,0)',
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
                            <li>
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}
                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                    href="#aboutme"
                                >
                                    About Me
                                </StyledLink>
                            </li>

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
                            <StyledLI>
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}

                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                    href="#aboutme"
                                >
                                    <div style={{ width: '100%', height: '100%' }}>

                                        About Me
                                    </div>
                                </StyledLink>
                            </StyledLI>

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
        <OverlayDiv
            onClick={() => setMenuOpen(false)}
        />
    )


}

function useLockBodyScroll() {
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        if (window.getComputedStyle(document.body).width > 999) {
            document.body.style.overflow = originalStyle
        }

        return () => (document.body.style.overflow = originalStyle)
    })
}
