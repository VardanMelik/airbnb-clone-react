import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header/>

        <Switch> 
          
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
