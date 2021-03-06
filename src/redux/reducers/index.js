import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR } from '../constants'

const initialState = {
    dogs:[],
    loading:true
}

 function dogsReducer(state = initialState, action){

    switch(action.type){

        case GET_DATA_SUCCESS:
        return {
            ...state,
            dogs:action.payload,
            loading:false

        }
        case GET_DATA_REQUEST:
        return {
            ...state,
            dogs:action.payload,
            loading:false

        }

        default: return state
    }

}

export { dogsReducer, initialState }