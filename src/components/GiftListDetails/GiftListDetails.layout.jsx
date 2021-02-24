import React from "react";

export function GiftListDetails(props) {

    const giftListDetails = props.listOfGiftLists.find(
        (giftList) => giftList.creationDate.toString() === props.match.params.id);

return giftListDetails ? (
    <div>
a thing
    </div>
)
    : <div>not a thing</div>
}
