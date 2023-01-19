/**ORIGINAL */

import { addDoc, collection } from '@firebase/firestore';
import db from '../firebase';

const useAddDoc = () => {
// AQUI NO PARAMETRO QUEREMOS A COLEÇÂO E OS CAMPOS para levar para onde desejar
  const addDocHandler = async (collectionName, fields) => {
  //QUAL FUNÇÃO QUERO ADDICIONAR O DOCUMENTO, 
  //pega o banco de dados e a coleção que queremos adicionar o documento
    const coll = collection(db, collectionName);
    //O DOCUMENTO QUE QUEREMOS ADICIONAR e os campos que seão criados
    await addDoc(coll, fields);
  };

  return addDocHandler;
};

export default useAddDoc;