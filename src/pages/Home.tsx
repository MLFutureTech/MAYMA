import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useRef } from 'react';
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
  const contentRef = useRef<HTMLIonContentElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fogRevealed');
            entry.target.classList.remove('fogHidden');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    const observeElements = () => {
      const elements = contentRef.current?.querySelectorAll('.fogHidden');
      elements?.forEach((el) => observer.observe(el));
    };

    // Delay to ensure DOM is ready
    const timer = setTimeout(observeElements, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary" style={{ textAlign: 'center' }}>
          <IonTitle>MA&MA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} className="homeContent" fullscreen scrollY={true} forceOverscroll={false}>
        <div className="scrollStack">
          <section className="scrollSection gallery">
            <IonGrid fixed>
              <div className="sectionCard galleryCard">
                <MezcalGallery stages={galleryStages} />
              </div>
            </IonGrid>
          </section>
        </div>
        <div className="fogSvgOverlay" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="fog-blur-strong" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="14" />
              </filter>
            </defs>

            <g filter="url(#fog-blur-strong)">
              <g>
                <circle cx="180" cy="420" r="38" fill="white">
                  <animate attributeName="cy" values="420; -120" dur="18s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.08 1.08" dur="18s" repeatCount="indefinite" />
                </circle>
                <circle cx="340" cy="430" r="46" fill="white">
                  <animate attributeName="cy" values="430; -140" dur="18s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.1 1.1" dur="18s" repeatCount="indefinite" />
                </circle>
                <circle cx="520" cy="440" r="52" fill="white">
                  <animate attributeName="cy" values="440; -150" dur="18s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.08 1.08" dur="18s" repeatCount="indefinite" />
                </circle>
                <circle cx="680" cy="420" r="40" fill="white">
                  <animate attributeName="cy" values="420; -130" dur="18s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.06 1.06" dur="18s" repeatCount="indefinite" />
                </circle>
                <circle cx="90" cy="430" r="32" fill="white">
                  <animate attributeName="cy" values="430; -100" dur="19s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.07 1.07" dur="19s" repeatCount="indefinite" />
                </circle>
                <circle cx="750" cy="440" r="36" fill="white">
                  <animate attributeName="cy" values="440; -115" dur="17s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.05 1.05" dur="17s" repeatCount="indefinite" />
                </circle>
              </g>
              <g>
                <circle cx="120" cy="440" r="34" fill="white">
                  <animate attributeName="cy" values="440; -110" dur="14s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.1 1.1" dur="14s" repeatCount="indefinite" />
                </circle>
                <circle cx="280" cy="450" r="40" fill="white">
                  <animate attributeName="cy" values="450; -120" dur="14s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.12 1.12" dur="14s" repeatCount="indefinite" />
                </circle>
                <circle cx="460" cy="455" r="42" fill="white">
                  <animate attributeName="cy" values="455; -130" dur="14s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.1 1.1" dur="14s" repeatCount="indefinite" />
                </circle>
                <circle cx="640" cy="445" r="38" fill="white">
                  <animate attributeName="cy" values="445; -115" dur="14s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.08 1.08" dur="14s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="450" r="30" fill="white">
                  <animate attributeName="cy" values="450; -125" dur="13s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.09 1.09" dur="13s" repeatCount="indefinite" />
                </circle>
                <circle cx="720" cy="455" r="34" fill="white">
                  <animate attributeName="cy" values="455; -135" dur="15s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.07 1.07" dur="15s" repeatCount="indefinite" />
                </circle>
              </g>
              <g>
                <circle cx="200" cy="460" r="26" fill="white">
                  <animate attributeName="cy" values="460; -140" dur="11s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.1 1.1" dur="11s" repeatCount="indefinite" />
                </circle>
                <circle cx="360" cy="470" r="30" fill="white">
                  <animate attributeName="cy" values="470; -150" dur="11s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.12 1.12" dur="11s" repeatCount="indefinite" />
                </circle>
                <circle cx="540" cy="465" r="28" fill="white">
                  <animate attributeName="cy" values="465; -145" dur="11s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.1 1.1" dur="11s" repeatCount="indefinite" />
                </circle>
                <circle cx="700" cy="455" r="26" fill="white">
                  <animate attributeName="cy" values="455; -135" dur="11s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.08 1.08" dur="11s" repeatCount="indefinite" />
                </circle>
                <circle cx="120" cy="470" r="22" fill="white">
                  <animate attributeName="cy" values="470; -150" dur="10s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.12 1.12" dur="10s" repeatCount="indefinite" />
                </circle>
                <circle cx="620" cy="470" r="24" fill="white">
                  <animate attributeName="cy" values="470; -145" dur="12s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" additive="sum" values="1 1; 1.1 1.1" dur="12s" repeatCount="indefinite" />
                </circle>
              </g>
            </g>
          </svg>
        </div>
      </IonContent>
    </IonPage >
  );
};

export default Home;
