import {
  Avatar,
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide  direction="up" ref={ref} {...props} />;
//   });

// const BlockDailog = () => {
//   return (
//     <Dialog
//       open={open}
//       TransitionComponent={Transition}
//       keepMounted
//       onClose={handleClose}
//       aria-describedby="alert-dialog-slide-description"
//     >
//       <DialogTitle>{"Use Google's location service?"}</DialogTitle>
//       <DialogContent>
//         <DialogContentText id="alert-dialog-slide-description">
//           Let Google help apps determine location. This means sending anonymous
//           location data to Google, even when no apps are running.
//         </DialogContentText>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Disagree</Button>
//         <Button onClick={handleClose}>Agree</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* header  */}
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
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        {/* body */}
        <Stack
          direction={"column"}
          sx={{
            position: "relative",
            height: "100%",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Avatar sx={{ height: 64, width: 64 }} src={faker.image.avatar()} />
            <Stack spacing={0.5}>
              <Typography fontWeight={600} variant="article">
                {faker.name.firstName()}
              </Typography>
              <Typography fontWeight={500} variant="subtitle2">
                9027171037
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack direction={"column"} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography fontWeight={500} variant="overline">
                Audio
              </Typography>
            </Stack>
            <Stack direction={"column"} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography fontWeight={500} variant="overline">
                Video
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">Heloo Brother</Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Media Link & Docs</Typography>
            <Button
              onClick={() => {
                dispatch(UpdateSidebarType("SHARED"));
              }}
              endIcon={<CaretRight />}
            >
              401
            </Button>
          </Stack>
          <Stack spacing={1} direction={"row"} alignItems={"center"}>
            {[1, 2, 3].map((items) => {
              return (
                <Box key={items}>
                  <img src={faker.image.food()} />
                </Box>
              );
            })}
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack spacing={2} direction={"row"} alignItems={"center"}>
              <Star size={21} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("STARRED"));
              }}
            >
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack spacing={2} direction={"row"} alignItems={"center"}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>
            <IconButton>
              <AntSwitch />
            </IconButton>
          </Stack>
          <Divider />
          <Stack spacing={2}>
            <Typography variant="subtitle2">1 Common Group</Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Avatar
                sx={{ height: 50, width: 50 }}
                src={faker.image.avatar()}
              />
              <Stack spacing={0.5}>
                <Typography variant="article">
                  {faker.name.firstName()}
                </Typography>
                <Typography variant="subtitle2">9027171037</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={2} direction={"row"} justifyContent={"space-evenly"}>
            <Button startIcon={<Prohibit />} fullWidth variant="outlined">
              Block
            </Button>
            <Button startIcon={<Trash />} fullWidth variant="outlined">
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
