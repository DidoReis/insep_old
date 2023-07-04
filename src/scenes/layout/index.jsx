import React, {useState} from 'react';
import { Box, useMediaQuery} from "@mui/material";
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from "components/Navbar";

const Layout = () => {
  return (
    <Box width="1440px" height="5820px" border="1px solid red">
        <Box>
            <Navbar />
            <Outlet/>
        </Box>
    </Box>
  )
}

export default Layout