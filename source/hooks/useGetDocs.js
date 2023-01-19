/**ORIGINAL
 * PEGAR OS DADOS DO BACKEND
 * import { useState, useEffect } from 'react';
import { collection, onSnapshot } from '@firebase/firestore';
import db from '../firebase';

const useGetDocs = (collectionName) => {
  const [documents, setDocuments] = useState([]);
  const coll = collection(db, collectionName);

  useEffect(() => {
    const getDocs = onSnapshot(coll, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDocuments(data);
    });

    return () => {
      getDocs();
    };
  }, []);

  return documents;
};

export default useGetDocs;
 */

/**ESTUDO PEGAR OS DADOS DO BACKEND*/
//TROUXE DO ALLCARDS

///MAS LOGICO QUE VAMOS COLOCAR DENTRO DE UM COMPONENTE(useGetDocs)

//FAZER TODAS IMPORTAÇÕES NECESSARIAS
import { useState, useEffect } from 'react';
import { collection, onSnapshot } from '@firebase/firestore';
import db from '../firebase';
//CRIAR COMPONENTE useGetDocs por arrayfuction
const useGetDocs = (collectionName) =>{
    //COLOCAR O QUE VEIO DO ALLCARDS ###

    ////PARA SUBSTITUIR O DUMMY_DATA- CRIAREMOS UM STATE PARA ARMAZENAR OS DOCUMENTOS, VAI TER INICIALMENTE VAZIO
 const [documents, setDocuments] = useState([])

 ///// AGORA PEGAR NOSSA COLEÇÃO, FAREMOS ISSO COM UMA FUNÇÂO ESPECIFICA DO FIRESTORE(importar)
 //// QUEREMOS PEGAR db, e nossa coleção (categorias) ---Não esquecer de importar do from '../../firebase'
 /////////////////////const coll = collection(db, 'categorias' );
 
 //PARA MELHORAR E PEGAR OS DOCUMENTOS DE FORMAS ESPECIFICA(PARTICULAR) USAREMOS O collectionName(PROPRIEDADE)
 //E USAMOS COMO PARAMENTO NA FUNÇÃO useGetDocs, E LA ONDE CHAMAREMOS OS DADOS USAREMOS A COLECÃO QUE DESEJAMOS
 const coll = collection(db, collectionName);
 ////PEGAR OS DOCUMENTOS (que serão alterados constantemente) POR ISSO MONITORAR OS DOCUMENTOS PARA QUE
 //// CADA ALTERAÇÃO TER UMA RESPOSTA(atualização no array do documents), FAREMOS POR usseEffct
  useEffect (()=>{
 //PEGAR DOCUMENTOS pelo get e no onSnapshot traz as atualizações (monitorando o coll e passar uma atualização
 ///// s )
 const getDocs= onSnapshot(coll,snapshot=>{
   //MAPEAR  AS ATUALIZAÇÂO dos documents com  (map) e retornar o documentos (doc => doc); 
   // melhora se for (doc => doc.data()); E FICA COMPLETO COM ID SE FOR (doc => ({...doc.data()}));
   //ACHEI ALGO @@@@@ const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id})); 3:15 horas
   const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
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

 //E O QUE QUEREMOS UTILIZAR DESSE DOCUMENTO
 return documents;

}

export default useGetDocs;


 