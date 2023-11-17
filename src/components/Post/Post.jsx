import { useEffect, useState } from "react";
import styles from "./Post.module.css";
import PostSubTitle from "./PostSubTitle";
import PostTitle from "./PostTitle";
import User from './User';

export default function Post() {

    const [image, setImage] =useState("");

    useEffect (() => {
        fetch(
            "https://collectionapi.metmuseum.org/public/collection/v1/objects/43713"
        )
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            setImage(result.primaryImage);
        })
    }, []);

    return (
        <div className={styles.post}>
            <img className={styles.postImage} src={image} alt="" />
            <User />
            <PostTitle />
            <PostSubTitle />
        </div>
    );
}