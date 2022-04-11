import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Button } from '@mui/material'
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import saveContact from '/public/images/saveContact.svg'

const SectionWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const ContactWrapper = styled(motion.div)`
    padding: .6rem;
    width: 40%;
    margin: .2rem;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    @media (max-width: 760px) {
        width: 70%;
    }

`

const ContactButton = styled(Button)`
    color: #ededed;
    border: 2px solid #ededed;
    &:hover {
        color: rgb(50,50,50);
        background: #ededed;
        box-shadow: 0px 0px 1rem 5px #ededed;
    }
`

const ButtonWrapper = styled(motion.div)`
    width:100%;
    display: flex;
    justify-content:center;

`

const QRWrapper = styled(motion.div)`
width: 40%;
padding: 1.2rem;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const QRHeader = styled(motion.h2)`
font-size: 150%;
margin-bottom: 1rem;
text-align: center;
`

const QRImg = styled(motion.img)`
width: 50%;
@media (max-width: 760px) {
    width: 80%;
}
`

const ContactContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const Header = styled(motion.h1)`
 font-size: 200%;
 text-align: center;
 margin: 1rem;
`

const CONTENT = [
    {
        text: 'Email Me!',
        href: 'mailto:zgstowell@gmail.com',
        Icon: ContactMailIcon,
        name: "zgstowell@gmail.com"

    },
    {
        text: 'Call/Text Me!',
        href: 'tel:5035071351',
        Icon: ContactPhoneIcon,
        name: "(503) 507-1351"

    },
    {
        text: 'Follow me on GitHub!',
        href: 'https://github.com/the-medium-place',
        Icon: GitHubIcon,
        name: "the-medium-place"

    },
    {
        text: 'Connect on LinkedIn!',
        href: 'https://www.linkedin.com/in/zachary-stowell/',
        Icon: LinkedInIcon,
        name: "LinkedIn"

    }
]

export default function Contact() {
    return (
        <SectionWrapper id="contact">
            <Header>
                Reach Out!
            </Header>
            <ContactContainer>
                {CONTENT.map(obj => {
                    return (
                        <ContactWrapper>
                            <p
                                style={{ margin: 12 }}
                            >{obj.text}</p>
                            <ButtonWrapper>

                                <ContactButton
                                    href={obj.href}
                                    endIcon={<obj.Icon />}
                                    target="_blank"
                                >
                                    {obj.name}
                                </ContactButton>
                            </ButtonWrapper>

                        </ContactWrapper>
                    )
                })}
            </ContactContainer>
            <QRWrapper>
                <QRHeader >
                    Save Me!
                </QRHeader>
                <QRImg
                    src={saveContact.src}
                />
            </QRWrapper>

        </SectionWrapper>
    )
}
