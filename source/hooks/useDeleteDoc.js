/**O|RIGINAL */
import { deleteDoc, doc } from '@firebase/firestore';
import db from '../firebase';

const useDeleteDoc = () => {
   
  const deleteDocHandler = async (collecion, id) => {
     //ENCONTRA O DOCUMENTO ESPECIFICO QUE DESEJAMOS, e passamos por paramentro acima
    const categoryDoc = doc(db, collecion, id);
    // E FUNÃO DO FIRESTORE DELETA (deleteDoc)
    await deleteDoc(categoryDoc);
  };
//RETORNAMOS 
  return deleteDocHandler;
};
//EXPORTAMOS
export default useDeleteDoc;