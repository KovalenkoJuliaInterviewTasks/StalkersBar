import React from 'react';
import NavigatorDesktop from "./NavigatorDesktop";


const Navigation = ({items, submenu}) =>
{
    return (
        <nav className={'w-75 fixed-top'}>
            <ul>
                {items.map(item => <NavigatorDesktop key={item.route} item={item}/>)}
            </ul>
        </nav>

    );
};

export default Navigation;