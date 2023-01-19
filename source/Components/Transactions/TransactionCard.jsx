/**
 * ORIGINAL
 * 
 * 
 import styles from './TransactionCard.module.scss';
import { TbCurrencyDollar } from 'react-icons/tb';
import useGetCurrency from '../../hooks/useGetCurrency';
import useGetDate from '../../hooks/useGetDate';

const TransactionCard = ({ transaction }) => {
  const { title, date, type, amount } = transaction;

  const formatedAmount = useGetCurrency(amount);
  const formatedDate = useGetDate(date);

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <div className={`${styles.icon} ${styles[type]}`}>
          <TbCurrencyDollar />
        </div>
        <div>
          <h3>{title}</h3>
          <h4>{formatedDate}</h4>
        </div>
      </div>
      <div className={styles.price}>
        <span className={styles[type]}>{formatedAmount}</span>
      </div>
    </li>
  );
};

export default TransactionCard;
 */


/**ESTUDO */

import { transaction } from '@firebase/firestore'

import { TbCurrencyDollar } from 'react-icons/tb';
import useGetCurrency from '../../hooks/useGetCurrency';
import styles from './TransactionCard.module.scss'
import useGetDate from '../../hooks/useGetDate';

const TransactionCard = ({transaction}) => {
//RECEBE O Transaction COMO PARAMETRO E O QUE QUEREMOS DESSE Transaction
const {title, date, amount,  type} = transaction;
//Substituir os h3, h4, span e usar o type para saber se é income ou expense

//FORMATAR O AMOUNT USANDO O HOOK useGetCurrency com o paramentro amount
//E PASSAR NA FUNÇÃO O formatAmount (la em baixo)
const formatAmount= useGetCurrency(amount);

//FORMATAR O DATE(data) USANDO O HOOK useGetDate com o paramentro date
//E PASSAR NA FUNÇÃO O formatedDate (la em baixo)
const formatDate = useGetDate(date);


    return (
        <li className={styles.item}>
            <div className={styles.content}>
                <div className={`${styles.icon} ${styles[type]}`}>
                    <TbCurrencyDollar/>
                </div>
                <div>
                    <h3>{title}</h3>
                    <h4>{formatDate}</h4>
                </div>
            </div>
            <div className={styles.price}>
                <span className={styles[type]} >{formatAmount}</span>
            </div>
        </li>

    )
}

export default TransactionCard;
