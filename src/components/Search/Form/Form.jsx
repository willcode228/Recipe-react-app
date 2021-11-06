import { ReactComponent as FilterIcon } from '../../../assets/filter.svg';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';
import styles from './Form.module.scss';

const Form = ({setSearchResult, searchText, setSearchText}) => {

    const handleChange = e => {
        const searchText = e.target.value;
        setSearchText(searchText);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSearchResult();
    }

    return (
        <div className={styles.form__wrapper}>

            <form onSubmit={handleSubmit} 
                className={styles.form}
            >

                <input className={styles.input} type='text' placeholder='Search'
                    value={searchText} onChange={handleChange}/>

                <button><SearchIcon className={styles.search__icon}/></button>

            </form>

            <button><FilterIcon className={styles.filter__icon}/></button>

        </div>
    );
}

export default Form;