import React, { AppProvider } from './context/context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navabr'
import './App.css';
import Home from './pages/Home';
import Create from './pages/Create';
import Blogs from './pages/Blogs';


function App() {
    return (
        <AppProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login"></Route>
              <Route path="/register"></Route>
              <Route path="/blogs">
                <Blogs />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:blogid"></Route>
            </Switch>
          </Router>
        </AppProvider>
    )
}

export default App;