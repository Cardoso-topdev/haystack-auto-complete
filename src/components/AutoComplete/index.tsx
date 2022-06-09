import { Autocomplete, AutocompleteProps as MuiAutocompleteProps, Box, Paper, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import { AutoCompleteItem } from 'types';

const CustomAutoComplete = styled(Autocomplete)`
  box-shadow: inset 0 0 3px rgba(black, 0.8);
  & .MuiChip-root.MuiChip-filled {
    background-color: rgba(63, 81, 181, 0.08);
  }
`

const CustomPaper: React.FC = (props) => {
  return <Paper
    elevation={8}
    {...props}
    sx={{
      '.MuiAutocomplete-listbox::-webkit-scrollbar': {
        width: '14px'
      },
      '.MuiAutocomplete-listbox::-webkit-scrollbar-track': {
        boxShadow: 'inset 1px 0px 0px #DEDEDE'
      },
      '.MuiAutocomplete-listbox::-webkit-scrollbar-thumb': {
        border: '4px solid transparent',
        borderRadius: '10px',
        width: '6px',
        boxShadow: 'inset 0 0 10px 10px #5E637F'
      }
    }}
  />;
};

interface AutoCompleteProps<T = any> extends Pick<
  MuiAutocompleteProps<T, boolean, boolean, boolean>,
  'size' | 'onChange' | 'value' | 'multiple'> {
  label?: string;
  placeHolder?: string;
  width?: number;
  options: Array<AutoCompleteItem>;
}

const MuiAutoComplete: React.FC<AutoCompleteProps> = ({
  label = "Label",
  placeHolder = "Value",
  width = 320,
  size = "small",
  options,
  value,
  ...props
}) => {
  return (
    <Box>
      <Typography variant='caption'>{label}</Typography>
      <CustomAutoComplete
        id="tags-outlined"
        options={options.map((item: AutoCompleteItem) => item.value)}
        getOptionLabel={(option: any) => options.find(item => item.value === option)?.title ?? ''}
        filterSelectedOptions
        size={size}
        sx={{ width }}
        value={props.multiple ? Array.isArray(value) ? value : [] : value}
        PaperComponent={CustomPaper}
        renderInput={(params: any) => (
          <TextField
            {...params}
            placeholder={placeHolder}
          />
        )}
        {...props}
      />
    </Box>
  );
};

export default MuiAutoComplete;