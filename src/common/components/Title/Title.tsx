import React from 'react';
import style from './Title.module.scss'

type PropsType = {
    subtitle: string
    title: string
    description: string
}
export const Title = (props: PropsType) => {
    return (
        <div className={style.main}>
            <h3 className={ style.subtitle }>{props.subtitle}</h3>
            <h3 className={ style.title }>{props.title}</h3>
            <p className={ style.description }>{props.description}</p>
        </div>
    );
}