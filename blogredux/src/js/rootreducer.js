import { combineReducers } from 'redux';
import bookRuducer from './reducer/bookRuducer';
import penReducer from './reducer/penReduce';
 const rootReducer =combineReducers({

    book:bookRuducer ,
    pen:penReducer
 })
 export default rootReducer