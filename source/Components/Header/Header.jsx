import Image from "next/image";
import useMenu from "../../hooks/useMenu";
import styles from "./Header.module.scss";
import HeaderMenu from './HeaderMenu'
import AddSalary from './modais/AddSalary'

//Arrayfuction
 const Header = ()=>{

    // FUNÇÃO QUE TORNA VISIVEL (isVisible) E QUE ALTERNA ESTADO (toggleMenuHandler)
    //O CLICK (onClick) VAI FICAR NA IMAGEM (avatar) e a condição de visibiladade abaixo
    // o HeaderMenu SO VAI APARECER SE O isVisible for verdadeiro e clicar no avatar
    const [isVisible, toggleMenuHandler] = useMenu()

    return (

        <>
        <AddSalary/>
        <section className={styles.header}>
            <div>
                <h1>Ola! Sentir saudades </h1>
                <h2>Sua carteira esta esperando por você </h2>
            </div>
            <div className={styles.avatar}>
             <Image src='/avatar.jpg' alt='avatar' width={50} height={50} onClick={toggleMenuHandler} />
             {isVisible && <HeaderMenu toggleMenuHandler={toggleMenuHandler} />}
           
            </div>
        </section>
        </>
    )

}
export default Header;