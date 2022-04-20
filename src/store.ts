import { configureStore } from '@reduxjs/toolkit'
import { airportAPI } from './redux/api/airportAPI'
import bookingReducer from './redux/services/bookingSlice'

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    [airportAPI.reducerPath]: airportAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(airportAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
