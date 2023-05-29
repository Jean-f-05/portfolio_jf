'use client'
import settings from './settings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import icons from '@/app/mocks/stackmock';

const CarouselIcons = () => {
    return (
        <Slider {...settings}>
            {icons.map((iconItem) => {
                const { Icon, size, color, id } = iconItem
                return (
                    <Icon key={id} size={size} color={color} />
                )
            })}
        </Slider>
    )
}


export default CarouselIcons;

