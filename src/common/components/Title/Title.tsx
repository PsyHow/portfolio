import React from 'react';
import style from './Title.module.scss'

type PropsType = {
    text: string
    description?: string
}
export const Title = (props: PropsType) => {
    return (
        <div className={ style.title }>
            <h2>{ props.text }</h2>
            <h3>{ props.description }</h3>
        </div>
    );
}