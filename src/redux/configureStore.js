import {createStore, combineReducers} from 'redux';
import { Events} from './events';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            events: Events,
        })
    );

    return store;
}
