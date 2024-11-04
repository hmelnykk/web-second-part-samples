import { useState } from "react";
import QuantityInput from "../Inputs/QuantityInput";
import FilledButton from "../Buttons/FilledButton";

const BuyProductOptions = ({ product }) => {
    const [ticketCount, setTicketCount] = useState(2);
    const { tour, ticketPrice } = product;

    if (tour.length === 0) return;

    return <div className="flex justify-around items-center border rounded-[6px] p-2">
        <p>{`Price for a ticket: ${ticketPrice * ticketCount}$`}</p>
        <div className="flex gap-2">
            <QuantityInput initValue={2} onChange={(value) => setTicketCount(value)}/>
            <FilledButton name="Add to cart" />
        </div>
    </div>
}

export default BuyProductOptions;
