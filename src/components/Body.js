import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import restaurantList from "../utils/mockData";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.1446281&lng=76.22727139999999&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    };
    useEffect(() => {
        fetchData();
    }, []);

    let ListOfRestaurantsJs = [
        {
            data: {
                id: "559535",
                name: "Chinese Hub",
                cloudinaryImageId: "ydwiyhxzno5rwbynoik3",
                cuisines: ["Chinese", "South Indian", "Juices"],
                costForTwo: 900,
                deliveryTime: 39,
                avgRating: "4.5",
            },
        },
        {
            data: {
                id: "638265",
                name: "Popsy - House Of Popsicles",
                cloudinaryImageId: "snzo23qx710kwbl6y7z5",
                cuisines: ["Indian"],
                costForTwo: 4000,
                deliveryTime: 23,
                avgRating: "3.5",
            },
        },
        {
            data: {
                id: "569597",
                name: "Clinjo Chayakaday",
                cloudinaryImageId: "yronk59n62istg24czyl",
                cuisines: ["Juices", "Beverages"],
                costForTwo: 10000,
                deliveryTime: 30,
                avgRating: "4.2",
            },
        },
    ];

    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    if (ListOfRestaurants.length === 0) {
        return <ShimmerUI />;
    }
    return ListOfRestaurants.length === 0 ? (
        <ShimmerUI />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const filteredRestaurants = ListOfRestaurants.filter((res) =>
                                res.data.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurants(filteredRestaurants);
                        }}
                    >
                        Search
                    </button>
                </div>

                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = ListOfRestaurants.filter(
                            (restaurant) => restaurant.data.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.data.id} to={`/restaurants/${restaurant.data.id}`}>
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
