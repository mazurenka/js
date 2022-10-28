import React from "react";
import {ManType} from "./07.test";

type PropsType = {
    title: string
    man: ManType
}

export const ManComponent: React.FC<PropsType> = (props) => {



    return <div>
        <h1>{props.title}</h1>
        <hr/>
        <div>
            {props.man.name}
        </div>
    </div>
}