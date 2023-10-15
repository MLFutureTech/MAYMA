import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonList, IonRow, IonTitle } from "@ionic/react";
import { FC } from "react";
import styles from "./Contacto.module.css"
import { call, logoWhatsapp } from 'ionicons/icons';
const Contacto: FC = (props) => {
    return (
        <IonGrid >
            {/* <IonCardTitle className={`${styles["centerText"]} `}>
                <IonLabel>
                    <IonTitle>Contacto</IonTitle>
                </IonLabel>
            </IonCardTitle> */}
            <IonRow>
                <IonCol>
                    <IonItem className={styles["odd"]}>
                        <IonIcon color="white" src={logoWhatsapp} />
                        <IonRow>
                            <IonCol>Ivan: </IonCol>
                            <IonCol>123456789</IonCol>
                        </IonRow>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem className={styles["odd"]}>
                        <IonIcon color="white" src={logoWhatsapp} />
                        <IonRow>
                            <IonCol>Jesus: </IonCol>
                            <IonCol>123456789</IonCol>
                        </IonRow>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem className={styles["odd"]}>
                        <IonIcon color="white" src={logoWhatsapp} />
                        <IonRow>
                            <IonCol>Ezequiel: </IonCol>
                            <IonCol>123456789</IonCol>
                        </IonRow>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>

        // <div>
        //     <IonGrid className={styles.text}>
        //         <ion
        //         <IonRow>
        //             <IonCol>
        //                 <IonImg src="./dos.png"/>
        //             </IonCol>
        //             <IonCol>
        //                 <IonTitle>Productores</IonTitle>
        //                 <IonRow>
        //                     <IonCol>Ivan</IonCol>
        //                     <IonCol>123456789</IonCol>
        //                 </IonRow>
        //                 <IonRow>
        //                     <IonCol>Jesus</IonCol>
        //                     <IonCol>123456789</IonCol>
        //                 </IonRow>
        //                 <IonRow>
        //                     <IonCol>Ezequiel</IonCol>
        //                     <IonCol>123456789</IonCol>
        //                 </IonRow>
        //             </IonCol>
        //         </IonRow>
        //     </IonGrid>
        // </div>
    )
}
export default Contacto;