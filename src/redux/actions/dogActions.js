import Axios from 'axios';
import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR } from '../constants'

const URL = 'https://dog.ceo/api/breeds/list/all';

export default dispatch => {
    return Axios.get(URL)
        .then(res => {
            dispatch({
                type: GET_DATA_SUCCESS,
                payload: res.data.message
            });
        })
        .catch(error => {
            dispatch({
                type: GET_DATA_ERROR,
                payload: console.log(error)
            })
        })
}
