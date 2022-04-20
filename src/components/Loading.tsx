import React from 'react'
import { CircularProgress, Box, Backdrop } from '@mui/material'

type LoadingProps = {
  open: boolean
}

const Loading = ({ open }: LoadingProps) => {
  return (
    <Box component='div'>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </Box>
  )
}

export default Loading
