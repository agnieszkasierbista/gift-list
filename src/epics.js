import {combineEpics, ofType} from "redux-observable";
import {catchError, switchMap} from "rxjs/operators";
import axios from "axios";
import {from, of} from "rxjs";
import {API_URL} from "./config";
import {GET_INITIAL_ITEMS, initializeList} from "./actions";


const onGetInitialItems = function (action$, state$) {

    return action$.pipe(
        ofType(GET_INITIAL_ITEMS),
        switchMap(
            function (action) {

                return from(axios.get(`${API_URL}/lists`))
                    .pipe(
                        switchMap(function (res) {
                            return of(initializeList(res.data))
                        }),
                        catchError(function (abc) {
                            return console.log("abc", abc)
                        })
                    )

            }
        ))};

export const rootEpic = combineEpics(
    onGetInitialItems
);