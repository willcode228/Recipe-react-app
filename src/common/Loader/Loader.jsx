import { CSSTransition } from 'react-transition-group';
import styles from './Loader.module.scss';

const Loader = ({isFetching}) => {

    return (
        <CSSTransition 
            in={isFetching}
            mountOnEnter
            unmountOnExit
            timeout={{
                enter: 1500,
                exit: 1500,
            }}
            classNames={{
                enterActive: styles.loader__show,
                exitActive: styles.loader__hide
            }}>

            <div className={styles.loader}>
                <div className={styles.load__man}></div>
            </div>
        </CSSTransition>
    );
}

export default Loader;