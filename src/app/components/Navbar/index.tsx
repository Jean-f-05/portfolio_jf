'use client'
import Menu from '../Menu/index';
import { useState } from 'react';
import { RiMenuUnfoldLine, RiCloseFill } from 'react-icons/ri';
import styles from "./styles.module.css";

type NavBarProps = {
    title: string
}

const Navbar = ({ title }: NavBarProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (<>
        <nav className={styles.navbar}>
            <ul className={styles.navbar__ul}>
                <a href={"https://portfolio-jf-phi.vercel.app/"} className={styles.navbar__a}>{title}</a>
                <div>
                    {menuOpen ? <RiCloseFill size={32} color='#F7EDE7' onClick={() => { setMenuOpen(!menuOpen) }} /> : <RiMenuUnfoldLine size={32} color='#F7EDE7' onClick={() => { setMenuOpen(!menuOpen) }} />}
                </div>
            </ul>
        </nav>
        <Menu isOpen={menuOpen} setMenu={setMenuOpen} />
    </>
    )
}

export default Navbar