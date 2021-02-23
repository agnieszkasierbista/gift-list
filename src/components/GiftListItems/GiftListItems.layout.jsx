import React from "react";

export function GiftListItems(props) {

    return props.list.giftList.map((item) => {
        return (
            <div key={item.creationDate}> {item.giftRecipient} </div>
        )
    })
}