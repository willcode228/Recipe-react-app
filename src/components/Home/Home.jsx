import styles from './Home.module.scss';
import { useEffect } from "react";
import SliderBlock from './Blocks/SliderBlock/SliderBlock';
import TextBlock from './Blocks/TextBlock/TextBlock';


const Home = ({data, setHomeData}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        // setHomeData();
    }, []);

    return (
        <>
            <div className={styles.home}>

                <SliderBlock title='Recipes of the day' 
                            recipes={data.day}/>

                <SliderBlock title='Recommended for you' 
                            recipes={data.recommended}/>

                <TextBlock title='Food joke' text={data.joke}/>

                <SliderBlock title='Under 20 minutes' 
                            recipes={data.quick}/>

                <TextBlock title='Interesting trivia' text={data.trivia}/>
            
            </div>
        </>
    );
}

export default Home;