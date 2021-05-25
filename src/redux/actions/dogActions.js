import { Search } from '@material-ui/icons';
import Axios from 'axios';
import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR } from '../constants'

const URL = 'https://dog.ceo/api/breeds/list/all';
const dogName = 'Ibizan Hound'

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

export function SearchDogs(dogName) {
    return dispatch => {
        return Axios.post(`https://dog.ceo/api/breed/${dogName}/images/random/posts`)
        .then((res) => {
            /// callback

            dispatch({
                type: GET_DATA_REQUEST,
                payload: res.data.message
            })
        })
    }

}
