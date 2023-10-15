import { IonText } from "@ionic/react";
import { FC } from "react";
import styles from "./Parrafo.module.css"

const Parrafo: FC<{texto: string}> = (props) => {

    return (
        <IonText className={styles.texto}>
            {props.texto}
        </IonText>
    )
}
export default Parrafo;