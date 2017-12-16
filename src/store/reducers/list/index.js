import * as types from '../../action-types'

let initState = {
    getList: []
};


export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_DATALIST:
            console.log(action.payload);
            return {
                ...state,
                getList: action.payload
            };
        default:
            return state
    }
}