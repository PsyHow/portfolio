import React from 'react';
import style from './MyProjects.module.css'
import {Project} from '../projects/Project';
import containerStyle from '../common/styles/Container.module.css'

export const MyProjects = () => {
    return (
        <div className={style.myProjects}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <h2 className={style.title}>My Project</h2>
                <div className={style.project}>
                    <Project title={'Todolist'}
                             description={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
                             ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Project title={'Social-Network'}
                             description={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
                             ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Project title={'Simple-Counter'}
                             description={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
                             ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                </div>
            </div>
        </div>
    );
}