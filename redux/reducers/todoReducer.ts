import { createSlice } from '@reduxjs/toolkit';
import { ITodoInitial } from '../../types/reduxTypes';

const initialState:ITodoInitial  = {
    todos: []
};

const todoReducer = createSlice({
    name: 'todoReducer',
    initialState: initialState,
    reducers : {
        setTodos (state, action) {
            state.todos = action.payload;
        },
    }
})

export const { setTodos } = todoReducer.actions;

export default todoReducer.reducer;