import styles from "./popupContact.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { setActive } from "@/store/popupSlice";

export default function PopupContact() {
    const dispatch = useDispatch();
    const active = useSelector((state: any) => state.popup.active);

    return (
        <div className={styles.popupContact + (active ? ` ${styles._active}` : "")}>
            <div className={styles.popupContact__fade}></div>
            <div className={styles.popupContact__back}></div>
            <div className={styles.popupContact__front}>
                <div className={styles.popupContact__cross + " cross"} onClick={ () => { dispatch(setActive(''))}} ></div>
                <form action="" className={styles.popupContact__form + " form"}>
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
            </div>
        </div>
    )
}