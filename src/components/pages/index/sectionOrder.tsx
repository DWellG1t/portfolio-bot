import styles from "./sectionOrder.module.scss";

export default function SectionOrder() {
    return (
        <section className={styles.sectionOrder + " _section"}>
            <div className={styles.sectionOrder__container + " _container"}>
                <div className={styles.sectionOrder__images}>
                    <div className="_ibg">
                        <img src="pages/index/pcComp.svg" alt="" />
                    </div>
                    <div className="_ibg">
                        <img src="./pages/index/pcRobot.svg" alt="" />
                    </div>
                </div>


                <div className={styles.sectionOrder__text}>
                    <ul>
                        {[
                            "Оставить заявку", 
                            "Дождаться звонка",
                            "Дождаться звонка",
                            "Дождаться звонка",
                            "Дождаться звонка",
                            "Дождаться звонка",
                        ].map((el, index) => {
                            return (
                            <li key={++index}>
                                <span>{++index}</span>
                                <span>{el}</span>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}