/**
 * ORIGINAL
 * 
 * import db from '../firebase';
import { doc, updateDoc } from '@firebase/firestore';

const useUpdateDoc = () => {
  const updateDocHandler = async (collecion, id, updatedFields) => {
    const categoryDoc = doc(db, collecion, id);
    await updateDoc(categoryDoc, updatedFields);
  };

  return updateDocHandler;
};

export default useUpdateDoc;
 */


/**ESTUDO */
import  { doc, updateDoc } from "@firebase/firestore";
import { useEffect } from "react";
import db from '../firebase'
import { collection, onSnapshot } from "typescript";

const useUpdateDoc = () => {

  /**LOGICA VEIO DO AddAmount.jsx /////-- 
  const categoryDoc = doc(db, 'categorias', category.id );           //NIVEL A - //
  await updateDoc(categoryDoc,{                                       //NIVEL A2  
     amount: category.amount + Number(amount),                         //NIVEL A3 - 
  });
  }
 */
  //FAZER UMA FUNÇÃO PARA COLOCAR A LOGICA DENTRO ---não esquecer das importações
  const updateDocHandler = async (collection, id, updatedFields) => {      //NIVEL B

    /** SERA MODIFICADO PARA SER GLOBAL (veio do AddAmount)
    //  const categoryDoc = doc(db, 'categorias', category.id );      //NIVEL A - //
    // await updateDoc(categoryDoc,{                                   //NIVEL A2  
    //    amount: category.amount + Number(amount),                      //NIVEL A3 - 
    //});
    //}
    */
    /////VAMOS FAZER COM QUE O HOOK NÃO FIQUE ESTASTICO
    ////SEJA APROVEITADO PARA OUTRAS COISAS DE FORMA GLOBAL ENTÃO:  //esse categorias vamos substituir 
    //por collection // e passar como paramentro la na função junto o async,
    // o id tambem vai ser passado como paramentro, e os campos 
    const categoryDoc = doc(db, collection, id);     //NIVEL B
    // ATUALIZAR  (então precisamos de um await e la emcima de um async), PASSANDO A CATEGORIA E OS CAMPOS  QUE DESEJAMOS
      await updateDoc(categoryDoc, updatedFields);    //NIVEL B
    
  };
  //QUEREMOS RETORNA A FUNÇÃO
  return updateDocHandler;
};

export default useUpdateDoc;


//PARA DEIXAR OS HOOK REUTILIZAVEL PARA TODAS CATEGORIAS E NÃO SOMENTE PARA categoria

