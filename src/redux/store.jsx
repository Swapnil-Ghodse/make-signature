import { configureStore } from "@reduxjs/toolkit";
import drawReducer from './drawSplice';

export const store = configureStore({
    reducer:{
        draw: drawReducer,

    },
});

