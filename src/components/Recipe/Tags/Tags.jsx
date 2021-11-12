import styles from './Tags.module.scss';
import Title from "../../../common/Title/Title";

const Tags = ({diets=[], dishTypes=[]}) => {
    return (
        <div className={styles.diets}>
            {
                !diets.length && !dishTypes.length ? null : <Title>Tags</Title>
            }
            {
                diets.map((diet, index) => (
                    <span key={index}>#{diet} </span>
                ))
            }
            {
                dishTypes.map((dish, index) => (
                    <span key={index}>#{dish} </span>
                ))
            }
        </div>
    );
}

export default Tags;