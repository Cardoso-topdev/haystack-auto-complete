import React, { useState } from 'react';
import { AutoCompleteItem } from 'types';
import MainLayout from '../layouts/MainLayout';
import AutoComplete from 'components/AutoComplete';

const tempData: Array<AutoCompleteItem> = [
  { title: 'Menu item 1', value: 1 },
  { title: 'Menu item 2', value: 2 },
  { title: 'Menu item 3', value: 3 },
  { title: 'Menu item 4', value: 4 },
  { title: 'Menu item 5', value: 5 },
  { title: 'Menu item 6', value: 6 },
  { title: 'Menu item 7', value: 7 },
  { title: 'Menu item 8', value: 8 },
  { title: 'Menu item 9', value: 9 },
  { title: 'Menu item 10', value: 10 },
  { title: 'Menu item 11', value: 11 },
  { title: 'Menu item 12', value: 12 },
  { title: 'Menu item 13', value: 13 },
  { title: 'Menu item 14', value: 14 },
  { title: 'Menu item 15', value: 15 },
  { title: 'Menu item 16', value: 16 },
  { title: 'Menu item 17', value: 17 },
  { title: 'Menu item 18', value: 18 },
  { title: 'Menu item 19', value: 19 },
  { title: 'Menu item 20', value: 20 },
];

const Home: React.FC = () => {
  const [value, setValue] = useState<Array<number>>([]);
  const onChange = (event: any, value: any) => {
    setValue(value);
  }

  return (
    <MainLayout>
      <AutoComplete label='Label' placeHolder='Value' multiple={true} options={tempData} value={value} onChange={onChange} />
    </MainLayout>
  );
};

export default Home;