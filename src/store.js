import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import todoListSaga from './sagas/todoListSagas';
import DevTools from './containers/DevTools';

const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(sagaMiddleware),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
  );

const store = createStore(
    rootReducer,
    enhancer
)
if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers')/*.default if you use Babel 6+ */)
    );
}

sagaMiddleware.run(todoListSaga)

export default store