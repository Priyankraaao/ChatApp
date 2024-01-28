import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import {  MagnifyingGlass } from "phosphor-react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";

const Group = () => {
  return (
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
        </Stack>
      </Box>

      {/* <Box
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
      </Box> */}

      {/* {appStore.sidebar.open ? <RightSideComponent /> : null} */}
    </Stack>
  );
};

export default Group;
