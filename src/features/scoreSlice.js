import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    timeTake: null,
    startTime: null
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        resetScore: (state) => {
            state.value = 0
            state.timeTake = null
            state.startTime = null
        },
        startQuiz: (state) => {
            state.startTime = Date.now()
        },
        setTimeTake: (state, action) => {
            state.timeTake = action.payload
        },
    },
})

export const {
    increment,
    incrementByAmount,
    resetScore,
    startQuiz,
    setTimeTake
} = scoreSlice.actions

export const selectScore = (state) => {
    return state.value;
};

export const quizStartTime = (state) => {
    return state.startTime;
};

export const quizTimeTaken = (state) => {
    return state.timeTake;
};


export default scoreSlice.reducer