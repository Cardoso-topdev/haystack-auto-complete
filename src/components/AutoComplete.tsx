import { Autocomplete, TextField } from '@mui/material';
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

const AutoComplete: React.FC = () => {
  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={tempData}
      getOptionLabel={(option) => option.title}
      defaultValue={[tempData[13]]}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label="filterSelectedOptions"
          placeholder="Favorites"
        />
      )}
    />
  );
};

export default AutoComplete;