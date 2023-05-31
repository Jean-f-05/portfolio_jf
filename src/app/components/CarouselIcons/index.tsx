'use client'
import settings from './settings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import icons from './icons';

const CarouselIcons = ({ data }: any) => {
    return (
        <Slider {...settings}>
            {data.map((icon: any) => {
                return (
                    <div key={icon}>
                        {icons[icon]}
                    </div>
                )
            })}
        </Slider >
    )
}


export default CarouselIcons;

