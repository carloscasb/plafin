/** ORIGINAL
import {configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import appSlice from './app-slice';

const store = configureStore({
    reducer: {ui: uiSlice, app: appSlice}
})

export default store;
*/

import { configureStore } from "@reduxjs/toolkit"
import appSlice from "./app-slice";
import uiSlice from "./ui-slice";
//o uiSlice ja traz(levam) os reducers
const store = configureStore({
    reducer: {ui: uiSlice, app: appSlice }
    //reducer: {ui: uiSlice.reducer}
})  

export default store;