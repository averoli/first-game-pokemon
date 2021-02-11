import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import cn from 'classnames';

import Home from "./components/routs/Home";
import GamePage from "./components/routs/Game";
import AboutPage from "./components/routs/About";
import ContactPage from "./components/routs/Contact";
import NotFoundPage from "./components/routs/NotFound";
import Footer from "./components/Footer";
import MenuHeader from "./components/menuHeader/MenuHeader";

import s from './style.module.css';





const App = () => {

    const match = useRouteMatch('/')


return(
<Switch>
    <Route path='/404'  component={NotFoundPage}/>
    <Route>
        <>
            <MenuHeader bgActive={!match.isExact}/>
            <div className={cn(s.wrap, {
                [s.isHome]: match.isExact
            })}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route render={()=>(
                    <Redirect to='/404' component={NotFoundPage}/>
                )}/>
            </Switch>
            </div>
            <Footer />
        </>
    </Route>

</Switch>
)
}

export default App;

