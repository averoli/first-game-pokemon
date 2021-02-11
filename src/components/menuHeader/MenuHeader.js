import {useState} from "react";

import Navbar from "./Navbar";
import Menu from "./Menu";


const MenuHeader = ({ bgActive }) => {

    const[openMenu, setOpenMenu] = useState(null);

    const handleClickMenu = () =>{
        setOpenMenu(prevState => !prevState);
    }

    return(
        <>
            <Navbar openMenu={openMenu} bgActive={bgActive} onClickMenu={handleClickMenu}/>
            <Menu openMenu={openMenu} onClickMenu={handleClickMenu}/>
        </>
    );
}

export default MenuHeader;