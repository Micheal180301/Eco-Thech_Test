import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  RiArrowDownSLine,
  RiHeart3Line,
  RiSearchLine,
  RiMenuLine,
  RiPhoneLine,
} from 'react-icons/ri';

import MobileMenu from './MobileMenu/MobileMenu.jsx';

import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 480);

  useEffect(() => {
    const checkSize = () => {
      setIsSmallScreen(window.innerWidth < 480);
      if (window.innerWidth >= 1200) {
        setIsMenuOpen(false);
      }
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="ЭКО-ТЕХ" />
          </div>

          {!isSmallScreen && (
            <button
              className={styles.menu}
              onClick={toggleMenu}
              aria-label="Открыть меню"
            >
              <RiMenuLine /> Меню
            </button>
          )}

          <ul className={styles.navDesktop}>
            <li className={styles.link}>
              <Link to="/">Проекты</Link>
              <RiArrowDownSLine className={styles.downSline} />
            </li>
            <li className={styles.link}>
              <Link to="/production">Наше производство</Link>
            </li>
            <li className={styles.link}>
              <Link to="/photo-video">Фото и видео</Link>
              <RiArrowDownSLine className={styles.downSline} />
            </li>
            <li className={styles.link}>
              <Link to="/news">Новости</Link>
            </li>
            <li className={styles.link}>
              <Link to="/clients">Для клиентов</Link>
              <RiArrowDownSLine className={styles.downSline} />
            </li>
            <li className={styles.link}>
              <Link to="/about">О компании</Link>
              <RiArrowDownSLine className={styles.downSline} />
            </li>
            <li className={styles.link}>
              <Link to="/services">Услуги</Link>
              <RiArrowDownSLine className={styles.downSline} />
            </li>
          </ul>
        </div>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        <div className={styles.contacts}>
          {isSmallScreen ? (
            <button className={styles.phoneIcon}>
              <RiPhoneLine />
            </button>
          ) : (
            <a href="tel:88003339191" className={styles.phoneText}>
              8 (800) 333-91-91
            </a>
          )}
          <button className={styles.searchIcon}>
            <RiSearchLine />
          </button>
          <button className={styles.heartIcon}>
            <RiHeart3Line />
          </button>
          {isSmallScreen && (
            <button
              className={styles.smallMenu}
              onClick={toggleMenu}
              aria-label="Открыть меню"
            >
              <RiMenuLine />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
