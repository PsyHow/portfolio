import style from "./Resume.module.scss"

export const Resume = () => {

    return (
        <div className={ style.mainBox }>
            <div className={ style.resumeHeader }>
                <ul>
                    <li className={ style.active }><a href={ "" }>Experience</a></li>
                    <li><a href={ "" }>Education</a></li>
                    <li><a href={ "" }>Skills</a></li>
                </ul>
            </div>
            <div className={ style.tabContent }>
                <div className={ style.tabActive }>
                    <div className={ style.tabList }>
                        <ul>
                            <li>
                                <div className={ style.item }>
                                    <div className={ style.topItem }>
                                        <h5>Freelance</h5>
                                        <span>(2021 - Today)</span>
                                    </div>
                                    <h3>Frontend Developer</h3>
                                    <p>React development using redux, react-redux, react-router-dom,
                                        redux- thunk, redux-form, Axios, Material UI.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

