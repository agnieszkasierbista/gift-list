import React from 'react';
import ListOfGiftLists from "../ListOfGiftLists/ListOfGiftLists";
import EditGiftListForm from "../GiftListForm/EditGiftListForm";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {GiftListDetails} from "../GiftListDetails/GiftListDetails.layout";
import NewGiftListForm from "../GiftListForm/NewGiftListForm";

export function GiftListApp() {
    return (
        <Router>
            <Switch>

                <Route path="/" exact>
                    <ListOfGiftLists/>
                    <Link to="/edit">Add new gift list</Link>
                </Route>

                <Route path="/edit/:id">
                    <EditGiftListForm />
                    <Link to="/">Go back</Link>
                </Route>

                <Route path="/details/:id">
                    <GiftListDetails />
                    <Link to="/">Go back</Link>
                </Route>

                <Route path="/edit/">
                    <NewGiftListForm />
                    <Link to="/">Go back</Link>
                </Route>

            </Switch>
        </Router>
    )
}