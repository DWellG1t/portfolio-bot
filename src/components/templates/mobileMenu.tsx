import styles from "./mobileMenu.module.scss";

import Link from "next/link";

import { setActiveMobile } from "@/store/mobileSlice";
import { useDispatch, useSelector } from "react-redux";

export default function MobileMenu() {
    const dispatch = useDispatch();
    const active = useSelector((state: any) => state.mobile.active);
    
    return (
        <div className={styles.mobileMenu + ( active ? ` ${styles._active}` : "")}>
            <div className={styles.mobileMenu__fade}></div>
            <div className={styles.mobileMenu__back}></div>
            <div className={styles.mobileMenu__front}>
                <div className={styles.mobileMenu__logo}>
                    <div className={"logo _ibg"}>
                        <img src="logo.svg" alt="" />
                    </div>
                    <div className={styles.mobileMenu__cross + " cross"} onClick={() => { dispatch(setActiveMobile(''))}}></div>
                </div>

                <ul className={styles.mobileMenu__menu}>
                    {[
                        {link: "/", text: "Главная"},
                        {link: "/", text: "Цены"},
                        {link: "/", text: "Блог"},
                    ].map((el, index) => {
                        return (
                            <li key={++index} onClick={ e => { e.currentTarget.classList.toggle(styles._active) }} >
                                <Link href={el.link} >{el.text}</Link>
                            </li>
                        )
                    })

                    }
                </ul>

                <div className={styles.mobileMenu__contacts}>
                    <a href="tel:79775918292">+7 (977) 591-82-92</a>
                    <a href="mail:gm.dat.well@gmail.com">gm.dat.well@gmail.com</a>
                </div>
            </div>
        </div>
    )
}