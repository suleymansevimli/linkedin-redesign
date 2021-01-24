import React from "react";
import PropTypes from 'prop-types'
import cn from 'classnames'
import style from "./post.module.css"
import Card from "../Card";
import {Comment, Eye, Like, Options, Send, Share} from "../../icons";

const Post = () => {
    return (
        <Card classname={style.card}>
            <div className={style.cardHeader}>
                <div className={style.postInformation}>
                    <img src={process.env.DOMAIN+"/img/user/logo-1.png"} alt=""/>
                    <div className={style.information}>
                        <div className={style.nameAndSector}>
                            <div className={style.ago}>
                                <h3 className={"semi-bold"}>Appservice Agency</h3>
                                <p className={"regular"}>20 hours ago</p>
                            </div>
                            <p className={"regular"}>Company / IT</p>
                        </div>
                    </div>
                </div>

                <div className={style.options}>
                    <Options/>
                </div>

            </div>

            <div className={style.post}>
                <p className={cn(["regular", style.text])}>
                    Maecenas hendrerit porttitor integer viverra lorem metus et in eu. Rhoncus dignissim in et id arcu
                    amet, aliquam vivamus. Mauris eget at risus quis. Viverra integer platea leo, mauris. Proin diam sit
                    ut ac eget sed egestas congue. Dictum at aliquam felis id enim feugiat donec purus. Amet, bibendum
                    nibh scelerisque et in nisl. Pretium posuere eu molestie non eget nisl quisque nibh vulputate. Neque
                    odio mauris tortor eu aliquet morbi. Posuere porttitor cursus risus, viverra faucibus leo in
                    egestas. Pharetra, cursus pellente...
                </p>
                <div className={style.seeMore}>
                    <a href="#" className={cn(["regular", style.moreBtn])}>See More</a>
                </div>

                <div className={style.images}>
                    <img src={process.env.DOMAIN+"/img/post/post-1.png"} alt=""/>
                </div>

                <div className={style.interaction}>
                    <div className={style.actions}>
                        <div>
                            <Like className={style.active}/>
                            <span className={cn(["regular", style.count])}>965</span>
                        </div>
                        <div>
                            <Comment/>
                            <span className={cn(["regular", style.count])}>72</span>
                        </div>
                        <div>
                            <Share/>
                        </div>
                        <div>
                            <Send/>
                        </div>
                    </div>
                    <div className={style.viewed}>
                        <Eye/>
                        <span className={cn(["regular", style.count])}>91,532</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Post;