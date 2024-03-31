
const Square = ({value, onSquareClick}) => {

    return (
        <button onClick={onSquareClick} className='bg-white border border-gray-400 h-12 w-12 m-1 text-lg leading-9'>
            {value}
        </button>

    );
};

export default Square;
