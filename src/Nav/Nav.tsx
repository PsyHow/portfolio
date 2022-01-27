import React from 'react';
import style from './Nav.module.scss';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href={'#home'}>Home</a>
            <a href={'#skills'}>Skills</a>
            <a href={'#projects'}>Project</a>
            <a href={'#contact'}>Contacts</a>
            <a href={'#cv'}>CV</a>
        </div>
    );
}
