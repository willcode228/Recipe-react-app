import likesFormat from '../../../utils/likesFormat'
import { ReactComponent as HeartIcon } from '../../../assets/heart.svg';
import { ReactComponent as BookMarkIcon } from '../../../assets/bookmark.svg';
import { ReactComponent as TimerIcon } from '../../../assets/timer.svg';
import { ReactComponent as CaloriesIcon } from '../../../assets/calories.svg';
import { ReactComponent as ScoreIcon } from '../../../assets/score.svg';
import Title from '../../../common/Title/Title';
import styles from './Meta.module.scss';
import Item from './Item';

const Meta = ({color, title, aggregateLikes, calories, readyTime, score}) => {
    return (
        <div className={`${styles.meta} ${color}`}>
            <div className={styles.line}>
                <Title>{title}</Title>
            </div>

            <div className={styles.line}>
                <Item title={likesFormat(aggregateLikes)} Icon={HeartIcon} active={true}/>
                <Item title='Save' Icon={BookMarkIcon} active={true}/>
            </div>

            <div className={styles.line}>
                <Item title={`${readyTime}min`} Icon={TimerIcon}/>
                <Item title={`${calories}cal`} Icon={CaloriesIcon}/>
                <Item title={score} Icon={ScoreIcon}/>
            </div>

        </div>
    )
}

export default Meta;