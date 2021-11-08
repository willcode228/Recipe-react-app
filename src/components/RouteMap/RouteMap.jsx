import Home from "../../containers/Home";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Redirect, Route, Switch, withRouter } from "react-router";
import { HOME, RECIPE, SEARCH } from "../../routes/consts";
import React, { Suspense } from "react";

const Search = React.lazy(() => import("../../containers/Search"));
const Recipe = React.lazy(() => import("../../containers/Recipe"));

const RouteMap = ({location}) => {

    //fixed the bugs of transition groups library with Switch component
    //https://github.com/remix-run/react-router/issues/5279

    const key = location.pathname.split('/')[1];
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
        <TransitionGroup>
            <CSSTransition key={key} timeout={300} classNames="page" unmountOnExit>
                <Switch>
                    <Route path={HOME} component={Home} exact/>
                    <Route path={SEARCH} component={Search} exact/>
                    <Route path={`${RECIPE}/:recipeId?/:color?`} component={Recipe} exact/>

                    <Redirect to={HOME} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
        </Suspense>
    );
}

export default withRouter(RouteMap);
