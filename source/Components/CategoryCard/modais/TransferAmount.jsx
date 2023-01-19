/**
 * ORIGINAL
 * import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTransferAmount } from '../../../store/ui-slice';
import { useEffect, useState } from 'react';
import useUpdateDoc from '../../../hooks/useUpdateDoc';

const TransferAmount = () => {
  const [options, setOptions] = useState([]);
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState(0);

  const { categories } = useSelector((state) => state.app);

  const { isVisible, category } = useSelector(
    (state) => state.ui.transferAmount
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const options = categories
      .map((category) => category.title)
      .filter((title) => title !== category?.title);

    setOptions(options);
    setDestination(options[0]);
  }, [categories, category?.title]);

  const transferAmountHandler = useUpdateDoc();

  const transferAmount = (e) => {
    e.preventDefault();

    if (!amount || !destination) return;

    const destinationCategory = categories.find(
      (category) => category.title === destination
    );

    transferAmountHandler('categorias', category.id, {
      amount: category.amount - Number(amount),
    });

    transferAmountHandler('categorias', destinationCategory.id, {
      amount: destinationCategory.amount + Number(amount),
    });

    dispatch(toggleTransferAmount(null));
    setAmount(0);
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleTransferAmount(null))}
      title='Transferir'>
      <div>
        <form onSubmit={transferAmount}>
          <div className={styles['label-input']}>
            <p>De</p>
            <p className='caption'>{category?.title ?? 'não encontrado'}</p>
          </div>
          <div className={styles['label-input']}>
            <label htmlFor='destination'>Para</label>
            <select
              name='destination'
              id='destination'
              className='max-width'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}>
              {options.map((option, i) => {
                return (
                  <option key={i} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
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
              Transferir
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default TransferAmount;
 */

/**ESTUDO */



import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss'
import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react';

import initialState, { toggleTransferAmount } from '../../../store/ui-slice'
import { title } from 'process';
import useUpdateDoc from '../../../hooks/useUpdateDoc';





const TransferAmount = () => {
  
  //A ORIGEM É A PROPRIA CATEGORY
  //VAMOS CRIAR O ESTADO DO DESTINO
  const [destination, setDestination]=useState('');
  //VAMOS CRIAR O ESTADO DO VALOR
  const [amount, setAmount]=useState(0);
   //VAMOS CRIAR O ESTADO DAS OPTION
   const [options, setOptions]=useState([]);
  
  
  
//  //CHAMAR TODAS AS CATEGORIAS
 const {categories} = useSelector(state => state.app)
//  
//  //RESPONSAVEL POR TRAZER OS ESTADOS DOS SlICE
  const { isVisible, category } = useSelector((state) => state.ui.transferAmount);
//  //console.log(isVisible)
//  //console.log(category)

  const dispatch = useDispatch()
//
//  //DEFINIR AS OPTION QUANDO O COMPONENTE FOR CARREGADO
  useEffect(() => {
//    //MAPEAR AS CATEGORIAS /// GERA UMA ARRAY COM O TITULO DE CADA CATEGORIA - O QUE ESTA 
   const options = categories
    .map(category => category.title) // todos os titulos
   .filter(title => title !== category?.title ) //filtrar titulos diferentes da categoria atual
////POPULAR OPTION COM AS OPÇÕES - MENOS A QUE CLICAMOS (escolhemos)
   setOptions(options)
   //FIXAR O PRIMEIRO(inicial) OPTIONS NO SELECT (SERÁ O OPTION POSIÇÃO 0) E COLOCAR O  value={destination}
   //NAS PROPRIEDADE DO SELECT
   setDestination(options[0]);
     }, [categories, category?.title])
//console.log(options)

//CHAMAR O useUpateDoc e colocar num função (ISSO QUE ESTA CAUSANDO O ERROXXXXXXX) 
//E COLOCAR DENTRO DA FUNÇÃO QUE ENVIA O FORMULARIO (depois da condicional)
const transferAmountHandler = useUpdateDoc();

//FUNÇÃO QUE VAI ENVIAR FORMULARIO
const transferAmount = (e) => {
e.preventDefault()
//CONDICIONAL -----O DESTINATIOM SEMPRE VAI EXISTIR
if( !amount || !destination) return;
//ACHAR O ID DA CATEGORIA DE DESTINO, LOGO A CATEGORIA
//Procurar categoria que tenha o titulo exatemente igual ao destination
const destinationCategory = (categories.find
  (category => category.title === destination))

//SUBTRAIR DA CATEGORIA DE ORIGEM
transferAmountHandler('categorias', category.id, {
  amount: category.amount - Number(amount)
})

//ADICIONAR ESSE VALOR NA CATEGORIA DE DESTINO
//O ID é da categoria encontrada
transferAmountHandler('categorias', destinationCategory.id, {
  amount: destinationCategory.amount + Number(amount)
} )

//FECHAR O MODAL
dispatch(toggleTransferAmount(null));
//LIMPAR OS CAMPOS
setAmount(0);

}

    return(
//passar estado de aberto/fechado, close se tiver aberto, titulo e conteudo dentro do modal
//RETIRAR OS OPTIONS e substituir pela função e NO paragrafo <p> pode colocar o objeto {category?.title}
//pois ele pode não existir por isso ?
//FUNÇÃO onSubmit={transferAmount} NO FORM PARA ENVIAR
        <Modal  isOpen={isVisible}
        onClose={() => dispatch(toggleTransferAmount(null))}
        title='Transferir'> 
       
        <div> 
            <form onSubmit={transferAmount}> 
                <div className={styles['label-input']}>
                    <p>De</p>
                    
                    <p className='caption'>{category?.title ?? 'Não encontrado'}</p> 
                </div> 
                <div className={styles['label-input']}>
                   
                    <label htmlFor="destination" >Para</label>
                    <select name="destination" id="destination" className='max-width' 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}>
                    {options.map((option, i) => {
                      return(
                        <option key={i} value={option}>
                          {option}
                        </option>
                      )
                    })}
                    </select>
                </div>
                <div className={styles['label-input']}>
                    <label htmlFor="amount" className='p'>Valor</label>
                    <input type="text" id='amount' name='amount' placeholder='R$' /*className='max-width'*/
                    onChange={(e) =>  setAmount (e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>
                    Transferir
                    </button>
                </div>
            </form>
        </div>

        </Modal>
    )

}

export default TransferAmount;

