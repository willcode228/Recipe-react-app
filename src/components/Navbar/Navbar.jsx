import { publicRoutes } from '../../routes/routes';
import styles from './Navbar.module.scss';
import NavItem from './NavItem/NavItem';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            {
                publicRoutes.map((route) => <NavItem key={route.path} {...route}/>)
            }
        </nav>
    );
}

export default Navbar;