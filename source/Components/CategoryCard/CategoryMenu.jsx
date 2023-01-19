/**ORIGINAL
 * import { useDispatch } from 'react-redux';
import useCloseMenu from '../../hooks/useCloseMenu';
import { toggleAddAmount, toggleEditCategory, toggleSubtractAmount, toggleTransferAmount } from '../../store/ui-slice';
import CardMenu from '../UI/CardMenu';

const CategoryMenu = ({ toggleMenuHandler, data }) => {
  const menuRef = useCloseMenu(toggleMenuHandler);
  const dispatch = useDispatch();

  return (
    <CardMenu ref={menuRef}>
      <li onClick={() => dispatch(toggleEditCategory(data))}>Editar</li>
      <li onClick={() => dispatch(toggleAddAmount(data))}>Adicionar</li>
      <li onClick={() => dispatch(toggleSubtractAmount(data))}>Descontar</li>
      <li onClick={() => dispatch(toggleTransferAmount(data))}>Transferir</li>
    </CardMenu>
  );
};

export default CategoryMenu;
*/

/**ESTUDO */
import { useEffect, useRef } from 'react';
import CardMenu from '../UI/CardMenu';
import useCloseMenu from '../../hooks/useCloseMenu';
import { useDispatch } from 'react-redux';
import { toggleAddAmount, toggleAddSalary, toggleEditCategory, toggleSubtractAmount, toggleTransferAmount } from '../../store/ui-slice';

const CategoryMenu = ({toggleMenuHandler, data} ) => {

  //EXCLUIDO CODIGO ANTERIOR POIS COLOCAMOS NUM HOOK
// A FUNÇÃO toggleMenuHandler FECHA O MENU
   const menuRef = useCloseMenu(toggleMenuHandler);
   //CHAMA OS reducers (toggleTransferAmount, )
    const dispatch = useDispatch();
  
    return (
      //PRECISAMOS ENVOLVER O COMPONENTE CardMenu COM forwardRef E DAR UM CardMenu.displayName='Card Menu'
      <CardMenu ref={menuRef}>
      <li onClick={() => dispatch(toggleEditCategory(data))}>Editar</li>
      <li onClick={() => dispatch(toggleAddAmount(data))}>Adicionar</li>
      <li onClick={() => dispatch(toggleSubtractAmount(data))}>Descontar</li>
      <li onClick={() => dispatch(toggleTransferAmount(data))}>Transferir</li>
      <li onClick={() => dispatch(toggleAddSalary(data))}>Salário</li>
     
    </CardMenu>
  );
};

export default CategoryMenu;