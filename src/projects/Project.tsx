import style from "./Project.module.css"
import React from "react";

type PropsType = {
    title: string
    description: string
}

export const Project = (props: PropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a className={style.link} href={''}>Watch Now</a>
            </div>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.projectDescription}>{props.description}</span>
        </div>

    );
}


