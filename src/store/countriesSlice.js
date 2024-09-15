import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries:[],
    loading:false,
    error: null
}

export const countriesSlice = createSlice({
    name:'countries',
    initialState,
    reducers:{
        setCountries: (state, actions) =>{
            state.countries = actions.payload
        },
        setLoading: (state, actions) =>{
            state.loading = actions.payload
        },
        setError: (state, actions) =>{
            state.error = actions.payload
        }
    }
})

export default countriesSlice.reducer;
export const {setCountries, setLoading, setError} = countriesSlice.actions