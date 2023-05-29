import SectionHeader from '../SectionHeader';
import Wrapper from '../UI/Wrapper';
import styles from './styles.module.css';
import { SlPhone, SlLocationPin } from "react-icons/sl"
import { IoMailOutline } from "react-icons/io5"
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer__wrapper} id='contact'>
            <Wrapper>
                <SectionHeader text='Contact'></SectionHeader>
                <ul className={styles.footer__list}>
                    <li className={styles.footer__element}>
                        <SlPhone color='#d0d8e3' size={20} />
                        +351 968940658
                    </li>
                    <li className={styles.footer__element}>
                        <Link href="mailto:jean_f_05@hotmail.com?subject=JF Portfolio Contact" className={styles.footer__anchor}>
                            <IoMailOutline color='#d0d8e3' size={20} />
                            Click to email
                        </Link>
                    </li>
                    <li className={styles.footer__element}>
                        <SlLocationPin color='#d0d8e3' size={20} />
                        Braga, Portugal
                    </li>
                </ul>
                <hr className={styles.horizontalrule} />
                <p className={styles.footer__paragraph}><span>&copy;</span> Copyright {new Date().getFullYear()} Developed by: Jean-Francois</p>
            </Wrapper>
        </footer>
    )
}


export default Footer;