import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

//Components
import Home from './components/home';
import Posts from './components/posts';
import Profiles from './components/profiles';
import PostItem from './components/post_item,';
import Life from'./components/lifecycles';
import Conditional from './components/conditional'

// myawesomeapp.com/posts
// myawesomeapp.com/profile/posts

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to='/'>Home</NavLink><br/>
                    <NavLink to='/posts' activeStyle={{color: 'red'}} activeClassName="selected">Posts</NavLink>,<br/>
                    <NavLink to={{
                        pathname: 'profile',
                    }}>Profile</NavLink><br/>
                    <NavLink to='/life'>Life</NavLink><br/>
                    <NavLink to='/conditional'>Conditional</NavLink>
                    <hr/>
                </header>
            <Switch>
                <Route path="/posts/:id/:username" component={PostItem}/>
                <Route path="/posts"  component={Posts}/>
                <Route path="/profile" component={Profiles} />
                <Route path="/life"  component={Life}/>
                <Route path="/conditional"  component={Conditional}/>
                <Route path="/" exact component={Home}/> 
                <Route component={Posts}/> 
            </Switch>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)