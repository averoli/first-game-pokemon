import s from './style.module.css';
import cn from 'classnames';

const MENU = [
    {
        title: 'HOME',
        to: '#welcome',
    },
    {
        title: 'GAME',
        to: '#game',
    },
    {
        title: 'ABOUT',
        to: '#about',
    },
    {
        title: 'CONTACT',
        to: '#contact',
    },

]

const Menu = ({ openMenu }) =>{

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
                                    <a href={to}>
                                        {title}
                                    </a>
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