import { useEffect } from "react";
import CardImage from "./CardImage.jsx";
import CardTitle from "./CardTitle.jsx";

export default function Card() {
    
    // useEffect(() => {
    //     fetch(
    //     )
    //         .then((res) => res.json())
    //         .then((result) => {
    //             console.log(result);
    //         });
    // }, []);

    return (
        <>
            <CardImage />
            <CardTitle />
        </>
    );
}
