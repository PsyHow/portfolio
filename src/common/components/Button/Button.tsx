import styles from './Button.module.scss';

type PropsType = {
    text: string
    link: string
}

export const Button = (props: PropsType) => {
    return <a className={styles.btn} href={ props.link }>{ props.text }</a>
}