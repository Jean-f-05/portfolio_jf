'use client'
import styles from "./styles.module.css"
import settings from './settings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';

type dataProps = {
    height: number,
    width: number,
    alt: string,
    src: string,
    style: string
}

const Carousel = ({ data }: any) => {
    return (
        <Slider {...settings}>
            {data.map((value: dataProps) => {
                const { alt, height, width, src, style } = value
                return (
                    <Image key={alt} height={height} width={width} alt={alt} src={src} className={style ? styles.thumb__image : ""} />
                )
            })}
        </Slider>
    )
}


export default Carousel;

