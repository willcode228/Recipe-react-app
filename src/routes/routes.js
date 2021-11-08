import {ReactComponent as HomeIcon} from '../assets/home.svg';
import {ReactComponent as SearchIcon} from '../assets/search.svg';
import {ReactComponent as HeartIcon} from '../assets/heart.svg';
import { FAVORITE, HOME, SEARCH } from "./consts";

export const publicRoutes = [
    {
        Icon: HomeIcon,
        title: 'Home',
        path: HOME,
    },
    {
        Icon: SearchIcon,
        title: 'Search',
        path: SEARCH,
    },
    {
        Icon: HeartIcon,
        title: 'Favorite',
        path: FAVORITE,
    },
]