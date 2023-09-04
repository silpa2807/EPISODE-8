import React from "react";
import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resInfo, sertResInfo] = useState(null);
    const fetchMenu = async () => {
        //change rest id in url for desi dumplings - resId 349382
        //zam zam -175737
        const data = await fetch(MENU_API_URL + resId);
        // const data = await fetch(
        //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.1446281&lng=76.22727139999999&restaurantId=${resId}`
        // );
        const json = await data.json();
        console.log("data is ", json);
        sertResInfo(json.data);
    };
    useEffect(() => {
        fetchMenu();
    }, []);

    //resInfo is null so return there itself
    if (resInfo === null) {
        return <ShimmerUI />;
    }

    //card[0] has restaurant info
    const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info;

    //cards[2] conatins all other info
    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log("itemCards are ", itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - Rs{" "}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
