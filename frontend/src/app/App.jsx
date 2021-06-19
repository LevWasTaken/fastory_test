import './css/App.css';
// import People from './component/People';
// import { Provider } from 'react-redux';
// import store from './store';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, DefaultPage, People, Films, Planets, Species, Starships, Vehicles, Connexion } from './page/Index'
const App = () => {
    return (

        <div className="App" >
            <Router>
                <Switch>

                    <Route exact path="/">
                        <DefaultPage Page={Home} />
                    </Route>

                    <Route exact path="/people">
                        <DefaultPage Page={People} />
                    </Route>

                    <Route exact path="/films">
                        <DefaultPage Page={Films} />
                    </Route>

                    <Route exact path="/planets">
                        <DefaultPage Page={Planets} />
                    </Route>

                    <Route exact path="/species">
                        <DefaultPage Page={Species} />
                    </Route>

                    <Route exact path="/starships">
                        <DefaultPage Page={Starships} />
                    </Route>

                    <Route exact path="/vehicles">
                        <DefaultPage Page={Vehicles} />
                    </Route>

                    <Route exact path="/connexion">
                        <DefaultPage Page={Connexion} />
                    </Route>


                </Switch>
            </Router>
        </div>
    );
}

export default App;