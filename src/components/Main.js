import React from 'react';
import {Route, Routes} from "react-router-dom";
import {navItemsArray} from "../utils/constants";
import Home from "./Home";
import Events from "./Events";
import Gallery from "./Gallery";
import Login from "./Login";
import Logout from "./Logout";
import Menu from "./Menu";

const Main = () =>
{
    return (
        <div className={'main'}>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={navItemsArray[0].route} element={<Home/>}/>
                <Route path={navItemsArray[1].route} element={<Events/>}/>
                <Route path={navItemsArray[2].route} element={<Menu/>}/>
                <Route path={navItemsArray[3].route} element={<Gallery/>}/>
                {/*<Route path={navItemsArray[4].route} element={<Login/>}/>*/}
                {/*<Route path={navItemsArray[5].route} element={<Logout/>}/>*/}
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
   );
};

export default Main;