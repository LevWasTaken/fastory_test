import './css/App.css';
// import People from './component/People';
// import { Provider } from 'react-redux';
// import store from './store';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home, DefaultPage, People} from './page/Index'
const App = () => {
    return (

    <div className="App" >
        <Router>
                <Switch>

                    <Route exact path="/">
                        <DefaultPage Page={Home}/>
                    </Route>

                    <Route exact path="/People">
                        <DefaultPage Page={People}/>
                    </Route>

                </Switch>
            </Router>
    </div>
    );
}

export default App;