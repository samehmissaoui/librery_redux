
import {combineReducers} from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { bookReducer, penReducer } from './toolkitSlicer';
import logger from 'redux-logger';


const rootReducer = combineReducers({
  book: bookReducer,
  pen: penReducer,
}); 



// Define the middleware including the logger
const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});


export default store;