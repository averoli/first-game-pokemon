const GamePage = ({onChangePage}) => {

    const handleClick = () =>{
onChangePage && onChangePage('app');
    }

    return(
        <div>
            This is the game!
            <button onClick={handleClick}>
                Go to HOME!
            </button>
        </div>
    )
}

export default GamePage;