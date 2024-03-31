import Square from "../Square/Square.jsx";

const Board = () => {
    return (
        <>
            <div>
                <div className='flex'>
                   <Square />
                   <Square />
                   <Square/>
                </div>
                <div className='flex'>
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div className='flex'>
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
            </div>
        </>
    );
};

export default Board;
