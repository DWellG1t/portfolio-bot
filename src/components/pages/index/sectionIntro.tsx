import styles from "./sectionIntro.module.scss";

import { useDispatch } from "react-redux";
import { setActive } from "@/store/popupSlice";

export default function SectionIntro() {
    const dispatch = useDispatch();

    return (
        <section className={styles.sectionIntro + " _section"}>
            <div className={styles.sectionIntro__container + " _container"}>
                <div className={styles.sectionIntro__text + " text"}>
                    <h1>Разработка ботов</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui totam facere deleniti, numquam ab quos cupiditate quis nulla repellendus!</p>
                    <button className="button" onClick={ () => { dispatch(setActive(''))}}>Связаться</button>
                </div>


                <div className={styles.sectionIntro__images}>
                    <div className={"_ibg"}>
                        <img src="pages/index/aiRobot.svg" alt="" />
                    </div>

                    <div className={"_ibg"}>
                        <img src="pages/index/aiPlatform.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}