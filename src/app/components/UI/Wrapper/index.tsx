import styles from "./styles.module.css";

type WrapperProps = {
    children: JSX.Element | JSX.Element[],
}

const Wrapper = ({ children }: WrapperProps) => {
    return (
        <div className={styles.section__wrapper}>{children}</div>
    )
}

export default Wrapper;