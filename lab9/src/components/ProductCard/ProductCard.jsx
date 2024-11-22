import { Link } from 'react-router-dom';

const ProductCard = ({title, desc, img, productPageHref, className, withoutCard = false}) => {
    return <Link to={productPageHref}>
        <div className={`border rounded-[8px] p-4 max-w-[200px] h-full ${className}`}>
            {
                img ? img
                :
                withoutCard ? null : <div className="h-[100px] bg-slate-300"></div>
            }
            <p className="font-semibold">{title}</p>
            <p>{desc}</p>
        </div>
    </Link>
}

export default ProductCard;
