// import { getLocalStorage } from '../helpers/getLocalStorage'
import { actionTypes } from '../actionTypes'

const initialState = {
    data: {}
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.fetch_request: {
            return {
                ...state,
            };
        }

        case actionTypes.fetch_success: {
            return {
                ...state,
                data: action.payload
            };
        }

        case actionTypes.fetch_error: {
            return {
                ...state,
                allData: {
                    ...state.allData,
                    [action.path]: [],
                },
                [action.path]: [],
                statMsg: action.statMsg
            };
        }

        default:
            return state;
    }
};

export default homeReducer;