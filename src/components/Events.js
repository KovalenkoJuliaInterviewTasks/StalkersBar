import React, {useEffect, useState} from 'react';
import {events} from "../utils/temporaryConstants";
import Event from "./Event";
import EventDetails from "./EventDetails";
import {getCollection} from "../firebase/db-service";
import {eventsCollection} from "../utils/constants";

const Events = () =>
{
    const [selectedEventIndex, setSelectedEventIndex] = useState(-1);
    const handleCardClick = (id) => {
        setSelectedEventIndex(id);
    };
    const handleBackClick = () => {
        setSelectedEventIndex(-1);
    };

    const [eventItems, setEventItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCollection(eventsCollection);
            setEventItems(data);
        };

        fetchData();
    }, []);
    return (
        <div>
        {selectedEventIndex > -1 ?
            (<EventDetails event={events[selectedEventIndex]} onBack={handleBackClick}/>)
            :
            (<div style={{height: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                {eventItems.map((i, index) => <Event key={index} event={i} details={handleCardClick} index={index}/>)}
            </div>)}
        </div>);
};

export default Events;