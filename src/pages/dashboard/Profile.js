import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import ProfileForm from "../../sections/settings/ProfileForm";




const Profile = () => {
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
        <Stack spacing={5} p={4} sx={{ maxHeight: "100vh" }}>
          <Stack direction={"row"} alignItems={"center"}>
            <IconButton>
              <CaretLeft size={24} color="#4b4b4b" />
            </IconButton>
            <Typography variant="h5">Profile</Typography>
          </Stack>

          {/* form  */}
          <ProfileForm />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Profile;
