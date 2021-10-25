import style from "./Contacts.module.css";
import React from "react";
import styleContainer from "../common/styles/Container.module.css"

export const Contacts = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea>
                    </textarea>
                </form>
                <a className={style.link} href={''}>Send</a>
            </div>
        </div>
    );
}