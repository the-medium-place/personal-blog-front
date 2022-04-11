
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../containers/Footer'
import Hero from '../containers/Hero'
import styled from '@emotion/styled'
import Projects from '../containers/Projects'
import NavBar from '../containers/NavBar'
import Contact from '../containers/Contact'
import ScrollBar from '../components/ScrollBar'


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
          {/* <ScrollBar /> */}
          <NavBar />
          <Hero id="hero" />
          <Spacer />
          <Projects />
          <Spacer />
          <Contact />
          <Spacer />


        </main>

      </div>
      <Footer />
    </>
  )
}
