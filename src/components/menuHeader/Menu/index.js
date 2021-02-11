import {Link} from "react-router-dom";

import s from './style.module.css';
import cn from 'classnames';


const MENU = [
    {
        title: 'HOME',
        to: '/',
    },
    {
        title: 'GAME',
        to: '/game',
    },
    {
        title: 'ABOUT',
        to: '/about',
    },
    {
        title: 'CONTACT',
        to: '/contact',
    }
]

const Menu = ({ openMenu, onClickMenu }) =>{

console.log('####: openMenu', openMenu)
    console.log('####: onClickMenu', onClickMenu);
    console.log()
    const handleClickClose = () => {
        onClickMenu && onClickMenu(true);
    }

    return(
        <div>
            <div className={cn(s.menuContainer, {
                    [s.active]: openMenu === true,
                    [s.deactive]: openMenu === false,
            })} >
                <div className={s.overlay} />
                <div className={s.menuItems}>
                    <ul>
                        {
                            MENU.map(({title, to}, index) =>(
                                <li key={index}>
                                    <Link to={to} onClick={handleClickClose}>
                                        {title}
                                    </Link>
                                </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu;