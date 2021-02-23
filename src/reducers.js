import {combineReducers} from "redux";
import {reducer} from "redux-form";
import {SAVE_NEW_GIFT_LIST} from "./actions";

const preloadedState = { giftList: [{
        giftRecipient: "Mateusz",
        gifts: ["aaa", "bbb"],
        creationDate: 1613937775725
    }, {giftRecipient: "Ola",
        gifts: ["aaa", "bbb"],
        creationDate: 1613937775726}]};

export const rootReducer = combineReducers({
    list: function (state = preloadedState, action) {

        const handlers = {
            [SAVE_NEW_GIFT_LIST]: function () {
                return {
                    ...state,
                    giftList: state.giftList.concat({
                        ...action.payload,
                        creationDate: Date.now()
                    })
                }
            }
        };


        return handlers[action.type] ? handlers[action.type]() : state
    },
    form: reducer
});