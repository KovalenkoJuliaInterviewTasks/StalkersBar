import React from 'react';
import {useSelector} from "react-redux";
import {subtextEn, subtextHe, subtextRu, textEn, textHe, textRu} from "../utils/constants";

const Home = () =>
{
    const lang = useSelector(state => state.lang.lang);

    const getText = () =>{
        switch (lang){
            case 'EN': return textEn;
            case 'RU': return textRu;
            case 'HE': return textHe;
        }
    }
    const getSubtext = () =>{
        switch (lang){
            case 'EN': return subtextEn;
            case 'RU': return subtextRu;
            case 'HE': return subtextHe;
        }
    }
    return (
        <div>
            <div className={'home'}>{getText()}</div>
            <div className={'home little'}>{getSubtext()}</div>
        </div>
    );
};

export default Home;