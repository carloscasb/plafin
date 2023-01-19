/**ORIGINAL
 * import styles from './Modal.module.scss';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';

const Modal = ({isOpen = false, onClose, title, children}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalWrapper = isOpen ? (
    <>
      <div className={styles.modal}>
        <div className={styles.heading}>
          <h2>{title}</h2>
          <button onClick={onClose}>
            <MdClose className='icon hover'/>
          </button>
        </div>
        {children}
      </div>
      <div className={styles.overlay} onClick={onClose}></div>
    </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalWrapper,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;
 * 
 * 
 */



import styles from './Modal.module.scss';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

///RECEBER um isOpen para abrir, um onclose para fechar, um title para titulo e um children para o conteudo do modal
const Modal = ({isOpen = false, onClose, title, children}) => {
/// VAI RECEBER isOpen POR PROPS E POR PADRÃO FALSE
  //ABRIR MODAL
  /////const isOpen = false;
////  const isOpen = true;



    //CONSTANTE DE ESTADO DE TODO CARREGAMENTO DA PAGINA
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
      setIsBrowser(true);
    }, []);
//ESTRUTURAL MODAL - Se tiver aberto quero que faça isso, se for false não faça nada (null)
    const modalWrapper = isOpen? (
      <>
      <div className={styles.modal}>

        <div className={styles.heading}>
          {title}
          <button onClick={onClose}>
            <MdClose className='icon hover'/>
          </button>
        </div>
        {children}
      </div>
        <div className={styles.overlay} onClick={onClose} ></div>
        </>
    ): null; 

    if (isBrowser) {
        return ReactDOM.createPortal(
        //<h1>Modal aberto</h1>,  SUBSTITUIR PELA FUNÇÃO
        modalWrapper,  
          document.getElementById('modal-root')
        );
      } else {
        return null;
      }
    };
    
    export default Modal;