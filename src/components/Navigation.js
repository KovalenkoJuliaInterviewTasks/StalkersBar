import React from 'react';
import NavigatorDesktop from "./NavigatorDesktop";


const Navigation = ({items}) =>
{
    return (
        <nav className={'w-100'} style={{
            display: "flex",
            justifyContent: "flex-start",  // Прижимает к левому краю
            gap: "10px",
            flexWrap: "nowrap",
            paddingLeft: "15px" // Отступ от левого края
        }}>

                {items.map(item => <NavigatorDesktop key={item.route} item={item}/>)}

        </nav>

    );
};

export default Navigation;