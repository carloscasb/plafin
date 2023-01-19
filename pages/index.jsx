/**ORIGINAL
 * 
 * import { useDispatch } from 'react-redux';
import AllCards from '../source/Components/CategoryCard/AllCards';
import Charts from '../source/Components/Charts/Charts';
import Header from '../source/Components/Header/Header';
import Transactions from '../source/Components/Transactions/Transactions';
import useGetDocs from '../source/hooks/useGetDocs';
import { setCategories, setTransactions } from '../source/store/app-slice';
import styles from '../styles/initial.module.scss';

export default function Home() {
  const dispatch = useDispatch();
  dispatch(setCategories(useGetDocs('categorias')));
  dispatch(setTransactions(useGetDocs('transactions')));

  return (
    <main className={styles.main}>
      <Header />
      <AllCards />
      <Charts />
      <Transactions />
    </main>
  );
}
 */

/**ESTUDO */
//import { Chart } from 'chart.js';
import { useDispatch } from 'react-redux';
import AllCards from '../source/Components/CategoryCard/AllCards';

//import Charts from '../source/Components/Charts/Charts';
import Header from '../source/Components/Header/Header';
import Transactions from '../source/Components/Transactions/Transactions';
import useGetDocs from '../source/hooks/useGetDocs';
import { setCategories, setTransactions } from '../source/store/app-slice';
import styles from '../styles/initial.module.scss';
import Charts from '../source/Components/Charts/Charts'


export default function Home() {

 
  //PASSAR AS CATEGORIAS pelo dispatch
  //const dispatch = useDispatch();
  //const categories = setGetDocs('categories')  /// coloquei dentro do 
  ///dispatch(setCategories('categorias'));
  //DANDO UM DISPATCH NO setcategories, QUE È UM REDUCERS QUE PEGA O QUE O USuARIO PASSAR E POPULA 
  //E ESTE ESTA PASSANDO UM HOOK QUE PEGAR A COLEÇÃO COTEGORIA
  //(substituindo a constante categories no dispatch)
  const dispatch = useDispatch();
  //PEGAR/POPULAR A TABELA categorias.
  dispatch(setCategories(useGetDocs('categorias')));
  //PEGAR/POPULAR A TABELA transactions.
  dispatch(setTransactions(useGetDocs('transactions')));
  return (
    <main className={styles.main}  >
    <Header/>
    <AllCards/>
    <Charts/>
    <Transactions/>
   
   </main>
  )
}
