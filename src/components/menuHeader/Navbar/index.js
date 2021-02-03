import s from './style.module.css';
import cn from 'classnames';
import {useState} from "react";

const Navbar = ({onClickMenu}) =>{

    const [isActive, setActive] = useState('after')

    const handleClick = () => {
      setActive(!isActive);
        onClickMenu && onClickMenu(isActive)
    }

    return(
        <nav id={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active]: isActive})} >
                    <span onClick={handleClick}/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;