import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  useTheme,
} from "@mui/material";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Gear } from "phosphor-react";
import useSettings from "../../hooks/useSettings";
import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import Logo from "../../assets/Images/logo.ico";
import AntSwitch from "../../components/AntSwitch";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const navigate=useNavigate();

  const { onToggleMode } = useSettings();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        height: "100vh",
        width: "100px",
      }}
    >
      <Stack
        direction={"column"}
        sx={{ width: "100%", height: "100%" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={3}
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          spacing={3}
          sx={{ width: "max-content" }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: "64px",
              width: "64px",
              borderRadius: 1.5,  // this will be mutliplied by 8 bcz its default spacing in material ui
            }}
          >
            <img src={Logo} alt="logo" />
          </Box>

          {Nav_Buttons.map((item) => {
            return selected === item.index ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  key={item.index}
                  sx={{ width: "max-content", color: "#fff" }}
                >
                  {item.icon}
                </IconButton>
              </Box>
            ) : (
              <IconButton
                key={item.index}
                onClick={() => {
                  setSelected(item.index);
                  navigate(item.path)  
                }}
                sx={{
                  width: "max-content",
                  color: theme.palette.mode === "light" ? "#000" : "#fff",
                }}
              >
                {item.icon}
              </IconButton>
            );
          })}
          <Divider width={48} />

          {Nav_Buttons.length === selected ? (
            <Box
              p={1}
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
              }}
            >
              <IconButton sx={{ width: "max-content", color: "#fff" }}>
                <Gear />
              </IconButton>
            </Box>
          ) : (
            <IconButton
              onClick={() => {
                setSelected(Nav_Buttons.length);
                navigate("/settings")  
              }}
              sx={{
                width: "max-content",
                color: theme.palette.mode === "light" ? "#000" : "#fff",
              }}
            >
              <Gear />
            </IconButton>
          )}
        </Stack>
        <Stack spacing={4} alignItems={"center"}>
          <AntSwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          />
          <Avatar
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            size={20}
            src={faker.image.avatar()}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((item) => {
                return (
                  <MenuItem onClick={handleClick}>
                    <Stack
                      direction="row"
                      sx={{
                        width: 100,
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{item.title}</span>
                      {item.icon}
                    </Stack>
                  </MenuItem>
                );
              })}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
