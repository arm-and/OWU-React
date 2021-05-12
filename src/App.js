import React from "react";
import Users from "./components/users/Users";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Posts from "./components/posts/Posts";

function App() {
    return (
        <div>

            <Router>
                <Link to={'/users'}>to users</Link>
                <h1></h1>
                <Link to={'/posts'}>to posts</Link>
                <Switch>
                    <Route path={'/users'} render={() => (<Users/>)}/>
                    <Route path={'/posts'} render={() =>(<Posts/>)}/>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
