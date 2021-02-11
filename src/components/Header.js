import {useHistory} from 'react-router-dom';

import s from './Header.module.css'


const Header = ({ title, descr, onClickButton }) => {

    const history = useHistory()
    const handleClick = () => {
history.push('/game');
    }

    return (
            <header className={s.root}>
                <div className={s.forest}></div>
                <div className={s.silhouette}></div>
                <div className={s.moon}></div>
                <div className={s.container}>
                    <h1>{title}</h1>
                    <p>{descr}</p>
                    <button onClick={handleClick}>
                        START GAME!
                    </button>
                </div>
            </header>
    )
}

export default Header;