import { SxProps, Theme } from '@mui/material'

export const customStyles: SxProps<Theme> = {
  '& .MuiInputBase-root.MuiInput-root::after': {
    borderColor: 'black',
  },
  '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
    color: 'black',
  },
}
