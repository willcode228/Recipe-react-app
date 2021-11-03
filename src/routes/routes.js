import {ReactComponent as HomeIcon} from '../assets/home.svg';
import {ReactComponent as SearchIcon} from '../assets/search.svg';
import {ReactComponent as HeartIcon} from '../assets/heart.svg';
import { FAVORITE, HOME, SEARCH } from "./consts";
import Home from '../containers/Home';
import Search from '../components/Search/Search';
import Favorites from '../components/Favorites/Favorites';

export const publicRoutes = [
    {
        Icon: HomeIcon,
        title: 'Home',
        path: HOME,
        Component: Home
    },
    {
        Icon: SearchIcon,
        title: 'Search',
        path: SEARCH,
        Component: Search
    },
    {
        Icon: HeartIcon,
        title: 'Favorite',
        path: FAVORITE,
        Component: Favorites
    },
]