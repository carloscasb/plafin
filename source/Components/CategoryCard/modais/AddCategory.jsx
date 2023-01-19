/**
 * ORIGINAL
 * 
 * import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddCategory } from '../../../store/ui-slice';
import { useState } from 'react';
import useAddDoc from '../../../hooks/useAddDoc';

const AddCategory = () => {
  const [title, setTitle] = useState('');
  const [percentage, setPercentage] = useState(0);

  const { isVisible, category } = useSelector((state) => state.ui.addCategory);
  const dispatch = useDispatch();

  const addCategoryHandler = useAddDoc();

  const addCategory = (e) => {
    e.preventDefault();

    if (!title || !percentage) return;

    addCategoryHandler('categorias', {
      title,
      percentage: Number(percentage),
      amount: 0,
    });

    dispatch(toggleAddCategory(null));
    setTitle('');
    setPercentage(0);
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddCategory(null))}
      title='Nova Categoria'>
      <div>
        <form onSubmit={addCategory}>
          <div className={styles['label-input']}>
            <label htmlFor='title' className='p'>
              Título
            </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Essencial'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles['label-input']}>
            <label htmlFor='porcentagem' className='p'>
              Porcentagem alocada
            </label>
            <input
              type='text'
              id='porcentagem'
              name='porcentagem'
              placeholder='%'
              className='max-width'
              onChange={(e) => setPercentage(e.target.value)}
            />
          </div>
          <div className={styles.buttons}>
            <button type='submit' className='btn btn-primary'>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddCategory;
 */



/**ESTUDO */

import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import {  toggleAddCategory } from '../../../store/ui-slice';




import initialState from '../../../store/ui-slice'
import { useState } from 'react';
import useAddDoc from '../../../hooks/useAddDoc'

const AddCategory = () => {

  //ESTADO DOS DADOS DIGITADOS (Queremos ter acesso o que o usuario digitou)
const [title, setTitle]= useState('')
const [porcentage, setPorcentage]= useState(0)

  
  //RESPONSAVEL POR TRAZER OS ESTADOS DOS SlICE
 const { isVisible, category } = useSelector((state) => state.ui.addCategory);
 // console.log(isVisible)
  //console.log(category)


  const dispatch = useDispatch()
// CONST QUE RECEBE A FUNÇÃO QUE VEIO DO HOOK useAddDoc
  const addCategoryHandler = useAddDoc();


  //FUNÇÃO QUE VAI SER EXECUTADA QUANDO O USUARIO ENVIAR FORMULARIO
  const addCategory = (e) => {
    e.preventDefault();
  //VALIDAÇÃO BASICA
    if(!title || !porcentage) return;

    addCategoryHandler('categorias', {
      //title: title,
      title,
      //transformar string em number
      porcentage: Number(porcentage),
      //INCLUIR UM QUANTIDADE
      amount: 0

    });

    dispatch(toggleAddCategory(null));
    setTitle('');
    setPorcentage(0);
  }

    return(
//passar estado de aberto/fechado, close se tiver aberto, titulo e conteudo dentro do modal
        <Modal  isOpen={ isVisible }
        onClose={() => dispatch(toggleAddCategory(null))}
        title='Nova Categoria'
        placeholder="Essencial"> 
            
        <div> 
            <form onSubmit={addCategory}>
                <div className={styles['label-input']}>
                    <label htmlFor="title" className='p'>Titulo</label>
                    <input type="text" id='title' name='title'
                     onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={styles['label-input']}>
                    <label htmlFor="porcentagem" className='p'>Porcentagem Alocada</label>
                    <input type="text" id='porcentagem' name='porcentagem' placeholder='%' /*className='max-width'*/ 
                     onChange={(e) => setPorcentage(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>
                      Salvar
                    </button>
                  
                </div>
            </form>
        </div>

        </Modal>
    )

}

export default AddCategory;