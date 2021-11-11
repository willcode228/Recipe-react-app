import { useCallback, useState } from 'react';
import { ReactComponent as FilterIcon } from '../../../assets/filter.svg';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';
import debounce from '../../../utils/debounce';
import AutocompleteItem from './AutocompleteItem/AutocompleteItem';
import styles from './Form.module.scss';


const Form = ({ setSearchResult, searchText, setSearchText, autocompleteResult, setAutocompleteResult }) => {

    const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);

    const debounceDropDown = useCallback(debounce(setAutocompleteResult, 400), []);

    const handleChange = e => {
        const searchText = e.target.value;
        setIsAutocompleteOpen(true);
        setSearchText(searchText);
        debounceDropDown();
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSearchResult();
    }

    const autocompleteChoose = (title) => {
        setIsAutocompleteOpen(false);
        setSearchText(title);
        setSearchResult();
    }

    return (
        <div className={styles.form__wrapper}>

            <form onSubmit={handleSubmit} className={styles.form}>


                <input className={styles.input} type='text' placeholder='Search'
                    value={searchText} onChange={handleChange} />

                <ul className={styles.autocomplete__list}>
                {
                    autocompleteResult?.length && isAutocompleteOpen
                        ? autocompleteResult.map(recipe => 
                            <AutocompleteItem autocompleteChoose={autocompleteChoose} key={recipe.id} recipe={recipe}/>)
                        : null
                }
                </ul>

                <button><SearchIcon className={styles.search__icon} /></button>
            </form>

        </div>
    );
}

export default Form;