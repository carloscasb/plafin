/**ORIGINAL
 * import { useSelector } from 'react-redux';
import TransactionCard from './TransactionCard';
import styles from './TransactionList.module.scss';

const TransactionList = ({ title, type }) => {
  const list = useSelector((state) => state.app.transactions)
    .filter((transaction) => transaction.type.toLowerCase() === type)
    .sort((a, b) => b.date?.toDate() - a.date?.toDate())
    .slice(0, 8)
    .map((el) => <TransactionCard key={el.id} transaction={el} />);

  return (
    <div className={styles.transactions}>
      <h2>{title}</h2>
      <div>
        <ul className={styles.list}>{list}</ul>
      </div>
    </div>
  );
};

export default TransactionList;
 */


/**ESTUDO */

import styles from './TransactionList.module.scss'
import TransactionCard from './TransactionCard'
import { useSelector } from 'react-redux'
import { title } from 'process';

const TransactionList = ({title, type}) => {

  //PEGAR AS TRANSAÇÕES
  //const list = useSelector((state)=> state.app.transactions) // ASSIM VEM TODAS MISTURADA, VAMOS FAZER FILTRO
  //const list = useSelector((state)=> state.app.transactions).filter(transactions => transactions.type.toLowerCase() === "income")
  //ALEM DE FILTRAR , ORDEMNAR e limitar
  const list = useSelector((state) => state.app.transactions)
    .filter(transactions => transactions.type.toLowerCase() === type)
    .sort((a, b) => b.date?.toDate() - a.date?.toDate())
    .slice(0, 5)
    //CINCO TRANSAÇÔES DE 0 a 5 PARA CADA VAMOS MAPEAR(map) UM <TransactionCard/> para cada elemento
    //passando uma key
    .map(el => <TransactionCard key={el.id} transaction={el} />); //ASSIM PODE SUBSTITUIR os <TransactionCard/> PELA list
    


 // console.log(list)


  // VAI SER A COLUNA PROPRIAMENTE DITA ENTRADA E SAIDA
  return (
    //RETIRAR TODO <li> E TRAZER o TransactionCard.jsx (importando) - 4 transações
    <div className={styles.transactions}>

      <h2>{title}</h2>
      <div>
        <ul className={styles.list}>
          {list}
        </ul>
      </div>
    </div>

  )
}

export default TransactionList;