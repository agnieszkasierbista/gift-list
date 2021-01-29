import React from 'react';
import GiftList from "../GiftList/GiftList";
import {GiftListAdder} from "../GiftListAdder/GiftListAdder.layout";

export function GiftListApp() {
    return(
        <div>
            <GiftListAdder />
            <GiftList />
        </div>
    )
}