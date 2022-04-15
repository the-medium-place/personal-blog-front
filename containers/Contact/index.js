import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import saveContact from '/public/images/saveContact.svg'
import {
    SectionWrapper,
    ContactWrapper,
    ContactButton,
    ButtonWrapper,
    QRWrapper,
    QRHeader,
    QRImg,
    ContactContainer,
    Header
} from './contactStyles'


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

export function Contact() {
    return (
        <SectionWrapper id="contact">
            <Header>
                Reach Out!
            </Header>
            <ContactContainer>
                {CONTENT.map(obj => {
                    return (
                        <ContactWrapper key={obj.name}>
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
