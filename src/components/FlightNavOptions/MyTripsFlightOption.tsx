import React from 'react'
import { Box, Grid, Typography, Button, SxProps, Theme } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import AdapterMoment from '@date-io/moment'
import { useForm } from 'react-hook-form'
import { MHFDatePicker, MHFTextField } from 'mui-hook-form-mhf'

type FormData = {
  firstName: string
  lastName: string
  reservationNumber: string
  flightNumber: string
  departDate: Date | string
}

const MyTripsFlightOption = () => {
  const methods = useForm<FormData>()

  const onSubmit = methods.handleSubmit((data: FormData) => console.log(data))

  const customStyles: SxProps<Theme> = {
    '& .MuiInputBase-root.MuiInput-root::after': {
      borderColor: 'black',
    },
    '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
      color: 'black',
    },
  }
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
            <MHFTextField
              name='flightNumber'
              control={methods.control}
              id='flightnumber-input'
              label='Flight Number'
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
