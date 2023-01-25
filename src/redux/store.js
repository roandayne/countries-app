import createSagaMiddleware from '@redux-saga/core'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import countriesReducer from './countriesReducer'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware
})

sagaMiddleware.run(saga)

export default store

