import CategoryCard from "./CategoryCard";
import styles from './AllCards.module.scss'
import NoCard from './NoCard'
import AddAmount from './modais/AddAmount'
import SubtractAmount from './modais/SubtractAmount';
import TransferAmount from './modais/TransferAmount';
import EditCategory from './modais/EditCategory';
import AddCategory from './modais/AddCategory';
import { useEffect, useState } from "react";
import { collection,  doc, onSnapshot } from "@firebase/firestore";
import db from '../../firebase'
import useGetDocs from '../../hooks/useGetDocs'
import { useSelector } from "react-redux";


//FAZER UM ARRAY (conjunto) DE DADOS (simula um banco de dados)
//const DUMMY_DATA = [
 // {id: 1, title: 'Essencial', amount: 400, percentage: 20},
 // {id: 2, title: 'Investimento', amount: 800, percentage: 50},
 // {id: 3, title: 'Pessoal', amount: 700, percentage: 30},
  
//]

const AllCards = () => { 

/**EXCLUIREMOS E LEVAMOS PARA O HOOK useGetDocs 

  ////PARA SUBSTITUIR O DUMMY_DATA- CRIAREMOS UM STATE PARA ARMAZENAR OS DOCUMENTOS, VAI TER INICIALMENTE VAZIO
const [documents, setDocuments] = useState([])

///// AGORA PEGAR NOSSA COLEÇÃO, FAREMOS ISSO COM UMA FUNÇÂO ESPECIFICA DO FIRESTORE(importar)
//// QUEREMOS PEGAR db, e nossa coleção (categorias) ---Não esquecer de importar do from '../../firebase'
 const coll = collection(db, 'categorias' );

////PEGAR OS DOCUMENTOS (que serão alterados constantemente) POR ISSO MONITORAR O SDOCUMENTOS PARA QUE
//// CADA ALTERAÇÃO TER UMA RESPOSTA(atualização no array do documents), FAREMOS POR usseEffct

useEffect (()=>{
//PEGAR DOCUMENTOS pelo get e no onSnapshot traz as atualizações (monitorando o coll e passar uma atualização
///// s )
const getDocs= onSnapshot(coll,snapshot=>{
  //MAPEAR  AS ATUALIZAÇÂO dos documents com  (map) e retornar o documentos (doc => doc); 
  // melhora se for (doc => doc.data()); E FICA COMPLETO COM ID SE FOR (doc => ({...doc.data()}));
  //const data = snapshot.docs.map(doc => ({...doc.data()}));
  ESSE É O CERTO ACHEI ALGO @@@@@ const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id})); 3:15 horas
  //ARMAZENAR OS DADOS NOS DOCUMENTS
  setDocuments(data)
} );
//TESTE
//console.log(documents)
////VEJA QUE A FUNÇÂO getDocs não estava sendo usada
/////vamos usar-la DENTRO DO RETORNO DO USSEEFCT (para ser executada somente no amout do documento)
 
return( ) =>{
  getDocs();
 };
 
}, [])

/////teste
/////////console.log(documents)
*/

//CHAMAREMOS OS DADOS AGORA PELA FUNÇÃO useGetDocs DO HOOK, E ESCOLHEREMOS A COLEÇÃO ESPECIFICA(DESEJAR)
//NÃO ESQUECER DE IMPORTAR LA EM CIMA
////////const documents = useGetDocs('categorias') //// substituido por ums state global de categories
//const categories = useSelector(state => state.app.categories ) //vamos la no state e do state vamos pela o app de categories
//COMO OS NOME DA CONSTANTE É IGUAL AO DA COLEÇÃO (categories) SIMPLIFICAMOS
const {categories} = useSelector(state => state.app )


//VAMOS PECORRER ESSE BANCO DE DADOS atraves de um map numa const Card
// AS category vão ser o id, title, amounte, porcentage
//const Cards =documents.map(category => <CategoryCard key={category.id} data={category}/>)
const Cards =categories.map(category => <CategoryCard key={category.id} data={category}/>) 
// E COLOCA A CONSTANTE Cards No RETORNODA SECTION Substitituindo as <CategoryCard/>

    return (
      <>
    
       <AddAmount/>
       <SubtractAmount />
       <TransferAmount/>
       <EditCategory/>
       <AddCategory />
        <section className={styles.section}>
          {Cards}
          <NoCard />

        </section>
       </>
    );
    
      }
export default AllCards;