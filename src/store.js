import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./reducers";
import {createEpicMiddleware} from "redux-observable";
import {rootEpic} from "./epics";

const epicMiddleware = createEpicMiddleware(
    {dependencies: {history: window.history}}
);


export const store = createStore(rootReducer,
    compose(
        ...[
            applyMiddleware(
                epicMiddleware
            ),
            ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])

        ]
    )
);

epicMiddleware.run(rootEpic);