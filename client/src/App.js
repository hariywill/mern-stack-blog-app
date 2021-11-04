import React, { AppProvider } from './context/context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navabr'
import './App.css';
import Home from './pages/Home/Home';

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
              <Route path="/settings"></Route>
              <Route path="/newblog"></Route>
              <Route path="/blog/blogid"></Route>
            </Switch>
          </Router>
        </AppProvider>
    )
}

export default App;