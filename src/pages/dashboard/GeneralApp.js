import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

const ComponentMapping = {
  CONTACT: Contact,
  STARRED: StarredMessages,
  SHARED: SharedMessages,
};

const GeneralApp = () => {
  const theme = useTheme();
  const appStore = useSelector((store) => store.app);

  const RightSideComponent = ComponentMapping[appStore.sidebar.type];

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: appStore.sidebar.open
            ? "calc(100vw - 740px)"
            : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0f4f4"
              : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>

      {appStore.sidebar.open ? <RightSideComponent /> : null}
    </Stack>
  );
};

export default GeneralApp;
