import React from 'react';
import {useSelector} from "react-redux";
import {
    headerEn,
    headerHe,
    headerRu
} from "../utils/constants";

const Home = () =>
{
    const lang = useSelector(state => state.lang.lang);

    const getText = () =>{
        switch (lang){
            case 'EN': return headerEn;
            case 'RU': return headerRu;
            case 'HE': return headerHe;
        }
    }

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: lang === 'HE' ? 'row-reverse' : 'row'}}
             dir={lang === 'HE' ? 'rtl' : 'ltr'}>
            <div className={'text-box'}>
                <div className="home">{getText().text}</div>
                <div className="home little">{getText().subtext}</div>
            </div>
            <div className={'img-box'}>
                <img
                    src={`/images/logo.png`}
                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
            </div>

        </div>
    );
};

export default Home;