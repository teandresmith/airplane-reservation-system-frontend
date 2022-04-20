import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Airport } from '../Types'

export const airportAPI = createApi({
  reducerPath: 'airportAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  endpoints: (builder) => ({
    getAirports: builder.query<Airport, string>({
      query: () => '/airports',
    }),
  }),
})

export const { useGetAirportsQuery } = airportAPI
