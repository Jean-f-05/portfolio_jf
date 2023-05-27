import Image from 'next/image'
import Navbar from './components/Navbar'
import styles from "./page.module.css"
import TypeWriter from './components/Typewriter'

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
      </main>
    </>
  )
}

export default Home