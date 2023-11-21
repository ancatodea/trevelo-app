import { useEffect } from "react";
import CardImage from "./CardImage.jsx";
import CardTitle from "./CardTitle.jsx";

export default function Card() {
    
    // useEffect(() => {
    //     fetch(
    //         "https://maps.googleapis.com/maps/api/js?key=AIzaSyA75Uq5qHcGRX-TaJhG97pbK54snUzUDFI&libraries=places&callback=initMap"
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
