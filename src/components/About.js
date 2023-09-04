import User from "./User";
import UserClass from "./UserClass";
import { Component, useEffect } from "react";

//also can be done like
// class About extends Component {
//     constructor(props) {
//         super(props);
//         // console.log("parent constructor");
//     }
//     componentDidMount() {
//         // console.log("parent componentDidMount");
//     }
//     render() {
//         // console.log("parent render");
//         return (
//             <div>
//                 <h1>About page</h1>
//                 <h2>This is namaste react about page</h2>
//                 <UserClass name={"Fisrt Child"} location={"kochi "} />
//                 <UserClass name={"Second child "} location={"new york "} />
//             </div>
//         );
//     }
// }

const About = () => {
    // useEffect(()=>{

    // },[count, count2])

    // useEffect(()=>{
    //     console.log("useEffect");
    //     return ()=>{
    //         console.log("useEffect return");
    //     }

    // },[])

    // console.log("render")


    //this is how u clear up interval in functional compoennets
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("set interval functional component");
        }, 1000);

        return ()=>{
            clearInterval(timer);
        }
    }, []);

    // setInterval(()=>{
    //     console.log("set interval functional component");
    // },1000)
    return (
        <div>
            <h1>About page</h1>
            <h2>This is namaste react about page</h2>
            <User name={"silpa function"} />
            {/* <UserClass name={"silpa class"} location={"kochi class"} /> */}
        </div>
    );
};

export default About;
