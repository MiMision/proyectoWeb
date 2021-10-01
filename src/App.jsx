import Layout from 'layouts/Layout';
import Index from 'pages';
import FerrariStradleInfoPage from 'pages/ferrariStradle';
import MercedesAMG from 'pages/mercedesAMG';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'styles/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
              <Route path='/Ferrari-Stradle' exact>
                <FerrariStradleInfoPage/>
              </Route>
              <Route path='/MercedesAMG' exact>
                <MercedesAMG/>
              </Route>
              <Route path='/' exact>
                <Index/>
              </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
    );
}


export default App;
