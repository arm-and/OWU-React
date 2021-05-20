import React, {createContext} from "react";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserDetailsComponent from "./components/user-details/UserDetailsComponent";
import PostsDetailsComponents from "./components/posts-details/PostsDetailsComponents";
import Home from "./components/home/Home";
import Comments from "./components/comments/Comments";

export const MyContext = createContext('')

function App() {
    return (
        <Router>
            <MyContext.Provider
                value={'andrii'}
            >
                <div>
                    <Link to={'/'}>to home</Link>
                    <h1></h1>
                    <Link to={'/users'}>to users</Link>
                    <h1></h1>
                    <Link to={'/posts'}>to posts</Link>
                    <Switch>
                        <Route exact={true} path={'/'} render={() => <Home/>}/>
                        <Route exact={true} path={'/users'} render={(props) => <Users {...props}/>}/>
                        <Route exact={true} path={'/users/:id'} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <UserDetailsComponent userId={id}/>
                        }
                        }/>
                        <Route exact={true} path={'/posts'} render={(props) => <Posts {...props}/>}/>
                        <Route exact={true} path={'/posts/:id'} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <PostsDetailsComponents postId={id}/>
                        }
                        }/>
                    </Switch>
                </div>
                <div>
                    <Comments/>
                </div>
            </MyContext.Provider>
        </Router>

    );
}

export default App;
