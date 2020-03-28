import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./privateRoute";

import DefaultLayout from "../components/DefaultLayout";

import Login from "../pages/Login";
import Orders from "../pages/Orders";
import Deliverymans from "../pages/Deliverymans";
import DeliverymansForm from "../pages/DeliverymansForm";
import Recipients from "../pages/Recipients";
import Problems from "../pages/Problems";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <DefaultLayout>
                <PrivateRoute path="/orders" component={Orders} />
                <PrivateRoute path="/deliverymans" exact component={Deliverymans} />
                <PrivateRoute path="/deliverymans/form" component={DeliverymansForm} />
                <PrivateRoute path="/recipients" component={Recipients} />
                <PrivateRoute path="/problems" component={Problems} />
            </DefaultLayout>
        </Switch>
    );
}
