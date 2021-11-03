import axios from 'axios';
import { useEffect } from 'react';
import { publicRoutes } from '../../routes/routes';
import styles from './Navbar.module.scss';
import NavItem from './NavItem/NavItem';

const Navbar = () => {

    useEffect(() => {
        const getData = () => {
            Promise.all([
                axios.get('https://api.spoonacular.com/recipes/random?number=3&apiKey=479a1d9312294a48b99753a3bc839359'),
                axios.get('https://api.spoonacular.com/recipes/random?number=5&apiKey=479a1d9312294a48b99753a3bc839359'),
                axios.get('https://api.spoonacular.com/recipes/random?number=5&apiKey=479a1d9312294a48b99753a3bc839359'),
                axios.get('https://api.spoonacular.com/food/jokes/random?apiKey=479a1d9312294a48b99753a3bc839359'),
                axios.get('https://api.spoonacular.com/food/trivia/random?apiKey=479a1d9312294a48b99753a3bc839359'),
                
            ])
            .then(response => {
                console.log(response);
            })
        }

        // getData();

    },[]);

    return (
        <nav className={styles.nav}>
            {
                publicRoutes.map((route) => <NavItem key={route.path} {...route}/>)
            }
        </nav>
    );
}

export default Navbar;