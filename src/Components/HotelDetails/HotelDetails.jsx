import { Box, Stack, Typography, Grid, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { HotelContext } from "../../context/HotelContext";
import HeaderSection from "../Header/HeaderSection";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import Date from "../DatePicker";
import {useNavigate} from 'react-router-dom'

function HotelDetails() {
  const navigate=useNavigate()
  const { id } = useParams();
  console.log(id);
  const { hotels, amount, setAmount } = useContext(HotelContext);
  const singleHotel = hotels.find((obj) => {
    return obj.id === Number(id);
  });
  const [rooms, setRooms] = useState(1);
  const [child, setChild] = useState(2);
  const [adults, setAdults] = useState(2);
  return (
    <div>
      <HeaderSection />
      <Box bgcolor={"#FCF9C1"} margin="0" padding={5}>
        <Grid
          container
          alignItems="center"
          justifyContent={"center"}
          gap={3}
          marginTop={3}
        >
          <Grid item 
          alignItems={'center'}
          justifyContent='center'
          bgcolor={"white"}
           paddingTop={3} 
           paddingBottom={1}
           border=' 5px solid #3A488A'>
<Stack   alignItems={'center'}
          justifyContent='center'>
            <img 
              style={{ borderRadius: "20px", height: "auto" ,width:'80%'}}
              src={singleHotel.image}
            /></Stack>
            <Typography
              paddingTop={2}
              sx={{ color: "#3A488A " }}
              variant="h5"
              align="center"
            >
              {singleHotel.name}
            </Typography>
            <Typography variant="h6" align="center">
              {singleHotel.place}
            </Typography>
          </Grid>
          <Grid
           border=' 5px solid #3A488A'
            item
            xs={12}
            md={6}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"white"}
            padding={5}
          >
            <Typography
              variant="h6"
              align="center"
              color="#3A488A "
              padding={2}
            >
              Rate:{singleHotel.rate}/Day
            </Typography>
            <Stack alignItems={"center"} justifyContent="center">
              <Date price={singleHotel.rate} />
            </Stack>
            <Stack
              border={"3px solid #3A488A "}
              justifyContent={"center"}
              alignItems={"center"}
              margin={2}
            >
              <Stack
                direction="row"
                gap={1}
                alignItems="center"
                justifyContent={"flex-end"}
              >
                <AddCircleRoundedIcon
                  onClick={() => setAdults(adults + 1)}
                  color="success"
                />
                <Typography variant="h6">{adults}-Adults</Typography>
                <RemoveCircleRoundedIcon
                  onClick={() => {
                    adults > 1 && setAdults(adults - 1);
                  }}
                  color="error"
                />
              </Stack>

              <Stack direction="row" gap={2} alignItems="center">
                <AddCircleRoundedIcon
                  onClick={() => setChild(child + 1)}
                  color="success"
                />
                <Typography variant="h6">{child}-Child</Typography>
                <RemoveCircleRoundedIcon
                  onClick={() => {
                    child > 0 && setChild(child - 1);
                  }}
                  color="error"
                />
              </Stack>

              <Stack direction="row" gap={1} alignItems="center">
                <AddCircleRoundedIcon
                  color="success"
                  onClick={() => setRooms(rooms + 1)}
                />
                <Typography variant="h6">{rooms}-Rooms</Typography>
                <RemoveCircleRoundedIcon
                  onClick={() => {
                    rooms > 1 && setRooms(rooms - 1);
                  }}
                  color="error"
                />
              </Stack>
            </Stack>
            <Stack alignItems="center" justifyContents="center" margin={2}>
          <Button  onClick={()=>navigate('/userInfo')}
          fullWidth
          variant="contained">
            Proceed
          </Button>
          </Stack>
          </Grid>
        </Grid>
       
       
      </Box>
    </div>
  );
}

export default HotelDetails;
