'use client'
import styles from "./styles.module.css"
import settings from './settings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';


const Carousel = () => {
    return (
        <Slider {...settings} className={styles.slider}>
            <Image className={styles.thumb__image} height={230} width={230} alt='a watercolor painting of a dog with a red bandana near the shore' src={"/dogo.webp"} />
            <Image className={styles.thumb__image} height={230} width={230} alt='a watercolor painting of a coder working sitting at his desk' src={"/desk.webp"} />
            <Image className={styles.thumb__image} height={230} width={230} alt='a watercolor painting of a gamer playing a videogame with enthusiasm' src={"/gamer.webp"} />
            <Image className={styles.thumb__image} height={230} width={230} alt='a watercolor painting of a basketball player aiming at the hoop' src={"/basket.webp"} />
            <Image className={styles.thumb__image} height={230} width={230} alt='a watercolor painting of a book and a hot coffee' src={"/bookandcoffee.webp"} />

        </Slider>
    )
}


export default Carousel;

