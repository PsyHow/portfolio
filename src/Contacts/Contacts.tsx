import style          from "./Contacts.module.scss";
import React          from "react";
import styleContainer from "../common/styles/Container.module.css"

export const Contacts = () => {
    return (
        <div id={'contact'} className={ style.contactBlock }>
            <div className={ `${ styleContainer.container } ${ style.container }` }>
                <form className={ style.form }>
                    <input type={ "text" } placeholder={'Name'}/>
                    <input type={ "text" } placeholder={'Email'}/>
                    <textarea placeholder={'Message'}>
                    </textarea>
                </form>
                <a className={ style.button } href={''}>Send</a>
            </div>
        </div>
    );
}