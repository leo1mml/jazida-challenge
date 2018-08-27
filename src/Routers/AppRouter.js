import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AssignScreen from '../Containers/AssignScreen';
import HashGameScreen from '../Containers/HashGameScreen';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={AssignScreen} exact={true}/>
                <Route path="/game" component={HashGameScreen}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;