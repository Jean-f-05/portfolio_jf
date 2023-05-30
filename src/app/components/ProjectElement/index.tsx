import Image from 'next/image';
import styles from "./styles.module.css";
import { SiGithub } from 'react-icons/si';
import Link from 'next/link';

type ProjectProps = {
    cardtype: "Web App" | "Landing Page",
    cardName: string,
    cardDescription: string,
    cardLink: string,
    cardStickers: Array<"NextJS" | "React" | "Styled Components" | "Html5" | "Css3" | "Typescript">
    cardImage: ImageProps
}

type ImageProps = {
    alt: string,
    image: any
}

type StickerProps = {
    children: JSX.Element | string | string[],
}
const Sticker = ({ children }: StickerProps) => {
    return (
        <div className={styles.sticker__wrapper}>
            <h6 className={styles.sticker__text}>{children}</h6>
        </div>
    )
}

const ProjectElement = ({ data }: any) => {
    return (
        data.map((value: ProjectProps) => {
            const { cardImage, cardtype, cardName, cardDescription, cardLink, cardStickers } = value;
            return (
                < div className={styles.project__wrapper} key={cardName}>
                    <div className={styles.project__image__wrapper}>
                        <Image alt={cardImage.alt} src={cardImage.image.url} fill />
                    </div>
                    <div className={styles.project__header}>
                        <h5 className={styles.project__text}>{cardtype}</h5>
                        <Link href={cardLink} target="_blank">
                            <SiGithub color='#fff' size={28} />
                        </Link>
                    </div>
                    <strong className={styles.project__name}>
                        {cardName}
                    </strong>
                    <p className={styles.project__paragraph}>
                        {cardDescription}
                    </p>
                    <div className={styles.stickers__wrapper}>
                        {cardStickers.map((sticker: any) => {
                            return <Sticker key={sticker}>{sticker}</Sticker>
                        })}
                    </div>
                </div >
            )
        })
    )
}

export default ProjectElement