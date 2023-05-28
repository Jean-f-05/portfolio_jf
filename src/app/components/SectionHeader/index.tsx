import styles from "./styles.module.css";

export type SectionHeaderProps = {
    text: string,
    color?: "blue" | "white",
    align?: "left" | "center" | "right",

}


const SectionHeader = ({ text, align = "left", color = "white" }: SectionHeaderProps) => {
    return (
        <h3
            className={`${styles.header} `}
            dangerouslySetInnerHTML={{ __html: text }}></h3 >
    )
}

export default SectionHeader;