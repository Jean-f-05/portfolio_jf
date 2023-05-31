import styles from "./styles.module.css";
import { motion } from "framer-motion";

type MenuProps = {
    isOpen: boolean,
    setMenu: (value: boolean) => void,

}

const Menu = ({ isOpen, setMenu }: MenuProps) => {

    const variants = {
        open: { opacity: 1, x: 0, width: '100%' },
        closed: { opacity: 0, x: "-100%", width: 0 },
    }

    return (
        <>
            <motion.div
                className={styles.menu__wrapper}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >
                <ul className={styles.menu__ulist}>
                    <li>
                        <a href="#stack" className={styles.menu__anchor} onClick={() => setMenu(false)}>
                            The stack <span>...</span>
                        </a>
                    </li>
                    <li>
                        <a href="#whoami" className={styles.menu__anchor} onClick={() => setMenu(false)}>
                            Who am I <span>?</span>
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className={styles.menu__anchor} onClick={() => setMenu(false)}>
                            My Portfolio <span>!</span>
                        </a>
                    </li>
                    <li>
                        <a href="#footer" className={styles.menu__anchor} onClick={() => setMenu(false)}>
                            Contact
                        </a>
                    </li>
                </ul>
            </motion.div>
        </>
    )
}

export default Menu