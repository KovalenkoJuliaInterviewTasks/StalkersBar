import React, {useEffect, useState} from 'react';
import AlbumDetails from "./AlbumDetails";
import Album from "./Album";
import {albums} from "../utils/temporaryConstants";
import {getCollection} from "../firebase/db-service";
import {albumCollection, foodCollection} from "../utils/constants";

const Gallery = () =>
{
    const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(-1);
    const handleCardClick = (id) => {
        setSelectedAlbumIndex(id);
    };
    const handleBackClick = () => {
        setSelectedAlbumIndex(-1);
    };

    const [albumItems, setAlbumItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCollection(albumCollection);
            setAlbumItems(data);
        };

        fetchData();
    }, []);
    return (
        <div>
            {selectedAlbumIndex > -1 ?
                (<AlbumDetails photos={albums[selectedAlbumIndex].items} onBack={handleBackClick}/>)
                :
                (<div style={{height: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                    {albumItems.map((i, index) => <Album key={index} album={i} details={handleCardClick} index={index}/>)}
                </div>)}
        </div>);
};

export default Gallery;