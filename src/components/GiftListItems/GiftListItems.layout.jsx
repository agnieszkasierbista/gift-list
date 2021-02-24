import React from "react";
import {Link} from "react-router-dom";

export function GiftList(props) {

    return props.list.listOfGiftLists.map((giftList) => {
        return (
            <Link to={`/edit/${giftList.creationDate}`} key={giftList.creationDate}> {giftList.giftRecipient} </Link>
        )
    })
}