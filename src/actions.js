export const SAVE_NEW_GIFT_LIST = "SAVE_NEW_GIFT_LIST";
export const SAVE_EDITED_GIFT_LIST = "SAVE_EDITED_GIFT_LIST";

export function saveNewGiftList(payload) {
    return {
        type: SAVE_NEW_GIFT_LIST,
        payload
    }
}

export function saveEditedGiftList(payload) {
    return {
        type: SAVE_EDITED_GIFT_LIST,
        payload
    }
}