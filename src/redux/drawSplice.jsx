import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clear: false,
    strokeColor: '#000000',
    strokeSize: 1,
};
export const mainSplice = createSlice({
    name: 'draw',
    initialState,
    reducers:{
        pickColor: (state, action)=>{
            state.strokeColor = action.payload;
        },
        changeStrokeSize: (state, action)=>{
            state.strokeSize = action.payload;
        },
        clearScreen: (state)=>{
            state.clear = true;
        },
        resetClearScreen: (state)=>{
            state.clear = initialState.clear;
        }

    }
});

export const {pickColor, changeStrokeSize, clearScreen, resetClearScreen} = mainSplice.actions;
export default mainSplice.reducer;