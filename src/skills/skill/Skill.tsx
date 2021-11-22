import React from "react";
import style from './Skill.module.scss'

type PropsType = {
    title: string
    description:string
    style?:any
}

export const Skill = (props: PropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}></div>
            <h3 className={style.skillName}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}