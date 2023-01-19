import styles from './NoCard.module.scss';
import { TbPlus } from 'react-icons/tb';
import { toggleAddCategory } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';



const NoCard = () => {
    // IMPORTA O DISPATCH PARA FUNCIONAR O ONCLIK
    const dispatch = useDispatch();
  //NÃO PRECISA PASSAR DADOS (data) PODE PASSAR null
    return (
      <div className={styles['no-card']} onClick={() => dispatch(toggleAddCategory(null))} >
        <TbPlus className='icon' />
      </div>
    );
  };
  
  export default NoCard;