import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Copyright } from '@mui/icons-material'

type FooterProps = {}

const Footer = (props: FooterProps) => {
  return (
    <Box
      component='div'
      sx={{
        width: '100%',
        height: 150,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        direction='row'
        spacing={2}
        alignItems={'center'}
        sx={{ color: 'white' }}
      >
        <Typography variant='h6'>Home</Typography>
        <Typography variant='h6'>Covid</Typography>
        <Typography variant='h6'>Contact</Typography>
      </Stack>
      <Stack
        direction='row'
        spacing={1}
        alignItems={'center'}
        sx={{ color: 'white' }}
      >
        <Copyright sx={{ fontSize: '16px' }} />
        <Typography variant='h6'>2022 Sunset Airlines</Typography>
      </Stack>
    </Box>
  )
}

export default Footer
