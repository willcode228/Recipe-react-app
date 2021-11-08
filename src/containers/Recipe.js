import { setRecipeData } from "../store/Recipe/actions";
import { connect } from "react-redux";
import Recipe from "../components/Recipe/Recipe";

const mapStateToProps = (state) => ({
    recipeData: state.recipe.recipeData,
    calories: state.recipe.calories
});

export default connect(mapStateToProps, { setRecipeData })(Recipe);