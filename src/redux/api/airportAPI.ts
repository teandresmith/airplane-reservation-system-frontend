import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Airport } from '../Types'

export const airportAPI = createApi({
  reducerPath: 'airportAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (builder) => ({
    getAirports: builder.query<Airport, string>({
      query: () => '/airports',
    }),
  }),
})

export const { useGetAirportsQuery } = airportAPI
