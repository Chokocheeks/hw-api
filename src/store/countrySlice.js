import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    countries: [],
};

export const fetchCountriesData = createAsyncThunk('countries/fetch', async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    return response.json();
})

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchCountriesData.fulfilled, (state, action) => {
            state.countries = action.payload;
        });
    },

});

export default countriesSlice.reducer;