// https://github.com/Micheal180301/Eco-Thech_Test.git
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  RiCheckLine,
  RiArrowRightSLine,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiAspectRatioFill,
  RiPlayFill,
} from 'react-icons/ri';

import styles from './ContentSection.module.css';

const projects = [
  {
    title: 'Дом из клееного бруса «Истра»',
    image: '/house.jpg',
    area: '137 м²',
    description: 'Наши авторские проекты',
  },
  {
    title: 'Дом из Дуба «Камчатка»',
    image: '/house2.jpg',
    area: '176 м²',
    description: 'Наши авторские проекты',
  },
  {
    title: 'Дом из Сосны «Дубровка»',
    image: '/house3.jpg',
    area: '200 м²',
    description: 'Наши авторские проекты',
  },
];

const ContentSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 480);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  useEffect(() => {
    const checkSize = () => {
      setIsSmallScreen(window.innerWidth < 480);
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <section className={styles.sliderSection}>
        <div className={styles.sliderContainer}>
          <div className={styles.slide}>
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
            />

            <div className={styles.topOverlay}>
              <span>{projects[currentIndex].description}</span>
            </div>

            <div className={styles.bottomOverlay}>
              <div className={styles.controls}>
                <button onClick={prevSlide}>
                  <RiArrowLeftLine />
                </button>
                <button onClick={nextSlide}>
                  <RiArrowRightLine />
                </button>
              </div>

              {!isSmallScreen && (
                <div className={styles.infoContainer}>
                  <p className={styles.title}>{projects[currentIndex].title}</p>
                  <div className={styles.area}>
                    <RiAspectRatioFill /> {projects[currentIndex].area}
                  </div>
                </div>
              )}
            </div>
          </div>
          {isSmallScreen && (
            <div className={styles.infoNoContainer}>
              <p className={styles.title}>{projects[currentIndex].title}</p>
              <div className={styles.area}>
                <RiAspectRatioFill className={styles.RiAspect} />{' '}
                {projects[currentIndex].area}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={styles.videoSection}>
        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <video controls poster="/poster1.jpg">
              <source
                src="https://ansaradev.ru/ecotech/bann1.mp4"
                type="video/mp4"
              />
              Ваш браузер не поддерживает video.
            </video>
            <div className={styles.videoOverlay}>
              <span>2 выставочные площадки</span>
            </div>
          </div>
          <div className={styles.paragrfes}>
            <p className={styles.info}>
              <RiCheckLine />
              Москва, 51-й км МКАД
            </p>
            <p className={styles.info}>
              <RiCheckLine />
              Наро-Фоминск
            </p>
          </div>
          <div className={styles.link}>
            <Link to="/">Подробнее про выставочные площадки</Link>
            <RiArrowRightSLine />
          </div>
        </div>

        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <video controls poster="/poster2.jpg">
              <source
                src="https://ansaradev.ru/ecotech/les3.mp4"
                type="video/mp4"
              />
            </video>
            <div className={styles.videoOverlay}>
              <div className={styles.wrapPlay}>
                <RiPlayFill
                  className={styles.play}
                  style={{ marginRight: '8px' }}
                />
              </div>
              <span>
                Видео о том, как создаётся
                <br /> идеальный дом
              </span>
            </div>
          </div>
          <div className={styles.paragrfes}>
            <p className={styles.info}>
              <RiCheckLine />
              Собственная лесозаготовка
            </p>
            <p className={styles.info}>
              <RiCheckLine /> 4 цеха в Архангельской области
            </p>
          </div>
          <div className={styles.link}>
            <Link to="/">Подробнее о нашей лесозаготовке</Link>
            <RiArrowRightSLine />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentSection;
