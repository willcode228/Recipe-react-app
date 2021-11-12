import React from 'react';
import RecipeCard from '../../../common/RecipeCard/RecipeCard';
import styles from './Result.module.scss';

const Result = React.memo(({recipes, loadMoreResults, error, totalResultsCount, isLoadMoreDisable}) => {
    return (
        <div className={styles.result}>
            {
                error && <h3 className={styles.error}>{error}</h3>
            }

            {
                recipes.map((recipe, index) => (
                    <RecipeCard className={styles.card} key={recipe.id} recipe={recipe} index={index}/>
                ))
            }

            {
                recipes.length !== totalResultsCount && recipes.length
                    ? <button disabled={isLoadMoreDisable} 
                            className={styles.load__btn} 
                            onClick={loadMoreResults}
                        >
                            Load More
                        </button>
                    : null
            }
        </div>
    );
})

export default Result;