import React          from "react";
import containerStyle from "../common/styles/Container.module.css"
import style          from "./AboutMe.module.scss"
import { Title }      from "../common/components/Title/Title";

export const AboutMe = () => {

    return (
        <div className={ style.mainBlock }>
            <div className={ `${ containerStyle.container } ${ style.container }` }>
                <Title text={ "ABOUT ME" } description={ "Biography" }/>
                <p className={ style.description }>
                    Hi, I'm a frontend developer specializing in
                    creating Spa at React / Redux.
                    I would like to find a full-time job with a
                    professional team in order to further
                    develop my skills and grow as a
                    developer.
                    My free time is dedicated to Codewars,
                    programming tutorials, and becoming
                    familiar with NodeJS, because,
                    in the future, I see myself as a Full Stack
                    Developer.
                </p>
            </div>
                <table className={style.table}>
                    <tbody>
                    <tr>
                        <th>NAME</th>
                        <th className={style.th2}>Burnyshev Viktor</th>
                    </tr>
                    <tr>
                        <th>BIRTHDAY</th>
                        <th className={style.th2}>5th May 1992</th>
                    </tr>
                    <tr>
                        <th>AGE</th>
                        <th className={style.th2}>29 years</th>
                    </tr>
                    <tr>
                        <th>ADDRESS</th>
                        <th className={style.th2}>Pavlodar</th>
                    </tr>
                    <tr>
                        <th>PHONE</th>
                        <th className={style.th2}>(+7) 707 605 3624</th>
                    </tr>
                    <tr>
                        <th>EMAIL</th>
                        <th className={style.th2}>viktorburnyshev@gmail.com</th>
                    </tr>
                    </tbody>
                </table>
        </div>
    );
}