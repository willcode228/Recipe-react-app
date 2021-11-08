import Title from '../../../common/Title/Title';
import styles from './Ingredients.module.scss';

const IMAGE_URL = process.env.REACT_APP_API_IMAGE_URL;

const Ingredients = ({ingredients=[]}) => {
    return (
        <div className={styles.ingredients}>
            <Title>Ingredients</Title>

            <div className={styles.list}>
                {
                    ingredients.map(ingredient => (
                        <div key={ingredient.id} className={styles.item}>
                            <img src={`${IMAGE_URL}${ingredient.image}`} alt={ingredient.name} />
                            <h3>{ingredient.amount} {ingredient.unit} of {ingredient.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Ingredients;