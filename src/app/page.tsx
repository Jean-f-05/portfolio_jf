import Image from 'next/image'
import Navbar from './components/Navbar'
import styles from "./page.module.css"
import TypeWriter from './components/Typewriter'
import SectionHeader from './components/SectionHeader'
import Wrapper from './components/UI/Wrapper'
import Carousel from './components/Carousel'
import icons from './mocks/stackmock'
import ProjectElement from './components/ProjectElement'
import Footer from './components/Footer'
import whoami from './mocks/mockwhoami'
import CarouselIcons from './components/CarouselIcons'

const Home = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero__section}>
          <div className={styles.typewriter__wrapper}>
            <TypeWriter />
          </div>
          <Image src={"/hero.webp"} alt='Corto Maltese character, full body, rough sea background, gray blue sky, watercolor painting' height={400} width={400} className={styles.hero__image} priority />
        </section>
        <section id='stack' className={styles.stack__section}>
          <CarouselIcons />
        </section>
        <section id='whoami' className={styles.whoami}>
          <Wrapper>
            <SectionHeader text="Who am I <span> ? </span>" align='right' />
            <p className={styles.section__paragraph}>Born in Luxembourg<span>, </span> living in Portugal<span>. </span> Because pictures are worth a thousand words<span>, </span>
              Check the carousel below to know more about me<span> .</span>
            </p>
          </Wrapper>
          <Carousel data={whoami} />
        </section>

        <section id="portfolio" className={styles.portfolio__section}>
          <Wrapper>
            <SectionHeader text='My Portfolio <span> !</span>' color='blue' />
            <div className={styles.portfolio__container}>
              <ProjectElement
                type={'Web App'}
                image={{ alt: "A snippet of the top part of a pokedex webpage", url: "/dogo.webp" }}
                name="Pokedex"
                description='My version of the pokedex. React, Axios (RESTful API), state management, styled components'
                linkRef="https://stellular-pasca-997184.netlify.app/"
                stickers={["React", "Styled Components", "Html5"]}
              />
              <ProjectElement
                type={'Landing Page'}
                image={{ alt: "A snippet of the top part of the portfolio landing page", url: "/dogo.webp" }}
                name="My portfolio"
                description='Latest version of my portfolio. Your are already there...'
                linkRef="https://stellular-pasca-997184.netlify.app/"
                stickers={["NextJS", "Typescript", "Css3"]}
              />
            </div>
          </Wrapper>
        </section>
      </main >
      <Footer />
    </>
  )
}

export default Home