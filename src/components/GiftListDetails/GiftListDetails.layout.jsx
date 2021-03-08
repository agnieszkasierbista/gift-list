import React from "react";

export function GiftListDetails(props) {

    const giftListDetails = props.list.listOfGiftLists.find(
        (giftList) => giftList.creationDate.toString() === props.match.params.id);

    return giftListDetails ? (
            <div>
                a thing
            </div>
        )
        : <div>Ooops! Chosen list does not exist. Please try again!</div>
}
