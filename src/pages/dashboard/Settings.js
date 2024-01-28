import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  Pencil,
} from "phosphor-react";

const Settings = () => {
  const theme = useTheme();

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notification",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <Pencil size={20} />,
      title: "Theme",
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Note",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: () => {},
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Box
        sx={{
          overflowY: "scroll",
          height: "100vh",
          width: 320,
          background:
            theme.palette.mode === "light"
              ? "#f8faff"
              : theme.palette.background,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack p={4} spacing={3}>
          {/* header  */}
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <IconButton>
              <CaretLeft size={24} color={"#4b4b4b"} />
            </IconButton>
            <Typography variant="h6">Settings</Typography>
          </Stack>
          {/* profile  */}
          <Stack direction={"row"} spacing={3} alignItems={"center"}>
            <Avatar sx={{ width: 56, height: 56 }} src={faker.image.avatar()} />
            <Stack>
              <Typography variant="article">
                {faker.name.firstName()}
              </Typography>
              <Typography variant="body2">{faker.name.fullName()}</Typography>
            </Stack>
          </Stack>

          {/* List of otpions */}
          <Stack spacing={4}>
            {list.map(({ key, icon, title, onclick }) => {
              return (
                <Stack
                  key={key}
                  spacing={2}
                  sx={{ cursor: "pointer" }}
                  onClick={onclick}
                >
                  <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    {icon}
                    <Typography variant="body2">{title}</Typography>
                  </Stack>
                  <Divider />
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Settings;
