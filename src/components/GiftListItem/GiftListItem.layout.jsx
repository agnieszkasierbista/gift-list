import React from "react";

export function GiftListItem(props) {

    return props.list.giftList.map((item) => {
        return (
            <div key={item.giftRecipient}> {item.giftRecipient} </div>
        )
    })
}