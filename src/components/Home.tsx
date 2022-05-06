import React, { useState } from 'react'
import {
  Box,
  Container,
  Tabs,
  Tab,
  Stack,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@mui/material'
import Navbar from './Navbar'
import BookFlightOption from './FlightNavOptions/BookFlightOption'
import CheckInFlightOption from './FlightNavOptions/CheckInFlightOption'
import FlightStatusFlightOption from './FlightNavOptions/FlightStatusFlightOption'
import MyTripsFlightOption from './FlightNavOptions/MyTripsFlightOption'
import Footer from './Footer'

type Props = {}

const Home = (props: Props) => {
  const [tab, setTab] = useState('Book')

  const handleChange = (event: React.SyntheticEvent, value: string): void => {
    setTab(value)
  }

  const tabContent = () => {
    switch (tab) {
      case 'Book':
        return <BookFlightOption />
      case 'Check-In':
        return <CheckInFlightOption />
      case 'Flight Status':
        return <FlightStatusFlightOption />
      case 'My Trips':
        return <MyTripsFlightOption />
      default:
        break
    }
  }

  return (
    <>
      <Box
        component={'div'}
        sx={{
          backgroundImage: `url("https://images.unsplash.com/photo-1608501078713-8e445a709b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80")`,
          width: '100%',
          backgroundRepeat: 'no-repeat',
          height: '800px',
          backgroundPosition: 'center',
        }}
      >
        <Navbar
          boxSx={{ backgroundColor: 'none' }}
          logoSx={{ color: 'white', paddingLeft: 'unset', fontSize: 24 }}
        />
        <Container maxWidth='lg'>
          <Box
            component='div'
            sx={{
              backgroundColor: 'white',
              maxWidth: '50%',
              mt: 7,
              borderRadius: 2,
              height: 450,
            }}
          >
            <Tabs
              value={tab}
              onChange={handleChange}
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: 'black',
                },
                '& .MuiButtonBase-root.MuiTab-root': {
                  color: 'white',
                  backgroundColor: 'black',
                },
                '& .MuiButtonBase-root.MuiTab-root:last-child': {
                  color: 'white',
                  backgroundColor: 'black',
                  borderTopRightRadius: '8px',
                },
                '& .MuiButtonBase-root.MuiTab-root:first-of-type': {
                  color: 'white',
                  backgroundColor: 'black',
                  borderTopLeftRadius: '8px',
                },
                '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: 2,
                },
              }}
            >
              <Tab
                value={'Book'}
                label='Book'
                sx={{
                  width: '25%',
                }}
              />
              <Tab value={'Check-In'} label='Check-In' sx={{ width: '25%' }} />
              <Tab
                value={'Flight Status'}
                label='Flight Status'
                sx={{ width: '25%' }}
              />
              <Tab value={'My Trips'} label='My Trips' sx={{ width: '25%' }} />
            </Tabs>
            {tabContent()}
          </Box>
        </Container>
      </Box>
      <Box
        component='div'
        sx={{ backgroundColor: 'black', width: '100%', height: '100px' }}
      />
      <Box component='div' sx={{ width: '100%' }}>
        <Typography variant='h4' textAlign={'center'} sx={{ pt: 6 }}>
          Smooth Travel is Stress-Free Travel
        </Typography>
        <Stack
          direction='row'
          justifyContent={'center'}
          spacing={4}
          sx={{ pt: 4 }}
        >
          <Card variant='outlined' sx={{ width: 300 }}>
            <CardContent>
              <Typography variant='h6'>Covid-19 Requirements</Typography>
              <Typography variant='body1'>
                Get and stay updated with entry requirements for all of the
                countries you are planning on visiting.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='outlined' color='secondary'>
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card variant='outlined' sx={{ width: 300 }}>
            <CardContent>
              <Typography variant='h6'>Flight Credits</Typography>
              <Typography variant='body1'>
                Learn more about our flight milage programs and how it was
                created to benefit consumers.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='outlined' color='secondary'>
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card variant='outlined' sx={{ width: 300 }}>
            <CardContent>
              <Typography variant='h6'>Travel Safe {'&'} Worry Free</Typography>
              <Typography variant='body1'>
                Find out any required or forbidden items to make the check-in
                process that much smoother.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='outlined' color='secondary'>
                Read More
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Box>
      <Box component='div' sx={{ pt: 6, pb: 4 }}>
        <Typography variant='h4' textAlign={'center'}>
          Covid Precaution Expectations
        </Typography>
        <Stack
          direction='row'
          justifyContent={'center'}
          spacing={4}
          sx={{ pt: 4 }}
        >
          <Box
            component='img'
            src='https://images.unsplash.com/photo-1608023136037-626dad6c6188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
            alt='Empty'
            sx={{ width: '40%' }}
          />
          <Box component='div' sx={{ width: '40%' }}>
            <Typography variant='h6' sx={{ fontSize: 30 }}>
              Let's Stay Safe
            </Typography>
            <Typography
              variant='body1'
              fontSize={{ sm: 20, md: 26 }}
              sx={{ pt: 1 }}
            >
              It is our priority to keep all of our passengers safe during these
              times. For that reason, we have placed safety and cleanliness at
              the forefront of our travel experience.
            </Typography>
            <Button variant='contained' color='secondary' sx={{ mt: 1 }}>
              Learn More
            </Button>
          </Box>
        </Stack>
        <Stack
          direction='row-reverse'
          justifyContent={'center'}
          spacing={4}
          sx={{ pt: 5 }}
        >
          <Box
            component='img'
            src='https://images.unsplash.com/photo-1495320520040-44186a20c601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='Empty'
            sx={{ width: '40%' }}
          />
          <Box component='div' sx={{ width: '40%' }}>
            <Typography variant='h6' sx={{ fontSize: 30 }}>
              Our Travel Recommendations
            </Typography>
            <Typography
              variant='body1'
              fontSize={{ sm: 20, md: 26 }}
              sx={{ pt: 1 }}
            >
              To reduce exposure and touchpoints, we recommend passengers
              check-in electronically. With our new QR code app, passengers are
              now able to check-in bags touchless.
            </Typography>
            <Button variant='contained' color='secondary' sx={{ mt: 1 }}>
              Learn More
            </Button>
          </Box>
        </Stack>
        <Stack
          direction='row'
          justifyContent={'center'}
          spacing={4}
          sx={{ pt: 5 }}
        >
          <Box
            component='img'
            src='https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
            alt='Empty'
            sx={{ width: '40%' }}
          />
          <Box component='div' sx={{ width: '40%' }}>
            <Typography variant='h6' sx={{ fontSize: 30 }}>
              Unsure Where to Go?
            </Typography>
            <Typography
              variant='body1'
              fontSize={{ sm: 20, md: 26 }}
              sx={{ pt: 1 }}
            >
              No worries, if you are unsure where you would like to go and would
              like to know the locations we support. Then feel free to take a
              look at our interactive map.
            </Typography>
            <Button variant='contained' color='secondary' sx={{ mt: 1 }}>
              Learn More
            </Button>
          </Box>
        </Stack>
      </Box>
      <Footer />
    </>
  )
}

export default Home
