import {applyMiddleware, createStore} from 'redux';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    const store = createStoreWithMiddleware(rootReducers);

    if(module.hot){
        module.hot.accept(()=>{
            const nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer)
        });
    }

    return store;
    
}