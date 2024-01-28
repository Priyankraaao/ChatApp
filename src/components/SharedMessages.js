import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { dispatch } from "../redux/store";
import { UpdateSidebarType } from "../redux/slices/app";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { faker } from "@faker-js/faker";
import { DocMsg, LinkMsg } from "./Conversation/MessageTypes";
import { SHARED_DOCS, SHARED_LINK } from "../data";

const Media = () => {
  return (
    <Grid container spacing={2}>
      {[1, 2, 3, 4, 5, 6, 7].map(() => {
        return (
          <Grid item xs={4}>
            <img src={faker.image.avatar()} />
          </Grid>
        );
      })}
    </Grid>
  );
};

const Link = () => {
  return SHARED_LINK.map((item) => {
    return (
      <Box>
        <LinkMsg chat={item} />
      </Box>
    );
  });
};

const Doc = () => {
  return SHARED_DOCS.map((item) => {
    return <DocMsg chat={item} />;
  });
};

const SharedMessages = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState("media");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabComponents = {
    media: Media,
    link: Link,
    doc: Doc,
  };

  const ActiveComponent = TabComponents[value || "media"];

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
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        {/* Body */}
      
          <Tabs
            sx={{ px: 1, pt: 1 }}
            value={value}
            onChange={handleChange}
            centered
          >
            <Tab label="Mdeia " value={"media"} />
            <Tab label="Link" value={"link"} />
            <Tab label="Doc" value={"doc"} />
          </Tabs>
      

        <Stack p={2} spacing={2} alignItems={"center"}  sx={{height:"100%", flexGrow:1, position:"relative", overflowY:"scroll"}}>
          <ActiveComponent />
        </Stack>
      </Stack>
    </Box>
  );
};
export default SharedMessages;
