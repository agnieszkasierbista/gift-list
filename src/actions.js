export const SAVE_NEW_GIFT_LIST = "SAVE_NEW_GIFT_LIST";
export const SAVE_EDITED_GIFT_LIST = "SAVE_EDITED_GIFT_LIST";
export const GET_INITIAL_ITEMS = "GET_INITIAL_ITEMS";
export const INITIALIZE_LIST = "INITIALIZE_LIST";

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

export function getInitialList(payload) {
    return {
        type: GET_INITIAL_ITEMS,
        payload
    }
}

export function initializeList(payload) {
    return {
        type: INITIALIZE_LIST,
        payload
    }
}