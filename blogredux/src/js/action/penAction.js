import { BY_PEN, SELL_PEN} from "../constant/penActionType";
export const addPen = number => {
    return {
        type: BY_PEN,
        payload: number
    }
}

export const removePen = number =>{
    return{
        type: SELL_PEN,
        payload: number
    }
}