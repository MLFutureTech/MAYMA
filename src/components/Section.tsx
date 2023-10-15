import { IonContent, IonImg, IonSegment, IonText } from "@ionic/react";
import { FC } from "react";
import styles from "./Section.module.css";
const Section: FC<{imagen: string, odd:boolean}> = (props) => {
    return (
        <div className={ `${styles.container} ${ props.odd ? styles.odd : styles.even}`}>
            {/* <IonImg src={props.imagen} className={styles.imgBackground}/> */}
            <IonText className={`${styles.text} ${ props.odd ? styles.odd : styles.even}`}>
                {props.children}
            </IonText>
        </div>
    )
}
export default Section;