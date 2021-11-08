import styles from './Steps.module.scss';
import Title from '../../../common/Title/Title';

const Steps = ({steps}) => {
    return (
        <div className={styles.steps}>
            <Title>Steps</Title>
            
            <ol className={styles.list}>
            {
                steps.map(step => (
                    <li key={step.number}>{step.number}. {step.step}</li>
                ))
            }
            </ol>

        </div>
    )
}

export default Steps;