import {BAY_BOOK, SELL_BOOK} from '../constant/actionType';
export const addBook = number => {
    return {
        type: BAY_BOOK,
        payload: number
    }
}
export const sellBook = number => {
    return {
        type: SELL_BOOK,
        payload: number
    }
}