import { useState, useEffect } from 'react';

import styles from './TitleSection.module.css';

const TitleSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 980);
  useEffect(() => {
    const checkSize = () => {
      setIsSmallScreen(window.innerWidth < 980);
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>
            Мы — лидеры рынка России <br />
            по строительству деревянных домов
          </h1>
          <p className={styles.description}>
            Сами заготавливаем северный лес в Архангельской области, а потом
            строим дом «под ключ».
            {!isSmallScreen && <br />}
            Построили 302 дома за 2024 год. Всего же за 26 лет построили свыше
            5000 домов.
          </p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>
            Рассчитать стоимость дома
          </button>
          <div className={styles.secondaryButtonWrap}>
            <button className={styles.secondaryButton}>
              Задать вопрос в WhatsApp
            </button>
            <p className={styles.responseTime}>Ответим в течение 10 минут</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
