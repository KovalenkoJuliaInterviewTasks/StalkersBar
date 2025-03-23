import React, {useEffect, useState} from 'react';
import MenuSection from "./MenuSection";
import {getCollection} from "../firebase/db-service";
import {foodCollection} from "../utils/constants";

const Snack = () =>
{

    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCollection(foodCollection);
            setFoodItems(data);
        };

        fetchData();
    }, []);
    return (
        <div>
            {foodItems.map(i => <MenuSection key={i.title} item={i} direct={'column'}/>)}
        </div>
    );
};

export default Snack;