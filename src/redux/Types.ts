export interface Airport {
  label: string
  city: string
  acronym: string
  country: string
  id: number
}

export interface FlightDetails {
  tripType: 'One Way' | 'Round Trip' | undefined
  from: Airport | undefined
  to: Airport | undefined
  oneWayDate?: string
  roundTripDepartDate?: string
  roundTripReturnDate?: string
  passengers: number | undefined
  fareClass: 'Economy' | 'Business' | 'First Class' | undefined
}

export interface Reservation {
  firstName: string
  lastName: string
  price: string
}

export interface FlightInfo {
  flightNumber: string
  flightDuration: string
  startTime: string
  endTime: string
  departAirport: string
  destAirport: string
  seatTypes: Array<{ seatType?: string; price?: number }>
}

export interface Ticket {
  flightInfo: FlightInfo
  fareClass: 'Economy' | 'Business' | 'First Class' | undefined
  price: number
}
