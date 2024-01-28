import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MessageTypes";

const Message = ({ menu }) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((chat) => {
          switch (chat.type) {
            case "divider":
              return <Timeline chat={chat} menu={menu} />;

            case "msg":
              switch (chat.subtype) {
                case "img":
                  return <MediaMsg chat={chat} menu={menu} />;

                case "doc":
                  return <DocMsg chat={chat} menu={menu} />;

                case "link":
                  return <LinkMsg chat={chat} menu={menu} />;

                case "reply":
                  return <ReplyMsg chat={chat} menu={menu} />;

                default:
                  return <TextMsg chat={chat} menu={menu} />;
              }

            default:
              break;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
