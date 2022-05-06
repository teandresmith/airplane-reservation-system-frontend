import React from 'react'
import { Box, Grid, Typography, Button } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import AdapterMoment from '@date-io/moment'
import { useForm } from 'react-hook-form'
import { MHFDatePicker, MHFTextField } from 'mui-hook-form-mhf'
import { customStyles } from './styles'
import axios from 'axios'

type FormData = {
  firstName: string
  lastName: string
  reservationNumber: string
  flightNumber: string
  departDate: Date | string
}

const MyTripsFlightOption = () => {
  const methods = useForm<FormData>()

  const onSubmit = methods.handleSubmit(async (data: FormData) => {
    console.log(data)

    try {
      /*
          If all fields match, the backend will send a JWT token so user may access their My Trips Page
          If it fails, it will set an error that reservation could not be found. Message will be vague 
          to protect from brute force attacks.

          My Trips Page will provide user the ability to change reservation seat, cancel reservation or 
          if they have not yet paid, they can pay for the reservation.

      */

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/reservation/${data.reservationNumber}`
      )

      if (
        response.data.result.firstName === data.firstName &&
        response.data.result.lastName === data.lastName &&
        response.data.result.reservationNumber === data.reservationNumber &&
        response.data.result.flightNumber === data.flightNumber &&
        response.data.result.departDate === data.departDate.toString()
      ) {
      }
    } catch (error) {}
  })

  return (
    <>
      <Box component='form' onSubmit={onSubmit}>
        <Grid container columnGap={2} sx={{ p: 3 }} rowGap={4}>
          <Grid item md={12}>
            <Typography variant='h4'>My Trips</Typography>
          </Grid>
          <Grid item md={5}>
            <MHFTextField
              name='firstName'
              control={methods.control}
              id='firstname-input'
              label='First Name'
              variant='standard'
              required
              sx={customStyles}
            />
          </Grid>
          <Grid item md={5}>
            <MHFTextField
              name='lastName'
              control={methods.control}
              id='lastname-input'
              label='Last Name'
              variant='standard'
              required
              sx={customStyles}
            />
          </Grid>
          <Grid item md={5}>
            <MHFTextField
              name='reservationNumber'
              control={methods.control}
              id='reservation-input'
              label='Reservation Number'
              variant='standard'
              required
              sx={customStyles}
            />
          </Grid>
          <Grid item md={5}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <MHFDatePicker
                name='departDate'
                control={methods.control}
                label='Depart Date'
                fullWidth
                required
                variant='standard'
                sx={customStyles}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item md={12}>
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              sx={{ backgroundColor: 'black', color: 'white' }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default MyTripsFlightOption
