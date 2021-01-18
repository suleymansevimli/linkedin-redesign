import React from "react";
import cn from 'classnames';
import style from "./add-card.module.css"
import Card from "../Card";
import {Info} from "../../icons";
import Connection from "../../elements/add/Connection";

const AddCard = () => {
    return (
        <Card>
            <div className={style.addCard}>

                <div className={style.cardTitle}>
                    <h3 className={cn(["semi-bold", style.title])}>Add to feed</h3>
                    <Info/>
                </div>

                <div className={style.connections}>

                    <Connection name={"App Service Agency"} sector={"Company / IT"} logo={"http://localhost:3000/img/user/logo-1.png"}/>
                    <Connection name={"Robert Fox"} sector={"CEO at Good solutions"} logo={"http://localhost:3000/img/user/robert-fox.png"}/>
                    <Connection name={"Google Inc."} sector={"Company / IT"} logo={"http://localhost:3000/img/user/logo-google.png"}/>
                    <Connection name={"Guy Hawkings"} sector={"UX/UI designer at Sher"} logo={"http://localhost:3000/img/user/guy-hawkings.png"}/>
                    <Connection name={"Esther Howard"} sector={"Java tech lead at Sherless"} logo={"http://localhost:3000/img/user/esther-howard.png"}/>

                </div>
            </div>
        </Card>
    )
}

export default AddCard;