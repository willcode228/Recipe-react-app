import styles from './Recipe.module.scss';
import { ReactComponent as TimerIcon } from '../../assets/timer.svg';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';

const RecipeCard = ({recipe, index}) => {
    const colors = [styles.white, styles.blue, styles.green],
        childIndex = (index + 1) % colors.length;

    return (
        <div className={`${styles.card} ${colors[childIndex]}`}>

            <div className={styles.img__wrapper}>
                <img src={recipe.image} alt={recipe.title} />
            </div>


            <div className={styles.text__wrapper}>

                <h3 className={styles.title}>{recipe.title}</h3>

                <div className={styles.meta}>

                    <div className={`${styles.time} ${styles.meta__line}`}>
                        <TimerIcon />
                        <p>{recipe.readyInMinutes}</p>
                    </div>

                    <div className={`${styles.likes} ${styles.meta__line}`}>
                        <HeartIcon />
                        <p>{recipe.aggregateLikes}</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default RecipeCard;