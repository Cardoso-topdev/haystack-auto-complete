import { Autocomplete, Paper, TextField } from '@mui/material';
import React from 'react';

const tempData = [
  { title: 'Menu item 1', id: 1 },
  { title: 'Menu item 2', id: 2 },
  { title: 'Menu item 3', id: 3 },
  { title: 'Menu item 4', id: 4 },
  { title: 'Menu item 5', id: 5 },
  { title: 'Menu item 6', id: 6 },
  { title: 'Menu item 7', id: 7 },
  { title: 'Menu item 8', id: 8 },
  { title: 'Menu item 9', id: 9 },
  { title: 'Menu item 10', id: 10 },
  { title: 'Menu item 11', id: 11 },
  { title: 'Menu item 12', id: 12 },
  { title: 'Menu item 13', id: 13 },
  { title: 'Menu item 14', id: 14 },
  { title: 'Menu item 15', id: 15 },
  { title: 'Menu item 16', id: 16 },
  { title: 'Menu item 17', id: 17 },
  { title: 'Menu item 18', id: 18 },
  { title: 'Menu item 19', id: 19 },
  { title: 'Menu item 20', id: 20 },
];

interface CustomPaperProps {
}

const CustomPaper: React.FC<CustomPaperProps> = (props) => {
  return <Paper
    elevation={8}
    {...props}
    sx={{
      '&::-webkit-scrollbar': {
        width: '10px'
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '10px solid slategrey'
      },
      '@global': {
        '*::-webkit-scrollbar': {
          width: '10px'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey'
        }
      }
    }}
  />;
};

interface AutoCompleteProps {
  label?: string;
  placeHolder?: string;
  backgroundColor?: string;
  width?: string;
  borderRadius?: string;
  size?: "small" | "medium" | undefined;
  onChange?: () => void;
  onInputChange?: () => void;
  onOpen?: () => void;
}
const AutoComplete: React.FC<AutoCompleteProps> = ({
  label = "Label",
  placeHolder = "Value",
  backgroundColor = "white",
  width = "320px",
  size = "small",
  borderRadius = "10px",
  ...props
}) => {
  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={tempData}
      getOptionLabel={(option) => option.title}
      filterSelectedOptions
      size={size}
      sx={{
        width,
        backgroundColor,
        borderRadius,
      }}
      {...props}
      PaperComponent={CustomPaper}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeHolder}
        />
      )}
    />
  );
};

export default AutoComplete;