import React, { AppProvider } from './context/context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navabr'
import './App.css';
import Home from './pages/Home';
import Create from './pages/Create';
import Blogs from './pages/Blogs';
import Setting from './pages/Setting';
import SingleBlog from './pages/SingleBlog';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
    return (
        <AppProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Signup />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs">
                <Blogs />
              </Route>
              <Route path="/blogs/:blogid">
                <SingleBlog />
              </Route>
              <Route path="/Setting">
                <Setting />
              </Route>
            </Switch>
          </Router>
        </AppProvider>
    )
}

export default App;