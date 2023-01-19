/*** ORIGINAL 
 * 
 * import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSubtractAmount } from '../../../store/ui-slice';
import { useState } from 'react';
import useUpdateDoc from '../../../hooks/useUpdateDoc';
import useAddDoc from '../../../hooks/useAddDoc';
import { serverTimestamp } from '@firebase/firestore';

const SubtractAmount = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  const { isVisible, category } = useSelector(
    (state) => state.ui.subtractAmount
  );
  const dispatch = useDispatch();

  const subtractAmountHandler = useUpdateDoc();
  const addTransactionHandler = useAddDoc();

  const subtractAmount = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    subtractAmountHandler('categorias', category.id, {
      amount: category.amount - Number(amount),
    });

    addTransactionHandler('transactions', {
      amount: Number(amount),
      title,
      type: 'expense',
      date: serverTimestamp(),
    });

    dispatch(toggleSubtractAmount(null))
    setTitle('');
    setAmount(0);
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleSubtractAmount(null))}
      title='Descontar'>
      <div>
        <form onSubmit={subtractAmount}>
          <div className={styles['label-input']}>
            <label htmlFor='title' className='p'>
              Título
            </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Ex: gasolina do carro'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles['label-input']}>
            <label htmlFor='amount' className='p'>
              Valor
            </label>
            <input
              type='text'
              id='amount'
              name='amount'
              placeholder='R$'
              className='max-width'
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className={styles.buttons}>
            <button type='submit' className='btn btn-primary'>
              Descontar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SubtractAmount;
*/

/**ESTUDO */
import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSubtractAmount } from '../../../store/ui-slice';
import { useState } from 'react';


import initialState from '../../../store/ui-slice'
import useUpdateDoc from '../../../hooks/useUpdateDoc';
import useAddDoc from '../../../hooks/useAddDoc';
import { serverTimestamp } from '@firebase/firestore';


const SubtractAmount = () => {
//FAZER ESTADOS INICIAS DO TITLE E DO AMOUNT
const [title, setTitle]=useState('')
const [amount, setAmount]=useState(0)
 
  //RESPONSAVEL POR TRAZER OS ESTADOS DOS SlICE
const { isVisible, category } = useSelector((state) => state.ui.subtractAmount);
  
 //console.log(category)


  const dispatch = useDispatch()

  //CHAMAR HOOK

  const subtractAmountHandler= useUpdateDoc();

  //SUBTRAIR UMA TRANSAÇÃO(usa o useUpadeDoc) - import useAddDoc
  const addTransactionHandler = useAddDoc();

  const subtractAmount = (e) => {

e.preventDefault();

if(!title || !amount) return;

//PASSAMOS A FUNÇÃO
subtractAmountHandler('categorias', category.id, {
//ATUALIZAR O CAMPO amount (diminuindo do valor que digitamos)
  amount: category.amount - Number(amount),
});

//ATUALIZAR(subtrair uma) AS TRANSAÇÕES NO CARD (aparecer no index)
//FUNÇÃO DE SUBTRAIR TRANSAÇÃO
addTransactionHandler ('transactions', {
  amount: Number(amount),
  title,
  type: 'expense',
  date: serverTimestamp(),
});

//console.log(category.title, category.id)
setTitle('')
setAmount(0)
dispatch(toggleSubtractAmount(null))

 };

    return(
//passar estado de aberto/fechado, close se tiver aberto, titulo e conteudo dentro do modal
        <Modal  isOpen={ isVisible }
        onClose={() => dispatch(toggleSubtractAmount(null))}
        title='Descontar'> 
       
        <div> 
            <form onSubmit={subtractAmount}>
                <div className={styles['label-input']}>
                    <label htmlFor="title" className='p'>Titulo</label>
                    <input type="text" id='title' name='title' placeholder='Gasolina do Carro'
                     //PEGA O QUE ESTA SENDO DIGITADO
                     onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className={styles['label-input']}>
                    <label htmlFor="amount" className='p'>Valor</label>
                    <input type="text" id='amount' name='amount' placeholder='R$' /*className='max-width'*/ 
                    //PEGA O QUE ESTA SENDO DIGITADO
                    onChange={(e)=>setAmount(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>
                        Descontar
                    </button>
                </div>
            </form>
        </div>

        </Modal>
    )

}

export default SubtractAmount;