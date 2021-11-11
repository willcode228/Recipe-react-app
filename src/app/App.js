import RouteMap from '../components/RouteMap/RouteMap';
import Navbar from '../components/Navbar/Navbar';
import styles from './App.module.scss';
import Loader from '../containers/Loader';

const App = () => {
    return (
        <div className={styles.app}>
            <Loader />
            <Navbar />
            <RouteMap />
        </div >
    );
}



export default App;
