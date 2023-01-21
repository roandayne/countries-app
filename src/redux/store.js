import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import countriesReducer from './countriesReducer'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
})

export const useAppSelector = useSelector
