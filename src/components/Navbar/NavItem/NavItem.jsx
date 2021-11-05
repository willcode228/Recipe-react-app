import styles from './NavItem.module.scss';
import { NavLink } from "react-router-dom";

const NavItem = ({Icon, title, path}) => {
    return (
        <NavLink to={path} className={styles.item} activeClassName={styles.item__active} exact>

            <div className={styles.icon__wrapper}>
                <Icon className={styles.icon__icon}/>
            </div>

            <h3 className={styles.title}>{title}</h3>

        </NavLink>
    )
}

export default NavItem;