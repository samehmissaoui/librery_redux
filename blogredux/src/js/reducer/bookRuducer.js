import {BAY_BOOK, SELL_BOOK} from '../constant/actionType';

const initialState = {
    count: 0
}
const bookRuducer = (state = initialState, action) => {
    switch (action.type) {

        case BAY_BOOK:
            return {
                ...state,
                count:state.count +parseInt (action.payload),
            }
            case SELL_BOOK:
                return{
                    ...state,
                    count:state.count -parseInt (action.payload),

                }
        default:
            return state
    }
}

export default bookRuducer