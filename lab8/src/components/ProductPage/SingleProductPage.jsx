
const SingleProductPage = ({ product }) => {
    const { name, description, monthListeners, songs, tour} = product;
    return <div className='flex justify-evenly mb-[200px]'>
        <div>img</div>
        <div>
            <h1 className='font-bold text-3xl mb-2'>{name}</h1>
            <div className='flex gap-2'>
                <div className='text-sm border rounded-[6px] px-2 py-1 w-fit'>
                    {`Month Listeners: ${monthListeners}`}
                </div>
                <div className='text-sm border rounded-[6px] px-2 py-1 w-fit'>
                    {`Songs: ${songs}`}
                </div>
            </div>
            <p className='my-4'>{description}</p>
            <p>{
                tour.length === 0 ?
                `${name} is not currently in a tour :(` :
                `You can see ${name} in this places: ${tour}`
            }</p>
        </div>
    </div>
}

export default SingleProductPage;
