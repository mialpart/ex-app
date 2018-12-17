import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './../components/NotFoundPage';
import Header from './../components/Header'
import HomePage from './../components/HomePage'
import Portfolio from './../components/Portfolio';
import PortfolioItemPage from './../components/PortfolioItemPage';
import Contact from './../components/Contact';


const AppRouter = () =>  (
    <BrowserRouter>
    <div>
    <Header></Header>
    <Switch>
        <Route path="/" component={HomePage} exact={true} ></Route>
        <Route path="/portfolio/" component={Portfolio} exact={true}></Route>
        
        <Route path="/portfolio/:id" component={PortfolioItemPage} ></Route>
        <Route path="/contact" component={Contact} ></Route>
        <Route  component={NotFound} ></Route>
     </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;