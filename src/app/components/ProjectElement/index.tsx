import Image from 'next/image';
import styles from "./styles.module.css";
import { SiGithub } from 'react-icons/si';
import Link from 'next/link';

type ProjectProps = {
    type: "Web App" | "Landing Page",
    name: string,
    description: string,
    linkRef: string,
    stickers: Array<"NextJS" | "React" | "Styled Components" | "Html5" | "Css3" | "Typescript">
    image: ImageProps
}

type ImageProps = {
    alt: string,
    url: string
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


const ProjectElement = ({ type, name, description, linkRef, stickers, image }: ProjectProps) => {
    return (
        <div className={styles.project__wrapper}>
            <div className={styles.project__image__wrapper}>
                <Image alt={image.alt} src={image.url} fill />
            </div>
            <div className={styles.project__header}>
                <h5 className={styles.project__text}>{type}</h5>
                <Link href={linkRef} target="_blank">
                    <SiGithub color='#fff' size={28} />
                </Link>
            </div>
            <strong className={styles.project__name}>
                {name}
            </strong>
            <p className={styles.project__paragraph}>
                {description}
            </p>
            <div className={styles.stickers__wrapper}>
                {stickers.map((sticker) => {
                    return <Sticker key={sticker}>{sticker}</Sticker>
                })}
            </div>
        </div>)
}

export default ProjectElement