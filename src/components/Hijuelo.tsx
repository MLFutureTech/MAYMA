import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonImg, IonItem, IonLabel, IonList, IonRow, IonTitle } from "@ionic/react";
import { FC, Fragment } from "react"
import styles from "./Hijuelo.module.css";

const Hijuelo: FC<{ titulo: string, altura: string, cantidad: string, precio: string }> = props => {
    return (
        // <IonCard >
        //     <IonRow>
        //         <IonCol className={styles.background}>
        //             {props.children}
        //         </IonCol>
        //         <IonCol>
        //             <IonList >
        //                 <IonItem className={styles.background}>
        //                     <IonRow>
        //                         <IonCol className={styles.text}>
        //                             <IonLabel>Altura:</IonLabel>
        //                         </IonCol>
        //                         <IonCol className={styles.text}>
        //                             <IonLabel>{props.altura}</IonLabel>
        //                         </IonCol>
        //                     </IonRow>
        //                 </IonItem>
        //                 <IonItem className={styles.background}>
        //                     <IonRow>
        //                         <IonCol className={styles.text}>
        //                             <IonLabel>Cantidad disponible:</IonLabel>
        //                         </IonCol>
        //                         <IonCol className={styles.text}>
        //                             <IonLabel>{props.cantidad}</IonLabel>
        //                         </IonCol>
        //                     </IonRow>
        //                 </IonItem>
        //                 <IonItem className={styles.background}>
        //                     <IonRow>
        //                         <IonCol className={styles.text}>
        //                             <IonLabel>Precio unitario::</IonLabel>
        //                         </IonCol>
        //                         <IonCol className={styles.text}>
        //                             <IonLabel>{props.precio}</IonLabel>
        //                         </IonCol>
        //                     </IonRow>
        //                 </IonItem>
        //             </IonList>
        //         </IonCol>
        //     </IonRow>
        // </IonCard>
        <IonCard >
            <IonCardTitle className={styles["centerText"]}>
                <IonLabel>
                    {props.titulo}
                </IonLabel>
            </IonCardTitle>
            <IonCardContent>
                {props.children}
            </IonCardContent>
            <IonCardSubtitle>
                <IonList>
                    <IonItem>
                        <IonRow>
                            <IonCol>
                                <IonLabel>Altura:</IonLabel>
                            </IonCol>
                            <IonCol>
                                <IonLabel>{props.altura}</IonLabel>
                            </IonCol>
                        </IonRow>
                    </IonItem>
                    <IonItem>
                        <IonRow>
                            <IonCol>
                                <IonLabel>Cantidad disponible:</IonLabel>
                            </IonCol>
                            <IonCol>
                                <IonLabel>{props.cantidad}</IonLabel>
                            </IonCol>
                        </IonRow>
                    </IonItem>
                    <IonItem>
                        <IonRow>
                            <IonCol>
                                <IonLabel>Precio unitario::</IonLabel>
                            </IonCol>
                            <IonCol>
                                <IonLabel>{props.precio}</IonLabel>
                            </IonCol>
                        </IonRow>
                    </IonItem>
                </IonList>
            </IonCardSubtitle>
        </IonCard>
    )
}
export default Hijuelo;