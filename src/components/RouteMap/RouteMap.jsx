import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Redirect, Route, Switch, withRouter } from "react-router";
import { publicRoutes } from "../../routes/routes";
import { HOME } from "../../routes/consts";

const RouteMap = ({location}) => {

    //fixed the bugs of transition groups library with Switch component
    //https://github.com/remix-run/react-router/issues/5279

    const key = location.pathname.split('/')[1];
    return (
        <TransitionGroup>
            <CSSTransition key={key} timeout={300} classNames="page" unmountOnExit>

                <Switch>

                    {
                        publicRoutes.map(({ path, Component }) => 
                            <Route path={path} component={Component} key={path} exact/>)
                    }

                    <Redirect to={HOME} />

                </Switch>

            </CSSTransition>
        </TransitionGroup>
    );
}

export default withRouter(RouteMap);
