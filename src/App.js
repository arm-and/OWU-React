import React from "react";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserDetailsComponent from "./components/user-details/UserDetailsComponent";

function App() {
    return (
        <div>

            <Router>
                <Link to={'/users'}>to users</Link>
                <Link to={'/posts'}>to posts</Link>

                <Switch>
                    <Route exact={true} path={'/users'} render={(props) => <Users {...props}/>}/>
                    <Route path={'/posts'} render={() => (<Posts/>)}/>
                    <Route exact={true} path={'/users/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <UserDetailsComponent userId={id}/>
                    }
                    }/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
