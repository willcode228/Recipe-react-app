import likesFormat from '../../../utils/likesFormat'
import { ReactComponent as HeartIcon } from '../../../assets/heart.svg';
import { ReactComponent as HealthIcon } from '../../../assets/health.svg';
import { ReactComponent as TimerIcon } from '../../../assets/timer.svg';
import { ReactComponent as CaloriesIcon } from '../../../assets/calories.svg';
import { ReactComponent as ScoreIcon } from '../../../assets/score.svg';
import Title from '../../../common/Title/Title';
import styles from './Meta.module.scss';
import Item from './Item';

const Meta = ({recipeData, color, calories}) => {
    return (
        <div className={`${styles.meta} ${color}`}>
            <div className={styles.line}>
                <Title>{recipeData.title}</Title>
            </div>

            <div className={styles.line}>
                <Item title={likesFormat(recipeData.aggregateLikes)} Icon={HeartIcon} active={true}/>
                <Item title={`${recipeData.healthScore}%`} Icon={HealthIcon} active={true}/>
            </div>

            <div className={styles.line}>
                <Item title={`${recipeData.readyInMinutes}min`} Icon={TimerIcon}/>
                <Item title={`${calories}cal`} Icon={CaloriesIcon}/>
                <Item title={recipeData.spoonacularScore} Icon={ScoreIcon}/>
            </div>

            { 
                recipeData.author &&
                <div className={styles.line}>
                    <Item title={`Author: ${recipeData.author}`}/>
                </div>
            }

        </div>
    )
}

export default Meta;