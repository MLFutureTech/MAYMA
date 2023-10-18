import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import Contacto from '../components/Contacto';
import Header from '../components/Header';
import Hijuelo from '../components/Hijuelo';
import Parrafo from '../components/Parrafo';
import Section from '../components/Section';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{textAlign: "center"}}>
          <IonTitle>MA&MA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        {/* <IonHeader collapse="condense">
          <IonTitle>Venta de Higuelos</IonTitle>
        </IonHeader> */}
        <IonGrid fixed>
          <Header imagen="assets/images/IMG-20220419-WA0007.jpg" >
            Magueyes Ancestrales & Mezcales Artezanales
          </Header>
        </IonGrid>
        <IonGrid fixed>
        <Section imagen={''} odd={true}>
          <IonRow>
          <IonCol size="2"></IonCol>
            <IonCol size="4">
              <Hijuelo titulo="Hijuelo chico" altura="entre 30 y 45 cm" cantidad="35,000 pzs" precio="$13.0 MXN" >
                <IonImg src="assets/images/SAVE_20220427_221219.jpg" />
              </Hijuelo>
            </IonCol>
            <IonCol size="4">
              <Hijuelo titulo="Hijuelo grande" altura="entre 46 y 60 cm" cantidad="35,000 pzs" precio="$15.0 MXN" >
                <IonImg src="assets/images/SAVE_20220427_221219.jpg" />
              </Hijuelo>
              <IonCol size="2"></IonCol>
            </IonCol>
          </IonRow>
          </Section>
        </IonGrid>
        <IonGrid fixed>
          <Section imagen={''} odd={false}>
            Los hijuelos se venden tal como se muestra en la fotografía; El único punto de venta disponible es en la cancha de futból de Santo Domingo Narro, Juquila Mixes, Yautepec, Oaxaca
          </Section>
          <Section imagen={''} odd={true}>
            Forma de entrega: Es al momento de arribar al lugar, se carga y se paga al contado. Trato directo con productores.
          </Section>

        </IonGrid>
        <IonGrid fixed>
        <Contacto/>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default Home;
