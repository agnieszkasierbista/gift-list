export const SAVE_NEW_GIFT_LIST = "SAVE_NEW_GIFT_LIST";

export function saveNewGiftList(payload) {
    return {
        type: SAVE_NEW_GIFT_LIST,
        payload
    }
}