import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { dispatch } from "../redux/store";
import { UpdateSidebarType } from "../redux/slices/app";
import { CaretLeft } from "phosphor-react";
import React from "react";
import Message from "./Conversation/Message";

const StarredMessages = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* heading */}
        <Box
          sx={{
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ height: "100%", p: 2 }}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Starred Messages</Typography>
          </Stack>
        </Box>
        {/* Body */}

        <Stack
          px={2}
          spacing={2}
          alignItems={"center"}
          sx={{
            height: "100%",
            width: "100%",
            overflowY: "scroll",
          }}
        >
          <Message />
        </Stack>
      </Stack>
    </Box>
  );
};
export default StarredMessages;
