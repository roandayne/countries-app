import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const countriesAdapter = createEntityAdapter({
  selectId: (country) => country.flag
})
export const countriesSelector = countriesAdapter.getSelectors(
  (state) => state.countries
);

const initialState = {
  countries: countriesAdapter.getInitialState(),
  country: {},
}

export const countryViewerSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    initializeCountriesData: (state, action) => {
      countriesAdapter.setAll(state.countries, action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { initializeCountriesData } = countryViewerSlice.actions

export default countryViewerSlice.reducer