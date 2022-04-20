import React from 'react'
import { Container } from '@mui/material'
import Depart from './BookingPages/Depart'
import Return from './BookingPages/Return'
import Navbar from './Navbar'
import Loading from './Loading'
import { useAppSelector } from '../hooks'
import Payment from './BookingPages/Payment'

type FlightProps = {}

const Flights = ({}: FlightProps) => {
  const step = useAppSelector((state) => state.booking.step)
  const flightDetails = useAppSelector((state) => state.booking.flightDetails)

  const [loading, setLoading] = React.useState(true)

  const renderFlightType = () => {
    switch (step) {
      case 'Depart':
        return <Depart tripType={flightDetails?.tripType} />
      case 'Return':
        return <Return />
      case 'Payment':
        return <Payment />
      default:
        return null
    }
  }

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 4000)

    const getFlightDetails = async () => {
      try {
        let response = await fetch('https://localhost:8080/api/flights')
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  return (
    <>
      <Navbar
        boxSx={{
          backgroundColor: '#AE73CF',
          backgroundImage: 'linear-gradient(326deg, #AE73CF 70%, #E073C5 0%)',
          pt: 1,
          pb: 1,
          mb: 2,
        }}
        logoSx={{ color: 'white', paddingLeft: 'unset', fontSize: 24 }}
      />
      {loading ? (
        <Loading open={loading} />
      ) : (
        <Container maxWidth='lg' sx={{ pt: 2 }}>
          {renderFlightType()}
        </Container>
      )}
    </>
  )
}

export default Flights
