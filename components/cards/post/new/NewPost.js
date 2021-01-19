import React from "react";
import style from "./new-post.module.css"
import Card from "../../Card";
import {Document, Photo, Video} from "../../../icons";

const NewPost = () => {
    return (
        <Card classname={style.card}>
            <div className={style.newPost}>
                <div className={style.input}>
                    <textarea rows={1} placeholder={"Create a new post..."}/>
                </div>

                <div className={style.otherPostTypes}>
                    <Document/>
                    <Video/>
                    <Photo/>
                </div>
            </div>
        </Card>
    )
}

export default NewPost;