/**ORIGINAL
 * 
 * 
 * import TransactionList from './TransactionList';
import styles from './Transactions.module.scss';

const Transactions = () => {
  return (
    <section className={styles.section}>
      <TransactionList type={'income'} title='Entradas' />
      <TransactionList type={'expense'} title='Despesas' />
    </section>
  );
};

export default Transactions;
 */


/**ESTUDO */

import styles from './Transactions.module.scss'
import TransactionList from '../Transactions/TransactionList'

const Transactions = () => {
    // RETORNAR AS DUAS COLUNAS ENTRADA E SAIDA
       return(
        <section  className={styles.section}>
     
             <TransactionList type={'income'} title='Entradas'/>
            <TransactionList  type={'expense'} title='Despesas'/>
            

           
        </section>
    )
}

export default Transactions;


