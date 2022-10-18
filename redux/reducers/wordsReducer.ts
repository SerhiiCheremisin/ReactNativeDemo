import { createSlice } from '@reduxjs/toolkit';

import { initialWordList } from '../../services/initialWordList';
import { IWordReducerInitial } from '../../types/reduxTypes';

const initialState: IWordReducerInitial  = {
    words: initialWordList,
    shuffeledWords : [],
    pace: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    isGameStarted: false
};

const wordsReducer = createSlice({
    name: 'wordsReducer',
    initialState: initialState,
    reducers : {
        setWords (state, action) {
            state.words = action.payload;
        },
        setPace (state, action) {
            state.pace = action.payload;
        },
        setCorrect (state, action) {
            state.correctAnswers = action.payload;
        },
        setIncorrect (state, action) {
            state.incorrectAnswers = action.payload;
        },
        setGameStarted (state, action) {
            state.isGameStarted = action.payload;
        },
        setShuffled (state, action) {
            state.shuffeledWords = action.payload;
        }
    }
})

export const { setWords, setPace, setCorrect, setIncorrect, setGameStarted, setShuffled } = wordsReducer.actions;

export default wordsReducer.reducer;