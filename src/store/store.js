import { configureStore} from '@reduxjs/toolkit';

import countriesReducer from './countrySlice';

export const store = configureStore({
    reducer:{
        countries: countriesReducer,
    },
});