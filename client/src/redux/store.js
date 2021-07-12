
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import watcherSaga from "./sagas/rootSaga";

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware]
	const store = createStore(
		rootReducer,
		{},
        applyMiddleware(...middleware)
	)
	sagaMiddleware.run(watcherSaga)
	return store;
}

export default configureStore;