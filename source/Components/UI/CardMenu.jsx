/**import { forwardRef } from 'react';
import styles from './CardMenu.module.scss';

const CardMenu = forwardRef(({ children }, ref) => {
  return (
    <div className={styles.card} ref={ref}>
      <div>
        <ul className={styles.list}>{children}</ul>
      </div>
    </div>
  );
});

CardMenu.displayName = 'Card Menu';

export default CardMenu;
*/



import { forwardRef } from 'react';
import styles from './CardMenu.module.scss';

const CardMenu = forwardRef(({children}, ref) => {
  //RECEBENDO ELEMENTOS VIA {Children}
  ///// RECEBENDO REF DO CATEGORYMENU (ref={menuRef}) de CategoryMenu.jsx
  return (
    <div className={styles.card} ref={ref} >
      <div>
        <ul className={styles.list}>
        {children}
            </ul>
      </div>
    </div>
  );
});

CardMenu.displayName='Card Menu'

export default CardMenu;

