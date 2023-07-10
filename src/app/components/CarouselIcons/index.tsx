'use client'
import icons from './icons';
import styles from "./styles.module.css";

const CarouselIcons = ({ data }: any) => {
    return (
        <div className={styles.icons__wrapper}>
            {
                data.map((icon: any) => {
                    return (
                        <div key={icon}>
                            {icons[icon]}
                        </div>
                    )
                })
            }
        </div >

    )
}


export default CarouselIcons;

