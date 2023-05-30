'use client'
import styles from "./styles.module.css"
import settings from './settings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';

type dataProps = {
    id: string,
    alt: string,
    image: image,
    style: string,
    text: string
}
type image = {
    id: string,
    url: string
}

const Carousel = ({ data }: any) => {
    return (
        < Slider {...settings}>
            {
                data.map((value: dataProps) => {
                    const { id, alt, image, style, text } = value
                    return (
                        <article key={id} className={styles.article}>
                            <Image height={250} width={250} alt={alt} src={image.url} className={style ? styles.thumb__image : ""} />
                            <h3 className={styles.thumb__text}>{text}</h3>
                        </article>
                    )
                })
            }
        </Slider >
    )
}


export default Carousel;

