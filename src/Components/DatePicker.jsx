import  React,{Fragment, useState,useContext} from 'react';
import addWeeks from 'date-fns/addWeeks';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Box from '@mui/material/Box';
import { HotelContext } from '../context/HotelContext';



function getWeeksAfter(date, amount) {
  return date ? addWeeks(date, amount) : undefined;
}

export default function MinMaxDateRangePicker({price}) {
  const{date,setDate}=useContext(HotelContext)
const numberOfDays=(date[1]-date[0])/86400000
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        disablePast
        value={date}
        maxDate={getWeeksAfter(date[0], 4)}
        onChange={(newdate) => {
          setDate(newdate);
        }}
        
        renderInput={(startProps, endProps) => (
          <Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
