import React from 'react';
import GiftList from "../GiftList/GiftList";
import GiftListForm from "../GiftListForm/GiftListForm";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {GiftListDetails} from "../GiftListDetails/GiftListDetails.layout";

export function GiftListApp() {
    return (
        <Router>
            <Switch>

                <Route path="/" exact>
                    <GiftList/>
                    <Link to="/edit">Add new gift list</Link>
                </Route>

                <Route path="/edit/:id">
                    <GiftListForm />
                    <Link to="/">Go back</Link>
                </Route>

                <Route path="/details/:id">
                    <GiftListDetails />
                    <Link to="/">Go back</Link>
                </Route>

                <Route path="/edit/">
                    <GiftListForm />
                    <Link to="/">Go back</Link>
                </Route>

            </Switch>
        </Router>
    )
}