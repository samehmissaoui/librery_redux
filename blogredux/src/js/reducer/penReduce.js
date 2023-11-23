import { BY_PEN, SELL_PEN } from "../constant/penActionType"


const initialState = {
    count: 0

    
}
const penReducer = (state = initialState, action) => {
    switch (action.type) {
        case BY_PEN:
            return {
                ...state,
                count:state.count +parseInt (action.payload),
            }
            case SELL_PEN:
                return {
                    ...state,
                    count:state.count -parseInt (action.payload),
                }
        default:
            return state
    }
}

export default penReducer