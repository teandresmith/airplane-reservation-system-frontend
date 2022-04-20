import React from 'react'
import { Button, Stack, Box, Container, SxProps, Theme } from '@mui/material'
import { Link } from 'react-router-dom'

type NavbarProps = {
  boxSx: SxProps<Theme>
  logoSx: SxProps<Theme>
}

const Navbar = ({ boxSx, logoSx }: NavbarProps) => {
  return (
    <>
      <Box component={'div'} sx={boxSx}>
        <Container maxWidth='lg'>
          <Stack
            direction='row'
            justifyContent={'space-between'}
            alignItems='center'
            sx={{ width: '100%' }}
          >
            <Box component='div'>
              <Button component={Link} to='/' size='large' sx={logoSx}>
                Sunset Airlines
              </Button>
            </Box>
            <Box component='div'></Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Navbar
