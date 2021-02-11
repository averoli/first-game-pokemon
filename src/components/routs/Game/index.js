import {useHistory} from 'react-router-dom';
import Layout from "../../Layout";
import s from "../Home/style.module.css";
import PokemonCard from "../../pokemonCards/PokemonCard";
import { Pokemons } from "../Home/index";
import {useState} from "react";

const GamePage = ({ isActive }) => {
    const history = useHistory();

    const [pokemons, setPokemons] = useState(Pokemons);
    const handleClick = () =>{
    history.push('/');
    }

    const onCardClick = (id) => {
    setPokemons((pokemons)=>{
        const index = pokemons.findIndex((el) => el.id === id);
        const oldItem = pokemons[index];
        const newItem = { ...oldItem, isActive: !oldItem.isActive };
        const newArray = [
            ...pokemons.slice(0, index),
            newItem,
            ...pokemons.slice(index + 1),
        ];
        return  newArray;

        })
    }

    return(
        <div>
            This is the game!
            <button onClick={handleClick} className="btn btn-primary">
                Go to HOME!
            </button>
            <Layout
                id = "layout2"
                colorBg = "lightpink"
            >
                <div className={s.flex}>
                    {Pokemons.map(pokemon => <PokemonCard
                        key = {pokemon.id}
                        type = {pokemon.type}
                        values = {pokemon.values}
                        id = {pokemon.id}
                        name = {pokemon.name}
                        img = {pokemon.img}
                        isActive= {pokemon.isActive}
                        onClick={onCardClick}
                    />)}
                </div>
            </Layout>

        </div>
    )
}

export default GamePage;