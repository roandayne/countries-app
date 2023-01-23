import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

const countriesAdapter = createEntityAdapter({
  selectId: (country) => country.flag
})

export const countriesSelector = countriesAdapter.getSelectors(
  (state) => state.countries
);

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