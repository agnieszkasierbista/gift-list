import React from "react";
import {Link} from "react-router-dom";
import {StyledGiftList} from "./GiftListItem.styled";

export function GiftList(props) {

    return props.list.listOfGiftLists.map((giftList) => {
        return (
            <StyledGiftList
                key={giftList.creationDate}
            >
                {giftList.giftRecipient}
                <Link to={`/edit/${giftList.creationDate}`} key={`/edit/$giftList.creationDate`}> EDIT </Link>
                <Link to={`/details/${giftList.creationDate}`} key={`/details/$giftList.creationDate`}> PICK </Link>
            </StyledGiftList>
        )
    })
}