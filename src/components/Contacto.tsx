import { IonIcon } from '@ionic/react';
import { FC } from 'react';
import styles from './Contacto.module.css';
import { call, logoWhatsapp } from 'ionicons/icons';

const PRODUCERS = [
    { name: 'Iván', phone: '+52123456789', display: '123 456 789', role: 'Productor' },
    { name: 'Jesús', phone: '+52123456789', display: '123 456 789', role: 'Logística' },
    { name: 'Ezequiel', phone: '+52123456789', display: '123 456 789', role: 'Maestro mezcalero' },
];

const Contacto: FC = () => {
    return (
        <div className={styles.card}>
            <p className={styles.kicker}>Contacto directo</p>
            <h3>Coordinemos tu pedido</h3>
            <p className={styles.lead}>Escríbenos por WhatsApp o llámanos para agendar visitas y compras al mayoreo.</p>
            <div className={styles.list}>
                {PRODUCERS.map((producer) => (
                    <article key={producer.name} className={styles.item}>
                        <div className={styles.iconWrap}>
                            <IonIcon icon={logoWhatsapp} />
                            <IonIcon icon={call} />
                        </div>
                        <div>
                            <p className={styles.name}>{producer.name}</p>
                            <p className={styles.role}>{producer.role}</p>
                            <a href={`https://wa.me/${producer.phone.replace('+', '')}`} target="_blank" rel="noreferrer">
                                {producer.display}
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Contacto;