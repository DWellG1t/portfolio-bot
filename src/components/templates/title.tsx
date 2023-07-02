import styles from "./title.module.scss";

export default function Title(props: any) {
    return (
        <div className="_container">
            <h2 className={styles.title__text +" title"}>{props.title}</h2>
        </div>
    )
}