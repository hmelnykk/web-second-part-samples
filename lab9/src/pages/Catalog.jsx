import { useEffect, useState } from "react";
import CatalogProductCard from "../components/CatalogProductCard/CatalogProductCard";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import axios from "axios";
import Spinner from "../components/Spinners/Spinner";

const Catalog = () => {
    const [products, setProducs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:3001/catalog`).then(res => {
            setProducs(res.data);
            setIsLoading(false);
        }).catch(() => {})
    }, []);

    return (
        <>
            <FilterMenu
                onApply={() => {
                    const filterTypeInput = document.getElementById('sortBy');
                    const filterOrderInput = document.getElementById('sortOrder');
                    const searchValueInput = document.getElementById('searchInput');

                    axios.get(`http://localhost:3001/catalog?filterBy=${filterTypeInput.value}&filterOrder=${filterOrderInput.value}&searchInput=${searchValueInput.value}`).then(res => {
                        setProducs(res.data);
                    }).catch(() => {})
                }}
            />
            <div className="flex justify-center">
                {
                    isLoading ?
                    <Spinner />
                    :
                    <div className="showroom grid grid-cols-3 gap-4 mt-[70px]">
                        {
                            products.map((product, idx) => {
                                return <CatalogProductCard item={product}/>
                            })
                        }
                    </div>
                }
            </div>
        </>
    );
}

export default Catalog;
