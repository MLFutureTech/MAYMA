import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Contacto from '../components/Contacto';
import MezcalGallery, { CORE_STAGES, Stage } from '../components/MezcalGallery';
import './Home.css';

const heroStage: Stage = {
  id: 'introduccion',
  title: 'Introducción',
  timeframe: 'Origen Mixe · Santo Domingo Narro',
  description:
    'Cultivamos magueyes durante ocho años, cuidando cada penca con técnicas tradicionales para obtener mezcales honestos y llenos de carácter.',
  bulletPoints: [
    'Productores mixes con herencia artesanal',
    'Procesos supervisados desde el cultivo hasta la destilación',
    'Experiencias guiadas y venta directa sin intermediarios',
  ],
  image: 'MAYMA/assets/images/IMG-20220419-WA0007.jpg',
};

const hijueloHighlights = [
  {
    title: 'Hijuelo chico',
    stats: [
      'Altura: 30-45 cm',
      'Disponibilidad: 35,000 piezas',
      'Precio unitario: $13 MXN',
    ],
  },
  {
    title: 'Hijuelo grande',
    stats: [
      'Altura: 46-60 cm',
      'Disponibilidad: 35,000 piezas',
      'Precio unitario: $15 MXN',
    ],
  },
];

const salesStage: Stage = {
  id: 'ventas',
  title: 'Etapa de ventas',
  timeframe: 'Disponibilidad anual 35,000 piezas',
  description:
    'Ofrecemos hijuelos listos para trasplante directo desde los viveros familiares, asegurando trazabilidad y acompañamiento técnico.',
  bulletPoints: hijueloHighlights.flatMap((item) => [item.title, ...item.stats]),
  image: 'MAYMA/assets/images/SAVE_20220427_221219.jpg',
};

const galleryStages: Stage[] = [heroStage, salesStage, ...CORE_STAGES];

const logisticsCopy = [
  'Los hijuelos se venden tal como se muestra en la fotografía; el único punto de venta disponible es en la cancha de fútbol de Santo Domingo Narro, Juquila Mixes, Yautepec, Oaxaca.',
  'Forma de entrega: al momento de arribar al lugar se carga y se paga al contado. Trato directo con productores.',
];

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ textAlign: "center" }}>
          <IonTitle>MA&MA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="homeContent" fullscreen>
        <div className="scrollStack">
          <section className="scrollSection gallery">
            <IonGrid fixed>
              <div className="sectionCard galleryCard">
                <MezcalGallery stages={galleryStages} />
              </div>
            </IonGrid>
          </section>

          <section className="scrollSection logistics">
            <IonGrid fixed>
              <div className="sectionCluster">
                {logisticsCopy.map((copy, index) => (
                  <article key={copy} className="sectionCard infoCard">
                    <p className="infoBadge">Punto {index + 1}</p>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </IonGrid>
          </section>

          <section className="scrollSection contact">
            <IonGrid fixed style={{ padding: 0 }}>
              <div className="sectionCard contactCard">
                <Contacto />
              </div>
            </IonGrid>
          </section>
        </div>
      </IonContent>
    </IonPage >
  );
};

export default Home;
