import React from 'react'; 
import {BrowserRouter} from 'react-router-dom';
//import NotFound from './../components/NotFoundPage';
import Header from './../components/Header';


const HomePage = () => (
<BrowserRouter>
    <div>
    <Header></Header>
    <h1>Welcome</h1>
    <p>tekstiä</p>
    </div>
    </BrowserRouter>
)


export default HomePage;