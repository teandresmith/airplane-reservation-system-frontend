import React from 'react'
import { Stack, Box, Button, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { MHFTextField } from 'mui-hook-form-mhf'
import { customStyles } from './styles'
import axios from 'axios'

type FormData = {
  reservationNumber: string
  firstName: string
  lastName: string
}

const CheckInFlightOption = () => {
  const methods = useForm<FormData>()

  const onSubmit = methods.handleSubmit(async (data: FormData) => {
    try {
      // Use a fetch request to check if reservation number exists
      const response = await axios.get(
        'http://localhost:8080/api/reservation/:reservationid'
      )

      // Check if reservation exists && IF so change checkedIn Status to true.
      if (
        response.data.result.reservationNumber === data.reservationNumber &&
        response.data.result.firstName === data.firstName &&
        response.data.result.lastName === data.lastName
      ) {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        await axios.patch(
          'http://localhost:8080/api/reservation/:reservationid',
          { checkedIn: true },
          config
        )
      }

      // Set Snackbar => to show that check in was successful.
    } catch (error) {
      console.log(error)
    }

    console.log(data)
  })

  return (
    <>
      <Box component='form' onSubmit={onSubmit}>
        <Stack direction='column' spacing={2} sx={{ p: 3 }}>
          <Typography variant='h4'>Check-In</Typography>
          <MHFTextField
            name='reservationNumber'
            control={methods.control}
            id='reservation-input'
            label='Reservation Number'
            variant='standard'
            required
            sx={customStyles}
          />
          <MHFTextField
            name='firstName'
            control={methods.control}
            id='firstname-input'
            label='First Name'
            variant='standard'
            required
            sx={customStyles}
          />
          <MHFTextField
            name='lastName'
            control={methods.control}
            id='lastname-input'
            label='Last Name'
            variant='standard'
            required
            sx={customStyles}
          />
          <Button
            type='submit'
            variant='contained'
            color='secondary'
            sx={{
              backgroundColor: 'black',
              color: 'white',
              width: 'max-content',
            }}
          >
            Check-In
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default CheckInFlightOption
