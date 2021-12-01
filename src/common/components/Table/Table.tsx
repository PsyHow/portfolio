import style from "./Table.module.scss"
import React from "react";

export const Table = () => {
    return (
        <table className={ style.table }>
            <tbody className={ style.tBody }>
            <tr>
                <th>Name</th>
                <th>Burnyshev Viktor</th>
            </tr>
            <tr>
                <th>BIRTHDAY</th>
                <th className={ style.th2 }>5th May 1992</th>
            </tr>
            <tr>
                <th>AGE</th>
                <th className={ style.th2 }>29 years</th>
            </tr>
            <tr>
                <th>ADDRESS</th>
                <th className={ style.th2 }>Pavlodar, Kazakhstan</th>
            </tr>
            <tr>
                <th>PHONE</th>
                <th className={ style.th2 }>(+7) 707 605 3624</th>
            </tr>
            <tr>
                <th>EMAIL</th>
                <th className={ style.th2 }>viktorburnyshev@gmail.com</th>
            </tr>
            </tbody>
        </table>
    )
}