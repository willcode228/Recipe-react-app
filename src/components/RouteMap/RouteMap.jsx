import Home from "../../containers/Home";
import { Redirect, Route, Switch } from "react-router";
import { HOME, RECIPE, SEARCH } from "../../routes/consts";
import React, { Suspense } from "react";

const Search = React.lazy(() => import("../../containers/Search"));
const Recipe = React.lazy(() => import("../../containers/Recipe"));

const RouteMap = ({location}) => {

    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Switch>
                <Route path={HOME} component={Home} exact/>
                <Route path={SEARCH} component={Search} exact/>
                <Route path={`${RECIPE}/:recipeId?/:color?`} component={Recipe} exact/>

                <Redirect to={HOME} />
            </Switch>
        </Suspense>
    );
}

export default RouteMap;
