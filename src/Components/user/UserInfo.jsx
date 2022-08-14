import { TextField, Typography, Box, Stack, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Bill() {
  const navigate = useNavigate();
  return (
    <div>
      <Box alignItems="center" justifyContent="center">
        <Typography mt={4} align="center" variant="body1">
          Please provide your contact details to continue...
        </Typography>
        <Stack
     
          justifyContent="center"
          gap={3}
          marginTop={5}
          alignItems={"center"}
          
        >
          <div 
          style={{border:'5px solid #3A488A', display:'flex',flexDirection:'column',gap:9,padding:15}}>
          <TextField label="Email" />
          <TextField label="Name" />
          <TextField label="Mobile Number" />
          <Button
            fullWidth
            onClick={() => {
              alert("Your Request Is Submitted, We will contact You soon");
              navigate("/");
            }}
          >
            Submit
          </Button>
          </div>
        </Stack>
      </Box>
    </div>
  );
}

export default Bill;
