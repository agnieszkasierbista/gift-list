import React from "react";

export function GiftListDetails(props) {

    const giftListDetails = props.list.listOfGiftLists.find(
        (giftList) => giftList.creationDate.toString() === props.match.params.id);

    const giftsList = giftListDetails.gifts.map((gift) => {
        return (
            <div key={gift}>
                {gift}
                <input type="checkbox"/>
            </div>
        );
    });

    return giftListDetails ? (
            <>
                <div>
                    Recipient: {giftListDetails.giftRecipient}
                </div>
                <div>
                    Gifts: {giftsList}
                </div>
            </>
        )
        : <div>Ooops! Chosen list does not exist. Please try again!</div>
}
