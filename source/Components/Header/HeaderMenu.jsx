/* ORIGINAL
import CardMenu from '../UI/CardMenu';
import useCloseMenu from '../../hooks/useCloseMenu';
import { toggleAddSalary } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';

const HeaderMenu = ({ toggleMenuHandler }) => {
  const cardRef = useCloseMenu(toggleMenuHandler);
  const dispatch = useDispatch();

  return (
    <CardMenu ref={cardRef}>
      <li onClick={() => dispatch(toggleAddSalary(null))}>Adicionar Salário</li>
    </CardMenu>
  );
};

export default HeaderMenu;
*/
import { useDispatch } from 'react-redux';
import useCloseMenu from '../../hooks/useCloseMenu';
import useMenu from '../../hooks/useMenu';
import { toggleAddCategory } from '../../store/ui-slice';
import CardMenu from '../UI/CardMenu';

const HeaderMenu = ({ toggleMenuHandler }) => {

    //FUNÇÃO QUE FECHA MENU
    const cardRef = useCloseMenu(toggleMenuHandler);
    
    const dispatch= useDispatch()
  
    return (
        //FAZ A REFERENCIA e // esse não vai precisar de data (em que categoria chama)
      <CardMenu ref={cardRef}>
        
        <li onClick={() => dispatch(toggleAddCategory(null))} >Adicionar Salário</li>
      </CardMenu>
    );
  };
  
  export default HeaderMenu;