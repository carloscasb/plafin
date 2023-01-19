/**ORIGINAL 
import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddAmount } from '../../../store/ui-slice';
import { useState } from 'react';
import useUpdateDoc from '../../../hooks/useUpdateDoc';
import useAddDoc from '../../../hooks/useAddDoc';
import { serverTimestamp } from '@firebase/firestore';

const AddAmount = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  const { isVisible, category } = useSelector((state) => state.ui.addAmount);
  const dispatch = useDispatch();

  const addAmountHandler = useUpdateDoc();
  const addTransactionHandler = useAddDoc();

  const addAmount = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    addAmountHandler('categorias', category.id, {
      amount: category.amount + Number(amount),
    });

    addTransactionHandler('transactions', {
      amount: Number(amount),
      title,
      type: 'income',
      date: serverTimestamp(),
    });

    setTitle('');
    setAmount(0);
    dispatch(toggleAddAmount(null));
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddAmount(null))}
      title='Adicionar'>
      <div>
        <form onSubmit={addAmount}>
          <div className={styles['label-input']}>
            <label htmlFor='title' className='p'>
              Título
            </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Ex: venda do teclado'
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
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddAmount;

*/

/** ESTUDO */

import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddAmount } from '../../../store/ui-slice';
import { useState } from 'react';
import  {doc, serverTimestamp, updateDoc } from '@firebase/firestore'
import useUpdateDoc from '../../../hooks/useUpdateDoc'
import useAddDoc from '../../../hooks/useAddDoc';

import initialState from '../../../store/ui-slice'
import db from '../../../firebase';
import { async } from '@firebase/util';


const AddAmount = () => {

//ESTADO DOS DADOS DIGITADOS (Queremos ter acesso o que o usuario digitou)
const [title, setTitle]= useState('')
const [amount, setAmount]= useState(0)


  
  //RESPONSAVEL POR TRAZER OS ESTADOS DOS SlICE
 const { isVisible, category } = useSelector((state) => state.ui.addAmount);
 // console.log(isVisible)
  //console.log(category)


  const dispatch = useDispatch()

  //VAMOS CHAMAR O HOOK FORA DA FUNÇÃO addAmount - importar useUpdateDoc
  // O addAmountHandler ja é uma função que pode ser chamada dentro da função addAmount, abaixo da condicional
   const addAmountHandler = useUpdateDoc();       //NIVEL B0

   //ADICIONAR UMA TRANSAÇÃO(usa o useUpadeDoc) - import useAddDoc
   const addTransactionHandler = useAddDoc();



  //FUNÇÃO ENVIAR FORMULARIO, que colocar no onSubmit do form para ser executada
  ///////////////DANDO ERRO -ELE DIZ QUE NÃO È UMA FUNÇÃO 
  //tirei o async
  const addAmount =  (e) => {                   //  NIVEL B1 - //
    //SE USAR await tem que declara async
  // const addAmount = async  (e) => {                //  NIVEL A1 - //
    //NÃO ATUALIZAR PAGINA
    e.preventDefault();

    // VALIDAÇÃO :se não existir dados(title ou amount retorne)
    if (!title || !amount) return;

     // ADICIONAR O VALOR DIGITADO NA CATEGORIA? QUEREMOS ATUALIZAR POIS O VALOR JA EXISTE, E O FIRESTORE 
    //TEM UMA FUNÇÃO ESPECIFICA PARA ISSO

    //SELECIONAR QUAL DOCUMENTO QUEREMOS ATUALIZAR (importar)
    // queremos o banco de dados(db), a coleção(categorias), e o documento especifico da categoria (categoryid)
  /////////  //DANDO ERRO -ELE DIZ QUE NÃO È UMA FUNÇÃO ---VAI SER LEVADO PARA O HOOK
  // const categoryDoc = doc(db, 'categorias', category.id )      //NIVEL A - //
  /////////  // ATUALIZAR  (então precisamos de um await e la emcima de um async), PASSANDO A CATEGORIA E OS CAMPOS
  /////////  // QUE DESEJAMOS
 //  await updateDoc(categoryDoc,{                              //NIVEL A2 - (função nativa do Firebase que atualiza Doc) 
  //   amount: category.amount + Number(amount),               //NIVEL A3 - (Os campos para atualização) 
/////////
  /////////  });

// PEGA NA FUNÇÃO (que passa o hook useUpdateDoc) O QUE QUEREMOS (categorias, id da categoria, e os campos)
  addAmountHandler('categorias', category.id, {                      //NIVE B2
    amount: category.amount + Number(amount),                         //NIVE B3
    });

//ATUALIZAR(adionar uma) AS TRANSAÇÕES NO CARD (aparecer no index)
//FUNÇÃO DE ADDICIONAR TRANSAÇÃO
addTransactionHandler ('transactions', {
  amount: Number(amount),
  title,
  type: 'income',
  date: serverTimestamp(),
});

    //LIMPAR OS CAMPOS
    setTitle('')
    setAmount(0)
    //FECHAR MODAL
    dispatch(toggleAddAmount(null));
  };
//console.log(category)
    return(
//passar estado de aberto/fechado, close se tiver aberto, titulo e conteudo dentro do modal
        <Modal  isOpen={ isVisible }
        onClose={() => dispatch(toggleAddAmount(null))}
        title='Adicionar'> 
       
        <div> 
        <form onSubmit={addAmount}>
                <div className={styles['label-input']}>
                    <label htmlFor="title" className='p'>Titulo</label>
                    <input 
                    type="text" 
                    id='title' 
                    name='title'
                    placeholder='Venda de Teclado'
                    //EVENTO (o que(valor) o usuario esta digitando)
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={styles['label-input']}>
                    <label htmlFor="amount" className='p'>Valor</label>
                    <input type="text" id='amount' name='amount' placeholder='R$' /*className='max-width'*/ 
                    //EVENTO (o que(valor) o usuario esta digitando)
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

export default AddAmount;