import {Route, BrowserRouter} from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import CreatePoint from './pages/createPoint';
const Router = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path='/' exact/>
            <Route component={CreatePoint} path='/create-point'/>

        </BrowserRouter>
    )
}
export default Router;