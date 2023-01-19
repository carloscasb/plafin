
/**ORIGINAL
 * 
 * import styles from './CategoryCard.module.scss';
 import { TbPencil } from 'react-icons/tb';
import useGetCurrency from '../../hooks/useGetCurrency';
import CategoryMenu from './CategoryMenu';
import useMenu from '../../hooks/useMenu';

const CategoryCard = ({ data }) => {
  const { title, amount, percentage } = data;
  const [isVisible, toggleMenuHandler] = useMenu();

  const formatedAmount = useGetCurrency(amount);

  return (
    <div className={styles.card}>
      <div className={styles.edit}>
        <TbPencil className='icon hover' onClick={toggleMenuHandler} />
        {isVisible && <CategoryMenu toggleMenuHandler={toggleMenuHandler} data={data}/>}
      </div>
      <h2>{title}</h2>
      <h3>{formatedAmount}</h3>
      <h4>Alocado: {percentage}%</h4>
    </div>
  );
};
*/

/**ESTUDO */
import styles from './CategoryCard.module.scss';
 import { TbPencil } from 'react-icons/tb';
 import useGetCurrency from '../../hooks/useGetCurrency';
 //import CardMenu from '../UI/CardMenu'
 import CategoryMenu from '../CategoryCard/CategoryMenu'
import { useState } from 'react';
import useMenu from '../../hooks/useMenu';

const CategoryCard = ({data}) => {
  //PARA PASSAR DINAMICAMENTE VAMOS FAZER UMA CONSTANTE data (de dados)
  //E PASSA OS VALORES nos h2, h3, h4
  const { title, amount, porcentage } = data;
 // CRIAR um ESTADO DE VISIBILIDADE - inicialmente false
///////// const [isVisible, setIsVisible] = useState(false);
 //UMA FUNÇÃO PARA ALTERNAR VISIBILDADE (toda vez que apertar o botão Edit)
//const toggleMenuHandler = () => setIsVisible(!isVisible);
// PEGAR EM UM CONSTANTE ELEMENTOS DO HOOKS QUE IMPORTAR (importanto acima)
const [isVisible, toggleMenuHandler] = useMenu()


/** 
  const currency = new Intl.NumberFormat ('pt-BR', {
 style: "currency",
 currency: "BRL"
  }).format(amount)
//AGORA EM VEZ DE PASSAR O amount PASSAMOS O currency
*/

//AGORA VEIO DO HOOKS E NO RETURN PASSAMOS A CONST formatedAmount
const formatedAmount = useGetCurrency(amount);
    return (
        <div className={styles.card}>
  <div className={styles.edit}  >
    <TbPencil className='icon hover' onClick={toggleMenuHandler}/>
    {isVisible && <CategoryMenu toggleMenuHandler={toggleMenuHandler} data={data} />}
     
    </div>
    <h2>{title}</h2>
    <h3>{formatedAmount}</h3>
    <h4>Alocado: {porcentage}%</h4>

</div>

    )

}

export default CategoryCard;