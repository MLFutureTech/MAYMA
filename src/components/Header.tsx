import { IonContent, IonImg, IonSegment, IonText } from "@ionic/react";
import { FC } from "react";
import styles from "./Header.module.css";
const Header: FC<{imagen: string}> = (props) => {
    return (
        <div className={styles.container}>
            <IonImg src={props.imagen} className={styles.imgBackground}/>
            <IonText className={styles.text}>
                {props.children}
            </IonText>
        </div>
    )
}
export default Header;