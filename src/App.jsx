import Index from 'pages';
import FerrariStradleInfoPage from 'pages/ferrariStradle';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'styles/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/Ferrari-stradle'>
            <FerrariStradleInfoPage/>
          </Route>
          <Route path='/'>
            <Index/>
          </Route>
        </Switch>
      </Router>
    </div>
    );
}


export default App;
