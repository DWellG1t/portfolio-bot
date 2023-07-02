import styles from "./sectionService..module.scss";

import { BsChevronUp } from "react-icons/bs";

export default function SectionService() {
    return (
        <section className={styles.sectionService + " _section"}>
            <div className={styles.sectionService__container + " _container"}>

                {['','', '', ''].map((el, index) => {
                    return (
                        <div key={++index} className={styles.sectionService__table} onClick={event => { event.currentTarget.classList.toggle(styles._active)}}>
                        <h2>
                            <span>Биржевые боты</span>
                            <span><BsChevronUp /></span>
                        </h2>
                        <ul>
                            <li>
                                <span>Анализаторы</span>
                                <span>1000 руб</span>
                            </li>
                            <li>
                                <span>Анализаторы</span>
                                <span>1000 руб</span>
                            </li>
                            <li>
                                <span>Анализаторы</span>
                                <span>1000 руб</span>
                            </li>
                            <li>
                                <span>Анализаторы</span>
                                <span>1000 руб</span>
                            </li>
                        </ul>
                    </div>
                    )
                })}

            </div>
        </section>
    )
}