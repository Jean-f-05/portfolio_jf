import Image from 'next/image'
import Navbar from './components/Navbar'
import styles from "./page.module.css"
import TypeWriter from './components/Typewriter'
import SectionHeader from './components/SectionHeader'
import Wrapper from './components/UI/Wrapper'
import Carousel from './components/Carousel'
import icons from './mocks/stackmock'

const Home = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero__section}>
          <div className={styles.typewriter__wrapper}>
            <TypeWriter />
          </div>
          <Image src={"/hero.webp"} alt='Corto Maltese character, full body, rough sea background, gray blue sky, watercolor painting' height={400} width={400} className={styles.hero__image} />
        </section>
        <section id='whoami' className={styles.whoami}>
          <Wrapper>
            <SectionHeader text="Who am I <span> ? </span>" align='right' />
            <p className={styles.section__paragraph}>Born in Luxembourg<span>, </span> living in Portugal<span>. </span> Because pictures are worth a thousand words<span>, </span>
              Check the carousel below to know more about me<span> .</span>
            </p>
          </Wrapper>
          <Carousel />
        </section>

        <section id='stack' className={styles.stack__section}>
          <Wrapper>

            <SectionHeader text="The Stack<span>...</span>" color="blue" />
            <ul className={styles.stack__list}>
              {icons.map(iconItem => {
                const { Icon, size, color } = iconItem
                return (
                  <li key={color} className={styles.stack__element}>
                    <Icon size={size} color={color} />
                  </li>
                )
              })}
            </ul>
          </Wrapper>
        </section>
      </main >
    </>
  )
}

export default Home