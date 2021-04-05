import { combineReducers } from 'redux';
import news from './news.reducer';

const appReducer = combineReducers({
    news,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;