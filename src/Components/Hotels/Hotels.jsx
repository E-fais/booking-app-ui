import { Button, Pagination, Stack, Typography } from "@mui/material";
import { HotelContext } from "../../context/HotelContext";
import React, { useContext, useEffect, useState } from "react";
import "./Hotel.css";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import hotelData from "../../datas/data";

function Hotels() {
  const { hotels, setHotels } = useContext(HotelContext);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 9;
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const paginatedData = hotels.slice(indexOfFirstHotel, indexOfLastHotel);
  const navigate = useNavigate();

  setHotels(hotelData);

  return (
    <div className="hotels">
      <Typography
        variant="h5"
        align="center"
        sx={{ color: "#3A488A " }}
        paddingTop={2}
        marginBottom={2}
        fontWeight={700}
      >
        Best Hotels For You
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems={"center"}
        justifyContent="center"
       
    
      >
        {paginatedData.map((hotel) => {
          return (
            <Grid
              item
              key={hotel.id}
             
              alignItems="center"
              justifyContent={"center"}
              xs={12}
              md={4}
              
              
            >
              <div className="hotelListDiv">
              <img className="HotelImages"
                alt="hotelImage"
                src={hotel.image}
              />
              <Typography
                variant="h6"
                sx={{ color: "#3A488A " }}
                align="center"
                fontWeight={700}
              >
                {hotel.name}
              </Typography>
              <Typography vaiant="h6" fontWeight={700} align="center">
                {hotel.place}.
              </Typography>
              <Stack direction="row" gap={2} justifyContent={"center"}>
                <Typography variant="body1" fontWeight={700} color="secondary">
                  Price:₹{hotel.rate}
                </Typography>
                <Typography variant="body1" color="secondary">
                  Rating:{hotel.rating}/5
                </Typography>
              </Stack>
              <Stack alignItems={"center"} margin={1}>
                <Button
                  variant="contained"
                  onClick={() => {
                    navigate(`hotelDetails/${hotel.id}`);
                  }}
                >
                  Book Hotel
                </Button>
              </Stack>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Stack alignItems="center" justifyContent={"center"} padding={2}>
        {hotels.length > hotelsPerPage && (
          <Pagination
            size="small"
            variant="outlined"
            count={Math.ceil(hotels.length / hotelsPerPage)}
            defaultPage={1}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </div>
  );
}

export default Hotels;
