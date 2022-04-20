import React from 'react'
import {
  Box,
  IconButton,
  Grid,
  Button,
  SxProps,
  Theme,
  Stack,
} from '@mui/material'
import AdapterMoment from '@date-io/moment'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { CompareArrows } from '@mui/icons-material'
import { Colors } from '../../assets/ColorPallete'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks'
import { setFlightDetails } from '../../redux/services/bookingSlice'
import {
  MHFRadioButtonGroup,
  MHFAutocomplete,
  MHFSelect,
  MHFDatePicker,
} from 'mui-hook-form-mhf'

type FormData = {
  tripType: 'One Way' | 'Round Trip'
  from: Airport
  to: Airport
  oneWayDate?: Date | string
  roundTripDepartDate?: Date | string
  roundTripReturnDate?: Date | string
  passengers: number
  fareClass: 'Economy' | 'Business' | 'First Class' | undefined
}

interface Airport {
  label: string
  city: string
  acronym: string
  country: string
  id: number
}

const BookFlightOption = () => {
  const methods = useForm<FormData>()

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  let tripType = methods.watch('tripType')

  const onSubmit = methods.handleSubmit((data: FormData) => {
    if (data.from.label === data.to.label) {
      methods.setError('from', {
        message: 'Cannot fly and land from same airport',
      })
      methods.setError('to', {
        message: 'Cannot fly and land from same airport',
      })
      return
    }

    if (tripType === 'One Way') {
      data.oneWayDate = data.oneWayDate?.toString()
    } else {
      data.roundTripDepartDate = data.roundTripDepartDate?.toString()
      data.roundTripReturnDate = data.roundTripReturnDate?.toString()

      data?.roundTripDepartDate &&
        data?.roundTripReturnDate &&
        console.log(data?.roundTripDepartDate > data?.roundTripReturnDate)
    }

    dispatch(setFlightDetails(data))
    navigate('/flights')
  })

  const customStyles: SxProps<Theme> = {
    '& .MuiInputBase-root.MuiInput-root::after': {
      borderColor: 'black',
    },
    '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
      color: 'black',
    },
  }

  const airports: Array<Airport> = [
    {
      label: 'Okinawa, Japan - OKA',
      city: 'Naha City',
      acronym: 'OKA',
      country: 'Japan',
      id: 1994,
    },
    {
      label: 'Tampa, Florida - TPA',
      city: 'Tampa',
      acronym: 'TPA',
      country: 'USA',
      id: 1972,
    },
  ]

  return (
    <>
      <Box component='form' onSubmit={onSubmit}>
        <Grid
          container
          alignItems={'center'}
          columnGap={1}
          rowGap={3}
          sx={{ p: 3 }}
        >
          <Grid item xs={12}>
            <MHFRadioButtonGroup
              name='tripType'
              control={methods.control}
              formLabel=''
              defaultValue={'Round Trip'}
              radioLabels={['Round Trip', 'One Way']}
              row
              sx={{
                '& .MuiButtonBase-root.MuiRadio-root.Mui-checked': {
                  color: 'black',
                },
              }}
            />
          </Grid>
          <Grid item alignItems={'center'} md={5}>
            <MHFAutocomplete
              defaultValue={''}
              name='from'
              control={methods.control}
              disablePortal
              id={'from-autocomplete'}
              options={airports}
              isOptionEqualToValue={(option, value) =>
                option.label === value.label || value === ''
              }
              required
              variant='standard'
              label='From'
              sx={customStyles}
            />
          </Grid>
          <Grid item md={1} justifyContent='center'>
            <Box component='div'>
              <IconButton>
                <CompareArrows sx={{ color: 'black', fontSize: 30 }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item md={5}>
            <MHFAutocomplete
              defaultValue={''}
              name='to'
              control={methods.control}
              disablePortal
              id={'to-autocomplete'}
              options={airports}
              isOptionEqualToValue={(option, value) =>
                option.label === value.label || value === ''
              }
              required
              variant='standard'
              label='To'
              sx={customStyles}
            />
          </Grid>
          <Grid item md={tripType === 'One Way' ? 7 : 12}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              {tripType === 'One Way' ? (
                <>
                  <MHFDatePicker
                    name='oneWayDate'
                    control={methods.control}
                    label='Depart Date'
                    fullWidth
                    required
                    variant='standard'
                    sx={customStyles}
                  />
                </>
              ) : (
                <>
                  <Stack direction='row' spacing={2}>
                    <MHFDatePicker
                      name='roundTripDepartDate'
                      control={methods.control}
                      label='Depart Date'
                      required
                      variant='standard'
                      sx={customStyles}
                    />
                    <MHFDatePicker
                      name='roundTripReturnDate'
                      control={methods.control}
                      label='Return Date'
                      required
                      variant='standard'
                      sx={customStyles}
                    />
                  </Stack>
                </>
              )}
            </LocalizationProvider>
          </Grid>
          <Grid item md={5}>
            <MHFSelect
              name='passengers'
              autoWidth
              control={methods.control}
              variant='standard'
              label='Passengers'
              labelId='passengers-id'
              required
              formControlSx={customStyles}
              selectItemList={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              defaultValue={1}
              fullWidth
            />
          </Grid>
          <Grid item md={6}>
            <MHFSelect
              name='fareClass'
              control={methods.control}
              selectItemList={['Economy', 'Business', 'First Class']}
              label='Fare Class'
              labelId='fareClass-labelid'
              required
              fullWidth
              formControlSx={customStyles}
              defaultValue='Economy'
              variant='standard'
            />
          </Grid>
          <Grid item md={12}>
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              sx={{ backgroundColor: Colors.Black }}
            >
              Find Flights
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default BookFlightOption
