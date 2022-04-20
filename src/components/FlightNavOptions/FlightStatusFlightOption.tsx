import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { LocalizationProvider } from '@mui/x-date-pickers'
import AdapterMoment from '@date-io/moment'
import { MHFAutocomplete, MHFDatePicker, MHFTextField } from 'mui-hook-form-mhf'
import { customStyles } from './styles'

type FormData = {
  from: string
  to: string
  flightNumber: string
  departDate: Date | string
}

const FlightStatusFlightOption = () => {
  const methods = useForm<FormData>()

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)

    // Create a Modal that displays flight status. In this project case, the flight status will always be "active"
  })
  const airports = [
    {
      label: 'Okinawa, Japan - OKA',
      city: 'Naha City',
      country: 'Japan',
      id: 1994,
    },
    { label: 'Tampa, Florida - TPA', city: 'Tampa', country: 'USA', id: 1972 },
  ]

  return (
    <>
      <Box component='form' onSubmit={onSubmit}>
        <Grid container columnGap={2} sx={{ p: 3 }} rowGap={4}>
          <Grid item md={12}>
            <Typography variant='h4'>Flight Status</Typography>
          </Grid>
          <Grid item md={5}>
            <MHFAutocomplete
              name='from'
              control={methods.control}
              disablePortal
              id={'from-autocomplete'}
              options={airports}
              sx={customStyles}
              label={'From'}
              variant='standard'
              required
              isOptionEqualToValue={(option: any, value: any) =>
                option.label === value.label || value === ''
              }
            />
          </Grid>
          <Grid item md={5}>
            <MHFAutocomplete
              name='to'
              control={methods.control}
              disablePortal
              id={'to-autocomplete'}
              options={airports}
              sx={customStyles}
              label={'To'}
              variant='standard'
              required
              isOptionEqualToValue={(option: any, value: any) =>
                option.label === value.label || value === ''
              }
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
              fullWidth
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
              Find Flight
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default FlightStatusFlightOption
