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
import getData from './getData'

const Home = async () => {
  const data = await getData();
  const values = { ...data.data.homes[0] }

  return (
    <>
      <Navbar title={values.title} />
      <main className={styles.main}>
        <section className={styles.hero__section}>
          <div className={styles.typewriter__wrapper}>
            <TypeWriter text={values.heroText} />
          </div>
          <Image src={values.heroImage.image.url} alt={values.heroImage.alt} height={400} width={400} className={styles.hero__image} priority />
        </section>
        <section id='stack' className={styles.stack__section}>
          <CarouselIcons data={values.stackIcons[0].iconName} />
        </section>
        <section id={values.whoamiSection.sectionRef} className={styles.whoami}>
          <Wrapper>
            <SectionHeader text={values.whoamiSection.text} />
            <p className={styles.section__paragraph} dangerouslySetInnerHTML={{ __html: values.whoamiParagraph }}></p>
          </Wrapper>
          <Carousel data={values.carousel.carouselImage} />
        </section>

        <section id={values.portfolioSection.sectionRef} className={styles.portfolio__section}>
          <Wrapper>
            <SectionHeader text={values.portfolioSection.text} color={values.portfolioSection.sectionColor} />
            <div className={styles.portfolio__container}>
              <ProjectElement data={values.portfolioCard} />
            </div>
          </Wrapper>
        </section>
      </main >
      <Footer data={values.footer} />
    </>
  )
}

export default Home