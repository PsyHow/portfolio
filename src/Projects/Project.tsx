import style from "./Project.module.scss"
import React from "react";

type PropsType = {
    title: string
    description: string
    style: any
    link:string
}

export const Project = (props: PropsType) => {
    return (
        <div className={ style.project }>
            <div className={ style.imgContainer } style={ props.style }>
                <a className={ style.btnView } href={props.link}>Watch Now</a>
            </div>
            <div className={ style.projectInfo }>
                <h3 className={ style.projectTitle }>{ props.title }</h3>
                <span className={ style.projectDescription }>{ props.description }</span>
            </div>
        </div>

    );
}


