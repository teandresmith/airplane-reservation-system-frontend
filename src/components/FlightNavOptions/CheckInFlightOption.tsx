import React from 'react'
import { Stack, Box, Button, Typography, SxProps, Theme } from '@mui/material'
import { useForm } from 'react-hook-form'
import { MHFTextField } from 'mui-hook-form-mhf'

type FormData = {
  reservationNumber: string
  firstName: string
  lastName: string
}

const CheckInFlightOption = () => {
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
