
/**
 * ORIGINAL
 * 
 * 
 * import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditCategory } from '../../../store/ui-slice';
import useUpdateDoc from '../../../hooks/useUpdateDoc';
import useDeleteDoc from '../../../hooks/useDeleteDoc';
import { useState } from 'react';

const EditCategory = () => {
  const [title, setTitle] = useState('');
  const [percentage, setPercentage] = useState(0);

  const { isVisible, category } = useSelector((state) => state.ui.editCategory);
  const dispatch = useDispatch();

  const editCategoryHandler = useUpdateDoc();
  const deleteCategoryHandler = useDeleteDoc();

  const editCategory = (e) => {
    e.preventDefault();

    if (!title || !percentage) return;

    editCategoryHandler('categorias', category.id, { title, percentage });

    dispatch(toggleEditCategory(null));
    setTitle('');
    setPercentage(0);
  };

  const deleteCategory = () => {
    deleteCategoryHandler('categorias', category.id);
    dispatch(toggleEditCategory(null));
    setTitle('');
    setPercentage(0);
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleEditCategory(null))}
      title='Editar'>
      <div>
        <form onSubmit={editCategory}>
          <div className={styles['label-input']}>
            <label htmlFor='title' className='p'>
              Título
            </label>
            <input
              type='text'
              id='title'
              name='title'
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
            <button
              type='button'
              className='btn btn-secondary'
              onClick={deleteCategory}>
              Excluir
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditCategory;
 */


/**ESTUDO */

import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import {  toggleEditCategory } from '../../../store/ui-slice';




import initialState from '../../../store/ui-slice'
import useUpdateDoc from '../../../hooks/useUpdateDoc';
import useDeleteDoc from '../../../hooks/useDeleteDoc';
import { useState } from 'react';


const EditCategory = () => {
  //ESTADO DOS DADOS DIGITADOS (Queremos ter acesso o que o usuario digitou)
const [title, setTitle]= useState('')
const [porcentage, setPorcentage]= useState(0)
  
  //RESPONSAVEL POR TRAZER OS ESTADOS DOS SlICE
 const { isVisible, category } = useSelector((state) => state.ui.editCategory);
 // console.log(isVisible)
  //console.log(category)


  const dispatch = useDispatch()

//CHAMA O HOOK DE ATUALIZAÇÃO (edição)
const editCategoryHandler= useUpdateDoc();
//CHAMA O HOOK DE EXCLUSÃO
const deleteCategoryHandler = useDeleteDoc();

  const editCategory = (e) => {
    e.preventDefault;

    if (!title || !porcentage) return;

   // editCategoryHandler('categorias', category.id, { title:title, porcentage:porcentage });
   // PODE SER
   editCategoryHandler('categorias', category.id, { title, porcentage });

   dispatch(toggleEditCategory(null));
   setTitle('');
   setPorcentage(0);

  };
//FUNÇÃO PARA EXCLUSÃO , chamada no onclick do botão EXCLUIR
  const deleteCategory = () => {
    deleteCategoryHandler('categorias', category.id)
    dispatch(toggleEditCategory(null));
    setTitle('');
    setPorcentage(0);
  }

    return(
//passar estado de aberto/fechado, close se tiver aberto, titulo e conteudo dentro do modal
        <Modal  isOpen={ isVisible }
        onClose={() => dispatch(toggleEditCategory(null))}
        title='Editar'> 
       
        <div> 
            <form onSubmit={editCategory}>
                <div className={styles['label-input']}>
                    <label htmlFor="title" className='p'>Titulo</label>
                    <input type="text" id='title' name='title'
                    onChange={(e) => setTitle (e.target.value)}
                    />
                </div>
                <div className={styles['label-input']}>
                    <label htmlFor="porcentagem" className='p'>Porcentagem Alocada</label>
                    <input type="text" id='porcentagem' name='porcentagem' placeholder='%' /*className='max-width'*/ 
                     onChange={(e) => setPorcentage (e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>
                      Salvar
                    </button>
                    <button type='submit' className='btn btn-secondary' onClick={deleteCategory}>
                      Ecluir
                    </button>
                </div>
            </form>
        </div>

        </Modal>
    )

}

export default EditCategory;