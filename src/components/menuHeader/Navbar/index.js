import s from './style.module.css';
import cn from 'classnames';



const Navbar = ({ openMenu, bgActive = false, onClickMenu }) =>{


    return(
        <nav id={s.navbar} className={cn({
            [s.bgActive]: bgActive
        })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div
                    className={cn(s.menuButton, {
                        [s.active]: openMenu})}
                    onClick={onClickMenu}>
                    <span />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;