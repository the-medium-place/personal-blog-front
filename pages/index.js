
import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import Footer from '../containers/Footer'
// import Hero from '../containers/Hero'
import styled from '@emotion/styled'
// import Projects from '../containers/Projects'
// import NavBar from '../containers/NavBar'
// import Contact from '../containers/Contact'

import { NavBar, Hero, Contact, Footer, Projects } from '../containers'
import Script from 'next/script'


const Spacer = styled('div')`
  width: 85%;
  border: 1px solid #ededed;
  margin: 8vh auto;
`


export default function Home() {



  return (
    <>
      <div className={styles.container}>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Zac Stowell Codes</title>
        </Head>
        <main className={styles.main}>
          <NavBar />
          <Hero id="hero" />
          <Spacer />
          <Projects />
          <Spacer />
          <Contact />
          <Spacer />


        </main>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    console.log('%c WELCOME TO THE CONSOLE!', 'color:blue; font-size: 32px; background: rgb(200,200,200); text-align: center; font-weight:900; border: 3px solid blue; padding: 3rem;')
    console.log('%c If you are here, you must be a fellow developer checking on my code! Run the function "meetZac()" to view some info about me!', 'color:blue; background: rgb(200,200,200); border: 3px solid blue; padding: 2rem; font-size: 18px;')
    function meetZac(){
      const zac = {
        "Name": "Zac Stowell",
        "Age": "36 years",
        "Pet": {
          "name": "Billie Holidog",
          "type": "dog",
          "breed": "Belgian Malinois/German Shepherd/Border Collie"
        },
        "Phone Number": "(503) 507-1351",
        "Email Address":"zgstowell@gmail.com",
        "Languages":[
          "HTML",
          "CSS",
          "JavaScript",
          "jQuery",
          "SQL",
        ],
        "Technologies": [
          "Node.JS",
          "ReactJS",
          "GraphQL",
          "MongoDB/Mongoose",
          "Sequelize",
        ]
      }
      console.table(zac)
      console.log('%c REACH OUT IF YOU HAVE ANY MORE QUESTIONS!', 'color:blue; font-size: 24px; background: rgb(200,200,200); text-align: center; font-weight:900;')

    }
  `,
          }}
        />
      </div>
      <Footer />
    </>
  )
}
