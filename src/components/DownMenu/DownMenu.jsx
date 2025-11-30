import { useEffect, useState } from 'react';
import styles from './DownMenu.module.css';

import Icon2 from '../../assets/Icon (2).png';
import Icon1 from '../../assets/Icon (1) (1).png';
import Icon from '../../assets/Icon.png';
import Vector from '../../assets/Vector.png';
import Icon3 from '../../assets/Icon (3).png';

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
            <img src={Icon2} />
            <span>Проекты</span>
          </button>
          <button>
            <img src={Icon1} />
            <span>Медиа</span>
          </button>
          <button>
            <img src={Icon} />
            <span>Медиа</span>
          </button>
          <button>
            <img src={Vector} />
            <span>Компания</span>
          </button>
          <button>
            <img src={Icon3} />
            <span>Клиентам</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default DownMenu;
