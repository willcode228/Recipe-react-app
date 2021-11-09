import styles from './AutocompleteItem.module.scss';

const URL = process.env.REACT_APP_API_IMAGE_RECIPE_URL;

const AutocompleteItem = ({ recipe, autocompleteChoose }) => {

    const choose = () => {
        autocompleteChoose(recipe.title);
    }

    return (
        <div onClick={choose} className={styles.item}>
            <img src={`${URL}${recipe.id}-90x90.${recipe.imageType}`} alt='' />
            <li className={styles.item__title}>{recipe.title}</li>
        </div>
    );
}

export default AutocompleteItem;