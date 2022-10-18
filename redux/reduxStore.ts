import { configureStore } from '@reduxjs/toolkit';

//reducers
import todoReducer from './reducers/todoReducer';
import wordsReducer from './reducers/wordsReducer';


const reduxStore = configureStore({
    reducer: {
      todoReducer,
      wordsReducer
    }
})

export type RootState = ReturnType <typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;