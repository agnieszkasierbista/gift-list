import {combineReducers} from "redux";

const preloadedState = { giftList: [{
        giftRecipient: "Mateusz",
        gift1: "aaa",
        gift2: "bbb"
    }, {giftRecipient: "Ola",
        gift1: "ccc",
        gift2: "ddd"}]};

export const rootReducer = combineReducers({
    list: function (state = preloadedState, action) {
        return {
            ...state,
            giftList: state.giftList
        }
    }
});