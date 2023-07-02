import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer + " _section"}>
            <div className={styles.footer__container + " _container"}>
                <form action="" className={styles.footer__form + " form"}>
                    <h2>Оставить заявку</h2>
                    <p>Имя*</p>
                    <input type="text" />
                    <p>E-mail*</p>
                    <input type="text" />
                    <p>Сообщение*</p>
                    <textarea name="" id="" cols={30} rows={5}>
                    </textarea>
                    <button className="button">Отправить</button>
                </form>

                <div className={styles.footer__images}>
                    <div className={"_ibg"}>
                        <img src="pages/index/phRobot.svg" alt="" />
                    </div>

                    <div className={"_ibg"}>
                        <img src="pages/index/phPhone.svg" alt="" />
                    </div>
                </div>
            </div>
        </footer> 
        
    )
}