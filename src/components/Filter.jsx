import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
  const [region, setRegion] = React.useState('');

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <div style={{cssFloat: "right", padding: "10px 40px"}}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-standard-label">Filter by Region</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={region}
          onChange={handleChange}
          label="Region"
        >
          <MenuItem value="">
            <em>--</em>
          </MenuItem>
          <MenuItem value={10}>Africa</MenuItem>
          <MenuItem value={20}>Americas</MenuItem>
          <MenuItem value={30}>Asia</MenuItem>
          <MenuItem value={40}>Europe</MenuItem>
          <MenuItem value={50}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}