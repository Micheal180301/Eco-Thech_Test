import styles from './MobileMenu.module.css';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <nav>
          <ul>
            <li>
              <a href="/">Проекты</a>
            </li>
            <li>
              <a href="/production">Наше производство</a>
            </li>
            <li>
              <a href="/photo-video">Фото и видео</a>
            </li>
            <li>
              <a href="/news">Новости</a>
            </li>
            <li>
              <a href="/clients">Для клиентов</a>
            </li>
            <li>
              <a href="/about">О компании</a>
            </li>
            <li>
              <a href="/services">Услуги</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
