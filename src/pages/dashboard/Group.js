import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { ArchiveBox, MagnifyingGlass, Plus } from "phosphor-react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { faker } from "@faker-js/faker";
import ChatElement from "../../components/ChatElement";
import CreateGroup from "../../sections/main/CreateGroup";
import { useState } from "react";


const Group = () => {
  const theme = useTheme();
  const [openDailog,setOpenDailog]=useState(false)

  return (
    <>
        <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* /<Chats > */}

      <Box
        sx={{
          height: "100vh",
          width: 320,
          boxShadow: "0px , 0px , 2px rgba(0,0,0,,0.25) ",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#f8faff"
              : theme.palette.background,
        }}
      >
        <Stack spacing={2} p={3} sx={{ maxHeight: "100vh" }}>
          <Stack>
            <Typography variant="h5">Groups</Typography>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709ce6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search" />
            </Search>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="subtitle2" component={Link}>
              Create New Group
            </Typography>
            <IconButton onClick={()=>setOpenDailog(true)}>
              <Plus style={{ color: theme.palette.primary.main }} />
            </IconButton>
          </Stack>
          <Divider />
         
          <Stack
            spacing={2}
            direction={"column"}
            sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
          >
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  Pinned
                </Typography>

                {ChatList.filter((item) => item.pinned).map((chat) => {
                  return <ChatElement key={chat.id} {...chat} />;
                })}
              </Stack>
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  All Groups
                </Typography>

                {ChatList.filter((item) => !item.pinned).map((chat) => {
                  return <ChatElement key={chat.id} {...chat} />;
                })}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
    </Stack>
    {openDailog && <CreateGroup  open={openDailog} handleClose={()=>{
        setOpenDailog(false)
    }}/>}
    
    </>


  );
};

export default Group;
