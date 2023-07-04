import React, {useState} from 'react'
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    SettingsOutlined,
    ArrowDropDownOutlined,
    Search,
} from "@mui/icons-material";
import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import { AppBar, IconButton, InputBase, Toolbar, useTheme, Box } from '@mui/material';

import Logo from "assets/img/logo.svg";
import LogoLetters from "assets/img/insep.svg";

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
  return (
    <AppBar
    sx={{position: "static",
       
        justifyContent: "space-between",
        
        background: "theme.palette.primary[500]", 
       
    }}
    >
        <Toolbar sx={{ 
        /* position: "fixed", */
        justifyContent: "space-between",
        display: "flex",
        width: "1440px",
        height: "72px",
        padding: "0px 32px",
        alignItems: "center",
        background: "theme.palette.primary[500]",
        boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)", 
        }}>
            {/* Left Side */}
            <FlexBetween>
                <Box component="img" sx={{width: "52px", height: "46px"}}
                alt="Logotipo."
                src={Logo}
                >
                </Box>
                <Box component="img" sx={{width: "101.963px", height: "27.96px", marginLeft: "17.06px"}}
                    alt="Logo Escrito Insep."
                    src={LogoLetters}
                ></Box>
            </FlexBetween>
            {/* Right Side */}
            <FlexBetween gap="1.5rem" sx={{display: "flex", width: "470.03px", height: "51px" ,border: "1px solid red"}}>
                
            </FlexBetween>
        </Toolbar>
        
    </AppBar>
  )
}

export default Navbar