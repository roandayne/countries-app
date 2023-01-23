import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const countriesAdapter = createEntityAdapter({
  selectId: (country) => country.flag
})
// const countryAdapter = createEntityAdapter({
//   selectId: (country) => country.name
// })
export const countriesSelector = countriesAdapter.getSelectors(
  (state) => state.countries
);
// export const countrySelector = countryAdapter.getSelectors(
//   (state) => state.country
// )

const initialState = {
  countries: countriesAdapter.getInitialState(),
  activeCountry: null,
}

export const countryViewerSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    initializeCountriesData: (state, action) => {
      countriesAdapter.setAll(state.countries, action.payload);
      state.activeCountry = action.payload?.[0]
    },
    setActiveCountry: (state, action) => {
      state.activeCountry = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { initializeCountriesData, setActiveCountry } = countryViewerSlice.actions

export default countryViewerSlice.reducer