'use client'
import Menu from '../Menu/index';
import { useState } from 'react';
import { RiMenuUnfoldLine, RiCloseFill } from 'react-icons/ri';
import styles from "./styles.module.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (<>
        <nav className={styles.navbar}>
            <ul className={styles.navbar__ul}>
                <a href={""} className={styles.navbar__a}>Jean&apos;s Portfolio</a>
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