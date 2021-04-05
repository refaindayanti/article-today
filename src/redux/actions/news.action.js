import axios from "axios";
import { actionTypes } from "../actionTypes"
import { URL_API } from "../../configs/environments";
import { errorHandler } from "../errorHandler";

export const fetchData = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.fetch_request
        })

        return axios.get(`${URL_API}`).then(
            (response) => {
                dispatch({
                    type: actionTypes.fetch_success,
                    payload: response.data.result
                });
                return response;
            },
            (error) => {
                dispatch({
                    type: actionTypes.fetch_error,
                    statMsg: errorHandler(error)
                });
                throw error;
            }
        )
    };
}