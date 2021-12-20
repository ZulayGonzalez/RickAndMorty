import React from 'react'
import { Switch, Route } from "react-router-dom";
import DetallePersonajes from "./Pages/DetallePersonajes"

export default function Router() {
    return (
        <Switch>
            <Route exact path="/"component={DetallePersonajes}/>
           
        </Switch>
    )
}
