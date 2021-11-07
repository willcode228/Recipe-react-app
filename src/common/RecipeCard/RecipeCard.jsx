import styles from './Recipe.module.scss';
import { ReactComponent as TimerIcon } from '../../assets/timer.svg';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as BookMarkIcon } from '../../assets/bookmark.svg';
import likesFormat from '../../utils/likesFormat';
import { NavLink } from 'react-router-dom';
import { RECIPE } from '../../routes/consts';

const RecipeCard = ({recipe, index}) => {
    const colors = [styles.white, styles.blue, styles.green],
        childIndex = (index + 1) % colors.length;

    return (
        <div className={`${styles.card} ${colors[childIndex]}`}>

            <button><BookMarkIcon className={styles.bookMark__icon}/></button>

            <div className={styles.img__wrapper}>
                <img src={recipe.image} alt={recipe.title} />
            </div>


            <div className={styles.text__wrapper}>

                <NavLink className={styles.title__wrapper} to={`${RECIPE}/${recipe.id}`}>
                    <h3 className={styles.title}>{recipe.title}</h3>
                </NavLink>

                <div className={styles.meta}>

                    <div className={`${styles.time} ${styles.meta__line}`}>
                        <TimerIcon />
                        <p>{recipe.readyInMinutes}</p>
                    </div>

                    <div className={`${styles.likes} ${styles.meta__line}`}>
                        <HeartIcon />
                        <p>{likesFormat(recipe.aggregateLikes)}</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default RecipeCard;