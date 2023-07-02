import styles from "./header.module.scss";

import Link from "next/link";

import { useDispatch } from "react-redux";
import { setActiveMobile } from "@/store/mobileSlice";

export default function Header() {
    const dispatch = useDispatch();

    
    return (
        <header className={styles.header}>
            <div className={styles.header__container + " _container"}>
                <div className="logo _ibg">
                    <img src="./logo.svg" alt="" />
                </div>

                <nav className={styles.header__navigation}>
                    <ul>
                        <li>
                            <Link href="/">Главная</Link>
                        </li>
                        <li>
                            <Link href="/">Цены</Link>
                        </li>
                        <li>
                            <Link href="/">Блог</Link>
                        </li>
                    </ul>
                </nav>

                <div className={styles.header__contacts}>
                    <a href="tel:79775918292">+7 977 591 82 92</a>
                    <a href="tel:79775918292">gm.dat.well@gmail.com</a>
                </div>

                <div className={styles.header__burger + " burger"} onClick={() => { dispatch(setActiveMobile(''))}}>
                    <span></span>
                </div>
            </div>
        </header>
    )
}