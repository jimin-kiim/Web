import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
    return (
        <HashRouter>
            <Navigation />
            {/* As Navigation has Link, it has to be inside the Router.
            But like footers which don't have Link, can be located outside the Router */}
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={Detail} />
        </HashRouter>
    );
}

export default App;
