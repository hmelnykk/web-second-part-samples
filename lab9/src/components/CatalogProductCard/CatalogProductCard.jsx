import FilledButton from "../Buttons/FilledButton";

const CatalogProductCard = ({ item }) => {
    const { name, description, img, ticketPrice, id } = item;

    return <div className="border rounded-[8px] p-4 max-w-[350px] transition-all hover:shadow-xl ">
        {
            img ? img
            :
            <div className="h-[200px] bg-slate-300"></div>
        }

        <p className="font-semibold">{name}</p>
        <p className="mb-2">{description}</p>
        <p className="font-semibold">{`Price for a Ticket: ${ticketPrice}$`}</p>
        <FilledButton name="View More" className="w-full" href={`/catalog/${id}`} />
    </div>
}

export default CatalogProductCard;
