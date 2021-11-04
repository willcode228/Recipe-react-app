import Title from '../../../../common/Title/Title';
import styles from './TextBlock.module.scss';

const TextBlock = ({title, text}) => {
    return (
        <div className={styles.box}>
            <Title>{title}</Title>
            <cite className={styles.cite}>{text}</cite>
        </div>
    );
}

export default TextBlock;