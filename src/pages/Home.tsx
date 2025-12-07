import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
  title: 'Ventas',
  timeframe: 'Disponibilidad anual 35,000 piezas',
  description:
    'Ofrecemos hijuelos listos para trasplante directo desde los viveros familiares, asegurando trazabilidad y acompañamiento técnico.',
  bulletPoints: hijueloHighlights.flatMap((item) => [item.title, ...item.stats]),
  image: 'MAYMA/assets/images/SAVE_20220427_221219.jpg',
};

const logisticsStage: Stage = {
  id: 'logistica',
  title: 'Logística y entrega',
  timeframe: 'Punto único · Santo Domingo Narro',
  description:
    'Coordina el traslado y pago directo en la cancha de fútbol de Santo Domingo Narro, Juquila Mixes, con acompañamiento de los productores.',
  bulletPoints: [
    'Venta exclusiva en la cancha de fútbol de Santo Domingo Narro, Juquila Mixes, Yautepec, Oaxaca.',
    'Entrega inmediata: se carga al arribar y se paga al contado.',
    'Trato directo con productores para resolver dudas y garantizar trazabilidad.',
  ],
  image: 'MAYMA/assets/images/SAVE_20220427_221219.jpg',
};

const contactStage: Stage = {
  id: 'contacto',
  title: 'Contacto directo',
  timeframe: 'Coordina tu pedido',
  description:
    'Escríbenos por WhatsApp o llámanos para agendar visitas, compras al mayoreo y resolver cualquier duda sobre los hijuelos o el mezcal.',
  bulletPoints: [
    'Iván – Productor · 123 456 789 (WhatsApp y llamada)',
    'Jesús – Logística · 123 456 789 (WhatsApp y llamada)',
    'Ezequiel – Maestro mezcalero · 123 456 789 (WhatsApp y llamada)',
  ],
  image: 'MAYMA/assets/images/IMG-20220419-WA0007.jpg',
};

const galleryStages: Stage[] = [heroStage, ...CORE_STAGES, logisticsStage, salesStage, contactStage];

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary" style={{ textAlign: 'center' }}>
          <IonTitle>MA&MA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="homeContent" fullscreen scrollY={true} forceOverscroll={false}>
        <div className="scrollStack">
          <section className="scrollSection gallery">
            <IonGrid fixed>
              <div className="sectionCard galleryCard">
                <MezcalGallery stages={galleryStages} />
              </div>
            </IonGrid>
          </section>
        </div>
      </IonContent>
    </IonPage >
  );
};

export default Home;
