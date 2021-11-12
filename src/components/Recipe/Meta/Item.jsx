import styles from './Meta.module.scss';

const Item = ({Icon = null, title, active}) => {
    return (
        <div className={`${styles.item} ${active ? styles.orange : ''}`}>
            {!Icon ? null : <Icon />}
            {title}
        </div>
    )
}

export default Item;