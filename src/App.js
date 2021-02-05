
import './App.css';
import Home from "./components/routs/Home";
import React from "react";
import { useState } from 'react';
import GamePage from "./components/routs/Game";


const App = () => {

const[page, setPage] = useState('app');

const handleChangePage = (page) =>{
    setPage(page);
}

   switch (page){
     case "app":
       return <Home onChangePage={handleChangePage}/>
     case "game":
       return <GamePage onChangePage={handleChangePage}/>
     default:
       return <Home />
   }
}

export default App;

