import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    let btnName = "login";
    const [buttonName, setButtonName] = useState("Login");

    //it will get called everytime header render
    //also it gets called when header rerenders when we click on login btn
    // useEffect(()=>{
    //     console.log("useEffect is called")
    // })

    //only called on initial render when empty dependency array is given
    //  useEffect(()=>{
    //     console.log("useEffect is called")
    // },[])

    //everytime buttonName is changes useEffect is called
    useEffect(() => {
        console.log("useEffect is called");
    }, [buttonName]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    {/* anchor tag regreshed whole page , Link will not */}
                    {/* <li>
                        <a href="/about">About us</a>
                    </li> */}

                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="/about"> About</Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact us</Link>
                    </li>

                    <li>
                        <Link to="/cart"> Cart</Link>
                    </li>

                    <button
                        className="login-btn"
                        onClick={() => {
                            buttonName === "Login"
                                ? setButtonName("Logout")
                                : setButtonName("Login");
                        }}
                    >
                        {buttonName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
