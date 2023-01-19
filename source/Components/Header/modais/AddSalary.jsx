/***
 * ORIGINAL
 * 
 * import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddSalary } from '../../../store/ui-slice';
import { useState } from 'react';
import useUpdateDoc from '../../../hooks/useUpdateDoc';
import { serverTimestamp } from '@firebase/firestore';
import useAddDoc from '../../../hooks/useAddDoc';

const AddSalary = () => {
  const [amount, setAmount] = useState(0);

  const { isVisible } = useSelector((state) => state.ui.addSalary);
  const { categories } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const addSalaryHandler = useUpdateDoc();
  const addTransactionHandler = useAddDoc();

  const addSalary = (e) => {
    e.preventDefault();

    if (!amount) return;

    categories.forEach((category) => {
      const totalAmount = (Number(amount) * category.percentage) / 100;

      addSalaryHandler('categorias', category.id, {
        amount: category.amount + totalAmount,
      });

      addTransactionHandler('transactions', {
        amount: totalAmount,
        title: `Salário em ${category.title}`,
        type: 'income',
        date: serverTimestamp(),
      });
    });

    dispatch(toggleAddSalary(null));
    setAmount(0);
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddSalary(null))}
      title='Adicionar Salário'>
      <div>
        <form onSubmit={addSalary}>
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
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddSalary;
 */

/** * ESTUDO  */

import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import {toggleAddSalary } from '../../../store/ui-slice';

import initialState from '../../../store/ui-slice'
import { useState } from 'react';
import useUpdateDoc from '../../../hooks/useUpdateDoc';
import AddAmount from '../../CategoryCard/modais/AddAmount';
import { serverTimestamp } from '@firebase/firestore';
import useAddDoc from '../../../hooks/useAddDoc';


const AddSalary = () => {

  //ESTADO DOS DADOS DIGITADOS (Queremos ter acesso o que o usuario digitou, somente valor)
const [amount, setAmount]= useState(0);
  
  //RESPONSAVEL POR TRAZER OS ESTADOS DOS SlICE
  const { isVisible } = useSelector((state) => state.ui.addSalary);
 // console.log(isVisible)
  //console.log(category)

//PEGAR TODAS AS CATEGORIAS 
const {categories} = useSelector((state) => state.app);

  const dispatch = useDispatch();

  // CONST QUE RECEBE A FUNÇÃO QUE VEIO DO HOOK useAddDoc
  const addSalaryHandler = useUpdateDoc();
   //ADICIONAR UMA TRANSAÇÃO(usa o useUpadeDoc) - import useAddDoc
   const addTransactionHandler = useAddDoc();

// CONST QUE RECEBE A FUNÇÃO QUE VEIO DO HOOK 
const addSalary=(e)=>{
  e.preventDefault();
   //VALIDAÇÃO BASICA
   if(!amount) return;

   //FAZER UM LOOP EM TODAS CATEGORIAS(fazer uma função em cada categoria)
   categories.forEach((category) => {
    //10% como por exemplo na categoria x (VAMOS MULTIPLICAR O VALOR PELA PORCENTAGEM E DIVIDIR POR 100)
    const totalAmount =(Number(amount) * category.porcentage )/100;
    //PASSAMOS A FUNÇÃO, que trata as categorias, o id das categorias e os campos
    addSalaryHandler('categorias', category.id, {
      amount: category.amount + totalAmount,
    });

    //ATUALIZAR(adicionar uma) AS TRANSAÇÕES NO CARD (aparecer no index)
//FUNÇÃO DE ADICIONAR TRANSAÇÃO (SALARIO) /SAI INCLUINDO CONFORME AS PROPORÇÕES DE CADA CATEGORIA
addTransactionHandler ('transactions', {
  amount: totalAmount,
  title: `Salário em ${category.title}`,
  type: 'income',
  date: serverTimestamp(),
});
   
   });

   //SAI DO LAÇO E FECHA MODAL, LIMPA CAMPO
 dispatch(toggleAddSalary(null));
 setAmount(0);

};

    return(
//passar estado de aberto/fechado, close se tiver aberto, titulo e conteudo dentro do modal
        <Modal  isOpen={ isVisible }
        onClose={() => dispatch(toggleAddSalary(null))}
        title='Adicionar Salário'
        placeholder="Essencial"> 
            
        <div> 
            <form onSubmit={addSalary}>
                <div className={styles['label-input']}>
                    <label 
                    htmlFor="amount" 
                    className='p'>
                        Valor
                    </label>
                    <input type="text" id='amount' name='amount' placeholder='R$' /*className='max-width'*/
                    onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>
                      Adicionar
                    </button>
                  
                </div>
            </form>
        </div>

        </Modal>
    )

}

export default AddSalary;