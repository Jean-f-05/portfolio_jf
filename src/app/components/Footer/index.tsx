import SectionHeader from '../SectionHeader';
import Wrapper from '../UI/Wrapper';
import styles from './styles.module.css';
import icons from './icons';
import Link from 'next/link';

const Footer = ({ data }: any) => {
    const { footerSection, elements, copyright } = data
    console.log(copyright)
    return (
        <footer className={styles.footer__wrapper} id={footerSection.sectionRef}>
            <Wrapper>
                <SectionHeader text={footerSection.text}></SectionHeader>
                <ul className={styles.footer__list}>
                    {elements.map((el: any) => {
                        return (
                            <li className={styles.footer__element} key={el.text}>
                                {el.href ?
                                    (<Link href="mailto:jean_f_05@hotmail.com?subject=JF Portfolio Contact" className={styles.footer__anchor}>
                                        {icons[el.icon]}
                                        {el.text}
                                    </Link>) : (
                                        <>{icons[el.icon]}
                                            {el.text}
                                        </>)
                                }
                            </li>
                        );
                    })}
                </ul>
                <hr className={styles.horizontalrule} />
                <div className={styles.footer__paragraphWrapper}>
                    <p className={styles.footer__paragraph} dangerouslySetInnerHTML={{ __html: copyright.text }}></p>
                    <p className={styles.footer__paragraph}> {new Date().getFullYear()}</p>
                </div>

            </Wrapper>
        </footer >
    )
}

export default Footer;