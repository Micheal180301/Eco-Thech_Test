import { useEffect, useState } from 'react';
import styles from './DownMenu.module.css';

const DownMenu = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 480);
  useEffect(() => {
    const checkSize = () => {
      setIsSmallScreen(window.innerWidth < 480);
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div>
      {isSmallScreen && (
        <div className={styles.bottomNav}>
          <button>
            <img src="/Icon (2).png" />
            <span>Проекты</span>
          </button>
          <button>
            <img src="/Icon (1).svg" />
            <span>Медиа</span>
          </button>
          <button>
            <img src="/Icon.png" />
            <span>Медиа</span>
          </button>
          <button>
            <img src="/Vector.png" />
            <span>Компания</span>
          </button>
          <button>
            <img src="/Icon (3).png" />
            <span>Клиентам</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default DownMenu;
