import { createSlice } from '@reduxjs/toolkit'
import { FlightDetails, Ticket } from '../Types'

interface BookingState {
  step: 'Depart' | 'Return' | 'Payment'
  flightDetails: FlightDetails
  selectedFlights: Array<Ticket>
}

const initialState: BookingState = {
  step: 'Depart',
  flightDetails: {
    tripType: undefined,
    from: undefined,
    to: undefined,
    passengers: undefined,
    fareClass: undefined,
  },
  selectedFlights: [],
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload.step
    },

    setSelectedFlights: (state, action) => {
      state.selectedFlights = action.payload.selectedFlights
    },
    setFlightDetails: (state, action) => {
      state.flightDetails = action.payload
    },
  },
})

export const { setStep, setSelectedFlights, setFlightDetails } =
  bookingSlice.actions

export default bookingSlice.reducer
