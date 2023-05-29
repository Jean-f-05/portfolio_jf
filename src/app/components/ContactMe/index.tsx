import styles from "./styles.module.css";
import { SiGithub } from 'react-icons/si';
import { RiMailSendLine } from 'react-icons/ri';
import Link from 'next/link';


const ContactMe = ({ }) => {
    return (
        <div className={styles.contact__wrapper}>
            <ul className={styles.contact__list}>
                <li>

                    <Link href={"https://github.com/Jean-f-05"} target='_blank' className={styles.contact__link}>
                        <SiGithub size={40} color='#000' />
                    </Link>
                </li>
                <li>

                    <Link href="mailto:jean_f_05@hotmail.com?subject=JF Portfolio Contact" className={styles.contact__link}>
                        <RiMailSendLine size={40} color='#000' />
                    </Link >

                </li>
            </ul>

        </div>)
}

export default ContactMe;