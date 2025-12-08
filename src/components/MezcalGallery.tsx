import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from '@ionic/react';
import styles from './MezcalGallery.module.css';

export interface Stage {
  id: string;
  title: string;
  timeframe: string;
  description: string;
  bulletPoints: string[];
  image: string;
}

export const CORE_STAGES: Stage[] = [
  {
    id: 'plantacion',
    title: 'Plantación y cuidado',
    timeframe: 'Años 0-8',
    description:
      'Seleccionamos los mejores hijuelos y los cuidamos durante casi una década para garantizar piñas sanas y cargadas de azúcares.',
    bulletPoints: [
      'Preparación del terreno y riego estratégico en temporada seca.',
      'Deshierbe manual y protección contra plagas sin agroquímicos agresivos.',
      'Monitoreo constante del crecimiento de las pencas.',
    ],
    image: 'MAYMA/assets/images/IMG-20220419-WA0007.jpg',
  },
  {
    id: 'cosecha',
    title: 'Cosecha y selección',
    timeframe: 'Mes 97-100',
    description:
      'Cuando el maguey alcanza su madurez, se cortan las pencas y se extraen las piñas que viajarán a los palenques tradicionales.',
    bulletPoints: [
      'Jima cuidadosa para conservar el corazón del maguey intacto.',
      'Clasificación de piñas por tamaño para optimizar el horneado.',
      'Traslado inmediato a los hornos de tierra.',
    ],
    image: 'MAYMA/assets/images/SAVE_20220427_221219.jpg',
  },
  {
    id: 'horneado',
    title: 'Horneado en tierra',
    timeframe: '3-5 días',
    description:
      'Las piñas se hornean en hornos cónicos al aire libre alimentados con leña de encino para caramelizar los azúcares naturales.',
    bulletPoints: [
      'Sellado del horno con fibra y tierra para una cocción lenta.',
      'Rotación periódica para asegurar un tostado uniforme.',
      'Descanso posterior para estabilizar sabores ahumados.',
    ],
    image: 'MAYMA/assets/images/IMG-20220419-WA0007.jpg',
  },
  {
    id: 'fermentacion',
    title: 'Fermentación natural',
    timeframe: '4-7 días',
    description:
      'El mosto se aloja en tinas de madera abiertas donde las levaduras silvestres transforman los azúcares en alcohol.',
    bulletPoints: [
      'Triturado previo con tahona o molino artesanal.',
      'Control diario de temperatura y densidad del mosto.',
      'Uso exclusivo de levaduras naturales del entorno.',
    ],
    image: 'MAYMA/assets/images/SAVE_20220427_221219.jpg',
  },
  {
    id: 'destilacion',
    title: 'Destilación y resguardo',
    timeframe: '2-3 pases',
    description:
      'El fermentado se destila en alambiques de cobre o barro para obtener un mezcal limpio, aromático y equilibrado.',
    bulletPoints: [
      'Separación de puntas, cuerpo y colas para mantener calidad.',
      'Ajustes de graduación con mezcla de cabezas seleccionadas.',
      'Descanso del mezcal antes de su envasado artesanal.',
    ],
    image: 'MAYMA/assets/images/IMG-20220419-WA0007.jpg',
  },
];

const MezcalGallery: React.FC<{ stages?: Stage[] }> = ({ stages = CORE_STAGES }) => {
  const [activeId, setActiveId] = useState<string>(stages[0].id);
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set([stages[0].id]));
  const stageRefs = useRef<Record<string, HTMLElement | null>>({});
  const activeStage = useMemo(() => {
    return stages.find((stage) => stage.id === activeId) ?? stages[0];
  }, [activeId, stages]);

  useEffect(() => {
    setRevealedIds(new Set([stages[0]?.id]));
  }, [stages]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const stageId = visible.target.getAttribute('data-stage-id');
          if (stageId && stageId !== activeId) {
            setActiveId(stageId);
          }
          if (stageId && !revealedIds.has(stageId)) {
            setRevealedIds((prev) => new Set(prev).add(stageId));
          }
        }
      },
      { threshold: 0.4 }
    );

    stages.forEach((stage) => {
      const node = stageRefs.current[stage.id];
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [activeId, stages]);

  const handleSelectStage = useCallback((stageId: string) => {
    setActiveId(stageId);
    setRevealedIds((prev) => {
      if (prev.has(stageId)) return prev;
      const next = new Set(prev);
      next.add(stageId);
      return next;
    });
    const node = stageRefs.current[stageId];
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <section className={styles.wrapper} aria-label="Galería del proceso mezcalero">
      <div className={styles.titleBlock}>
        <p className={styles.kicker}>Proceso mezcalero</p>
        <h2 className={styles.heading}>Galería interactiva</h2>
        <p className={styles.subheading}>
          Explora todas las etapas: cultivo, producción, logística y contacto directo. Toca cada estación
          o desplázate verticalmente para ver imágenes y detalles.
        </p>
      </div>
      <div className={styles.layout}>
        <ol className={styles.timeline}>
          {stages.map((stage, index) => (
            <li
              key={stage.id}
              className={`${styles.timelineItem} ${stage.id === activeId ? styles.active : ''}`}
            >
              <button
                type="button"
                onClick={() => handleSelectStage(stage.id)}
                aria-current={stage.id === activeId ? 'step' : undefined}
              >
                <span className={styles.stageNumber}>{index + 1}</span>
                <span className={styles.stageCopy}>
                  <span className={styles.stageTitle}>{stage.title}</span>
                  <small className={styles.stageTime}>{stage.timeframe}</small>
                </span>
              </button>
            </li>
          ))}
        </ol>
        <div className={styles.stagePanels}>
          <IonCard className={styles.detailCard}>
            <IonImg src={activeStage.image} alt={activeStage.title} className={styles.stageImage} />
            <IonCardHeader>
              <IonCardSubtitle>{activeStage.timeframe}</IonCardSubtitle>
              <IonCardTitle>{activeStage.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p className={styles.stageDescription}>{activeStage.description}</p>
              <ul className={styles.bulletList}>
                {activeStage.bulletPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </IonCardContent>
          </IonCard>
          <div className={styles.stageArticles}>
            {stages.map((stage) => (
              <article
                key={stage.id}
                data-stage-id={stage.id}
                ref={(element) => {
                  stageRefs.current[stage.id] = element;
                }}
                className={`${styles.stageArticle} ${stage.id === activeId ? styles.stageArticleActive : ''} ${revealedIds.has(stage.id) ? 'fogRevealed' : 'fogHidden'}`}
              >
                <IonImg src={stage.image} alt={stage.title} className={styles.articleImage} />
                <div className={styles.articleContent}>
                  <p className={styles.articleLabel}>{stage.timeframe}</p>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MezcalGallery;
