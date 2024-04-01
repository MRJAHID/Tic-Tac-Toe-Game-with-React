
const History = ({moves}) => {
    return (
        <div className='p-3 bg-gray-200 rounded m-2'>
            <ol className=''>
                {moves}
            </ol>
        </div>
    );
};

export default History;
