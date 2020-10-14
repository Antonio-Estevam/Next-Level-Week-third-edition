import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

import Orphanage from './pages/Orphanage';
import CreateOrphanages from './pages/CreateOrphanage';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing}/>
                <Route path='/app' component={OrphanagesMap}/>

                <Route path='/orphanage/create' component={CreateOrphanages}/>
                <Route path='/Orphanages/:id' component={Orphanage}/>
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;


//20:12