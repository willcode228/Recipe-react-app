import styles from './Recipe.module.scss';
import { useEffect } from "react";
import Meta from './Meta/Meta';
import Steps from './Steps/Steps';
import Tags from './Tags/Tags';
import Ingredients from './Ingredients/Ingredients';


const Recipe = ({recipeData, calories, setRecipeData, ...props}) => {

    useEffect(() => {
        let cleanupFunction = false;

        if(!cleanupFunction) {
            window.scrollTo(0, 0);
            const recipeId = props.match.params.recipeId;
            setRecipeData(recipeId);
        }

        return () => cleanupFunction = true;
    }, []);
    
    return (
        <div className={styles.recipe__page}>

            <button onClick={() => window.history.back()} 
                    className={`${styles.arrow} ${props.match.params.color} arrow`}>
                ⤺
            </button>

            <div className={styles.wrapper__img}>
                <img className={styles.img} 
                    src={recipeData.image} alt={recipeData.title} />
            </div>
        
            <Meta color={props.match.params.color}
                calories={calories}
                recipeData={recipeData}/>

            <Ingredients ingredients={recipeData.extendedIngredients}/>

            <Steps steps={recipeData.analyzedInstructions 
                                ? recipeData.analyzedInstructions[0].steps
                                : []}/>

            <Tags diets={recipeData.diets}
                    dishTypes={recipeData.dishTypes}/>

        </div>
    );
}

export default Recipe;