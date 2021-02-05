import {useRouteMatch, Switch, Route } from "react-router-dom";

import s from './style.module.css';
import cn from 'classnames';
import Home from "./components/routs/Home";
import GamePage from "./components/routs/Game";
import AboutPage from "./components/routs/About";
import ContactPage from "./components/routs/Contact";
import NotFoundPage from "./components/routs/NotFound";
import Footer from "./components/Footer";
import MenuHeader from "./components/menuHeader/MenuHeader";






const App = () => {

    const match = useRouteMatch('/')
    console.log('####: match', match)

return(
<Switch>
    <Route>
        <>
            <MenuHeader bgActive={!match.isExact}/>
            <div className={cn(s.wrap, {
                [s.isHome]: match.isExact
            })}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home"  component={Home} />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
            </Switch>
            </div>
            <Footer />
        </>
    </Route>
    <Route component={NotFoundPage}/>
</Switch>
)
}

export default App;

