import styles from "./Card.module.css";
import { useEffect, useState } from "react";
import CardImage from "./CardImage.jsx";

export default function Card() {
    const [photos, setPhotos] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetch(
            "https://maps-data.p.rapidapi.com/photos.php?business_id=0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0&lang=en&country=us",
            {
                method: "GET",
               headers: {
                    "X-RapidAPI-Key":
                        "44e47a62e4mshbb6f5802b050ea2p1fea7fjsn67a577941cfe",
                    "X-RapidAPI-Host": "maps-data.p.rapidapi.com",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                // Check if photos is an array before setting the state
                if (Array.isArray(data.data.photos)) {
                    setPhotos(data.data.photos);
                    setTitle(data.data.name)
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className={styles.cardContainer}>
            {photos &&
                photos.length > 0 &&
                photos.map((photo, index) => (
                        <CardImage key={index} photo={photo} />
                ))}
        </div>
    );
}
