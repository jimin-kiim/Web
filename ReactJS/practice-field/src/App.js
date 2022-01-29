import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/movie/:id">
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
} //looking at the url
export default App;
// Browser Router: /movie
//HashRouter: /#/movie
