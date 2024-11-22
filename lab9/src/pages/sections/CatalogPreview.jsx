import ProductCard from '../../components/ProductCard/ProductCard';
import FilledButton from '../../components/Buttons/FilledButton';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Spinner from '../../components/Spinners/Spinner';

const CatalogPreview = () => {
    const [viewMoreStep, setViewMoreStep] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/catalog').then(res => {
            setProducs(res.data);
            setIsLoading(false);
        }).catch(() => {})
    }, []);

    return isLoading ?
    <div className='flex justify-center'>
        <Spinner />
    </div>
    :
    <>
        <div className="flex justify-center pb-4">
            <div className='grid grid-cols-4 gap-4'>
                {
                    products.slice(0, (viewMoreStep + 1) * 4).map((el, idx) => {
                        return <ProductCard key={idx} title={el.name} desc={el.description} img={el.img} productPageHref={`/catalog/${el.id}`}/>
                    })
                }
                {
                    (viewMoreStep + 1) * 4 > products.length ?
                    <ProductCard key={-1}
                    title="Want to see More?"
                    desc="Click the card and see more unique artists or buy a ticket for a show of your life!"
                    withoutCard={true}
                    productPageHref="/catalog"
                    className="text-white bg-gradient-to-tr from-blue-900 to-purple-900" />
                    : null
                }
            </div>
        </div>
        {
            products.length > (viewMoreStep + 1) * 4 ?
            <div className="flex justify-center">
                <FilledButton name="View More" className="mx-auto"
                onClick={() => {
                    setViewMoreStep(viewMoreStep + 1)
                }}/>
            </div>
            :
            null
        }
    </>
}

export default CatalogPreview;
