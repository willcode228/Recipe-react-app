import styles from './Meta.module.scss';

const Item = ({Icon, title, active}) => {
    return (
        <div className={`${styles.item} ${active ? styles.orange : ''}`}>
            <Icon />
            {title}
        </div>
    )
}

export default Item;