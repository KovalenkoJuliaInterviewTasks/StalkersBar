import React, {useEffect, useState} from 'react';
import MenuSection from "./MenuSection";
import {getCollection} from "../firebase/db-service";
import {barCollection} from "../utils/constants";

const Bar = () =>
{

    const [barItems, setBarItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCollection(barCollection);
            setBarItems(data);
        };

        fetchData();
    }, []);
    return (
        <div>
            {barItems.map(i => <MenuSection key={i.title} item={i}/>)}
        </div>
    );
};

export default Bar;