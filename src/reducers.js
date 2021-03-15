import {combineReducers} from "redux";
import {reducer} from "redux-form";
import {SAVE_EDITED_GIFT_LIST, SAVE_NEW_GIFT_LIST} from "./actions";

const preloadedState = { listOfGiftLists: [{
        giftRecipient: "Mateusz",
        gifts: ["aaa", "bbb", "ccc"],
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
                    listOfGiftLists: state.listOfGiftLists.concat({
                        ...action.payload,
                        creationDate: Date.now()
                    })
                }
            },
            [SAVE_EDITED_GIFT_LIST]: function () {
                return {
                    ...state,
                    listOfGiftLists: state.listOfGiftLists.map((list) => {
                        return list.creationDate === action.payload.creationDate ? action.payload : list
                    })
                }
            }

        };


        return handlers[action.type] ? handlers[action.type]() : state
    },
    form: reducer
});