import React from 'react';
import {Card, CardContent, CardMedia, Grid2, Typography} from "@mui/material";
import {useSelector} from "react-redux";

const MenuItemBar = ({item}) => {
    const lang = useSelector(state => state.lang.lang);
    const getDesc = item => {
        switch (lang) {
            case 'EN':
                return item.descEn;
            case 'RU':
                return item.descRu;
            case 'HE':
                return item.descHe;
        }
    }
    const getLable = item => {
        switch (lang) {
            case 'EN':
                return item.titleEn;
            case 'RU':
                return item.titleRu;
            case 'HE':
                return item.titleHe;
        }
    }
    return (
            <Grid2 container>
                <Card sx={{
                    margin: 1,
                    width: "20vw", // Общая ширина карточки
                    display: "flex",
                    flexDirection: "row", // Размещаем картинку слева
                    alignItems: "center",
                    backgroundColor: '#2C2C2C'
                }}>
                    <CardMedia
                        sx={{
                            width: "30%",
                            height: "100%", // Высота по размеру карточки
                            //objectFit: "cover"
                        }} image={`/images/${item.image}`}/>
                    <CardContent sx={{textAlign: 'center', backgroundColor: '#2C2C2C', color: "white", width: "70%", padding: 0}}>
                        <Typography gutterBottom sx={{fontSize: '2vw'}}>
                            {getLable(item)}
                        </Typography>
                        <Typography color='text.secondary' sx={{fontSize: '1.5vw', color: "white"}}>
                            {getDesc(item)}
                        </Typography>
                        {item.cost1 && (<Typography color='text.secondary' sx={{fontSize: '1.5vw', fontWeight: 'bold', color: "white"}}>
                            {item.cap1}&nbsp;&nbsp;&nbsp;{item.cost1} ₪
                        </Typography>)}
                        {item.cost2 && (<Typography color='text.secondary' sx={{fontSize: '1.5vw', fontWeight: 'bold', color: "white"}}>
                            {item.cap2}&nbsp;&nbsp;&nbsp;{item.cost2} ₪
                        </Typography>)}
                        {item.cost && (<Typography color='text.secondary' sx={{fontSize: '1.5vw', fontWeight: 'bold', color: "white"}}>
                            {item.cap}&nbsp;&nbsp;&nbsp;{item.cost} ₪
                        </Typography>)}
                    </CardContent>
                </Card>
           </Grid2>
    );
};

export default MenuItemBar;