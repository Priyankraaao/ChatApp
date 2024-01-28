import {
  Box,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import React from "react";
import { Message_options } from "../../data";

const DocMsg = ({ chat, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={chat.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: chat.incoming ? theme.palette.text : "#fff" }}
          >
            {chat.message}
          </Typography>
        </Stack>
      </Box>
      {menu ? <MessageOptions /> : null}
    </Stack>
  );
};

const LinkMsg = ({ chat, menu }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent={chat.incoming ? "start" : "end"}
      alignItems={"center"}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            direction={"column"}
            alignItems={"start"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img
              src={chat.preview}
              alt={chat.message}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            <Stack spacing={2}>
              <Typography
                variant="subtitle2"
                // sx={{ color: chat.incoming ? theme.palette.text : "#fff" }}
              >
                Create App
              </Typography>
              <Typography
                variant="subtitle2"
                component={Link}
                sx={{ color: theme.palette.primary.main }}
                to="//https://www.youtube.com"
              >
                www.youtube.com
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{ color: chat.incoming ? theme.palette.text : "#fff" }}
            >
              {chat.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {menu ? <MessageOptions /> : null}
    </Stack>
  );
};

const ReplyMsg = ({ chat, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={chat.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            direction={"column"}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" sx={{ color: theme.palette.text }}>
              {chat.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: chat.incoming ? theme.palette.text : "#fff" }}
          >
            {chat.reply}
          </Typography>
        </Stack>
      </Box>
      {menu ? <MessageOptions /> : null}
    </Stack>
  );
};

const MediaMsg = ({ chat, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={chat.incoming ? "start" : "end"}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? alpha(theme.palette.background.default, 1)
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={chat.img}
            alt={chat.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography
            variant="body2"
            color={chat.incoming ? theme.palette.text : "#fff"}
          >
            {chat.message}
          </Typography>
        </Stack>
      </Box>
      {menu ? <MessageOptions /> : null}
    </Stack>
  );
};

const TextMsg = ({ chat = {}, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={chat.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: chat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: chat.incoming ? theme.palette.text : "#fff" }}
        >
          {chat.message}
        </Typography>
      </Box>
      {menu ? <MessageOptions /> : null}
    </Stack>
  );
};

const Timeline = ({ chat = {} }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Divider width="46%" />
      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {chat.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DotsThreeVertical
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size={20}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((item) => {
            return <MenuItem onClick={handleClick}>{item.title}</MenuItem>;
          })}
        </Stack>
      </Menu>
    </>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
