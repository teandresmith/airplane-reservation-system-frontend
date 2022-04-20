import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const initialState = {
  airports: [],
}

export const airportAPI = createApi({
  reducerPath: 'airportAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  endpoints: (builder) => ({
    getAirports: builder.query<any, string>({
      query: () => '/airports',
    }),
  }),
})

export const { useGetAirportsQuery } = airportAPI
