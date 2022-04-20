import React from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Flight } from '@mui/icons-material'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setSelectedFlights, setStep } from '../../redux/services/bookingSlice'
import { FlightInfo, Ticket } from '../../redux/Types'

type DepartProps = {
  tripType: 'One Way' | 'Round Trip' | undefined
}

const Depart = ({ tripType }: DepartProps) => {
  const [ticketWindow, setTicketWindow] = React.useState(false)
  const [ticket, setTicket] = React.useState<Ticket | null>(null)

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const dispatch = useAppDispatch()
  const booking = useAppSelector((state) => state.booking.flightDetails)

  const flightInfo: Array<FlightInfo> = [
    {
      flightNumber: 'SS212',
      flightDuration: '3hr 15m',
      startTime: '3:50PM',
      endTime: '5:05PM',
      departAirport: 'OKA',
      destAirport: 'HND',
      seatTypes: [
        { seatType: 'Economy', price: 759.99 },
        { seatType: 'Business', price: 1059.99 },
        { seatType: 'First Class', price: 1599.99 },
      ],
    },
    {
      flightNumber: 'SS212',
      flightDuration: '3hr 15m',
      startTime: '3:50PM',
      endTime: '5:05PM',
      departAirport: 'OKA',
      destAirport: 'HND',
      seatTypes: [
        { seatType: 'Economy', price: 759.99 },
        { seatType: 'Business', price: 1059.99 },
        { seatType: 'First Class', price: 1599.99 },
      ],
    },
    {
      flightNumber: 'SS212',
      flightDuration: '3hr 15m',
      startTime: '3:50PM',
      endTime: '5:05PM',
      departAirport: 'OKA',
      destAirport: 'HND',
      seatTypes: [
        { seatType: 'Economy', price: 759.99 },
        { seatType: 'Business', price: 1059.99 },
        { seatType: 'First Class', price: 1599.99 },
      ],
    },
  ]

  const selectTicket = (flight: FlightInfo, selectedSeat: any) => {
    const ticket: Ticket = {
      flightInfo: flight,
      fareClass: selectedSeat?.seatType,
      price: selectedSeat?.price,
    }

    console.log(flight, selectedSeat)

    setTicket(ticket)
    setTicketWindow(true)
  }

  const handleClose = () => {
    setTicketWindow(false)
    setTicket(null)
  }

  const handleConfirmation = () => {
    if (tripType === 'One Way') {
      dispatch(setStep({ step: 'Payment' }))
    } else {
      dispatch(setStep({ step: 'Return' }))
    }

    dispatch(setSelectedFlights({ selectedFlights: [ticket] }))
  }

  return (
    <Box component='div'>
      <Stack direction='row' justifyContent={'space-between'}>
        <Typography variant='h4'>{`Flights ${booking?.from?.acronym}・${booking?.to?.acronym}`}</Typography>
        <Select
          color='secondary'
          defaultValue={'Price'}
          sx={{
            borderRadius: 7,
            '& .MuiInputBase-root.MuiOutlinedInput-root.MuiSelect-root': {
              borderColor: 'black',
            },
            '& .MuiInputBase-root.MuiOutlinedInput-root.MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              {
                borderWidth: '2px',
                borderColor: 'black',
              },
          }}
        >
          <MenuItem value={'Price'}>Price</MenuItem>
        </Select>
      </Stack>
      <Card variant='outlined' sx={{ height: '100%', mt: 4, mb: 4 }}>
        <CardContent sx={{ p: 0, maxHeight: 200 }}>
          <Stack direction='row'>
            <Box component='div' sx={{ width: '50%', p: 2 }}>
              <Typography variant='h5'>Your Ticket to Paradise</Typography>
              <Typography variant='body1' sx={{ pt: 1 }}>
                Sunset Airlines values customer loyalty over everything. We
                enjoy seeing repeated customers and for that reason, we make
                sure to present customers that have signed up for our Bonus
                Mileage Program only the best offers. Sign up today!
              </Typography>
              <Typography variant='body1' sx={{ fontSize: 12, pt: 2 }}>
                Elgibility and Terms apply*
              </Typography>
            </Box>
            <Box
              component='img'
              src='https://images.unsplash.com/photo-1490735891913-40897cdaafd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              sx={{
                width: '50%',
                maxHeight: 200,
                objectFit: 'fill',
              }}
            />
          </Stack>
        </CardContent>
      </Card>

      <Stack direction='row' spacing={1} sx={{ pb: 3 }}>
        <Box component='div'>
          <Typography variant='h5'>
            {tripType === 'One Way'
              ? booking?.oneWayDate?.toString().slice(0, 15)
              : booking?.roundTripDepartDate?.toString().slice(0, 15)}
          </Typography>
          <Typography variant='body1'>All prices include tax</Typography>
        </Box>
      </Stack>

      <Stack direction='column' spacing={2} sx={{ pb: 5 }}>
        {flightInfo.map((item, key) => (
          <Stack
            direction='row'
            key={key}
            sx={{
              '& .MuiPaper-root.MuiCard-root': {
                borderTopRightRadius: '0px',
                borderBottomRightRadius: '0px',
              },
            }}
          >
            <Card
              sx={{
                width: '40%',
              }}
              variant='outlined'
            >
              <CardContent>
                <Stack direction='row' sx={{ pb: 1 }}>
                  <Typography variant='h5'>{`${item.departAirport}・${item.destAirport}`}</Typography>
                </Stack>
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  sx={{ pb: 1 }}
                >
                  <Typography variant='body1' sx={{ fontSize: 14 }}>
                    {item.flightNumber}
                  </Typography>
                  <Typography variant='body1'>{item.flightDuration}</Typography>
                </Stack>
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems={'center'}
                >
                  <Typography variant='h6' sx={{ fontSize: 28 }}>
                    {item.startTime}
                  </Typography>
                  <Flight sx={{ transform: 'rotate(90deg)' }} />
                  <Typography variant='h6' sx={{ fontSize: 28 }}>
                    {item.endTime}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
            {item.seatTypes.map((seat: any, key: any) => (
              <React.Fragment key={key}>
                <Box
                  component='div'
                  sx={{
                    width: '20%',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    transition:
                      'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;',
                    WebkitTransition:
                      'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;',
                    ':hover': {
                      backgroundColor: 'rgba(189,123,213, 0.1)',
                      cursor: 'pointer',
                    },
                    ':last-of-type': {
                      borderTopRightRadius: '4px',
                    },
                  }}
                  onClick={(e: any) => selectTicket(item, seat)}
                >
                  <Typography variant='subtitle1' sx={{ color: '#AE73CF' }}>
                    {seat.seatType}
                  </Typography>
                  <Typography variant='subtitle1' sx={{}}>
                    from
                  </Typography>
                  <Typography variant='h6' sx={{}}>
                    {`$${seat.price}`}
                  </Typography>
                </Box>
              </React.Fragment>
            ))}
          </Stack>
        ))}
      </Stack>
      <Dialog
        fullScreen={matches}
        open={ticketWindow}
        onClose={handleClose}
        aria-labelledby='confirm-ticket-dialog'
      >
        {ticket !== null && (
          <>
            <DialogTitle>Ticket Confirmation</DialogTitle>
            <DialogContent>
              <Card sx={{ width: 300, height: 200 }}>
                <CardContent>
                  <Typography variant='h5' sx={{ pb: 1 }}>
                    {ticket?.fareClass}
                  </Typography>
                  <Typography variant='h6'>{`${ticket?.flightInfo?.departAirport}・${ticket?.flightInfo?.destAirport}`}</Typography>
                  <Typography variant='body1'>{`${ticket?.flightInfo?.startTime} - ${ticket?.flightInfo?.endTime}`}</Typography>

                  <Typography variant='body1' sx={{ pt: 2 }}>
                    From{' '}
                    <Box component='span' sx={{ fontSize: 22 }}>
                      ${ticket?.price}
                    </Box>
                  </Typography>
                </CardContent>
              </Card>
              <DialogContentText></DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant='text' color='inherit' onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant='outlined'
                color='inherit'
                onClick={handleConfirmation}
              >
                Continue
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  )
}

export default Depart
