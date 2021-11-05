import RouteMap from '../components/RouteMap/RouteMap';
import Navbar from '../components/Navbar/Navbar';
import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.app}>
            <Navbar />
            <RouteMap />
        </div >
    );
}



export default App;
