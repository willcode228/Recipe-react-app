import { Switch, Route, Redirect } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import { HOME } from '../routes/consts';
import { publicRoutes } from '../routes/routes';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.app}>
            <Navbar />

            <Switch>

                {
                    publicRoutes.map(({path, Component}) => 
                        <Route path={path} key={path} component={Component} exact/>)
                }

                <Redirect to={HOME}/>
            </Switch>

        </div>
    );
}

export default App;
