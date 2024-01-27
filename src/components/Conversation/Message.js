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

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((chat) => {
          switch (chat.type) {
            case "divider":
              return <Timeline chat={chat} />;

            case "msg":
              switch (chat.subtype) {
                case "img":
                  return <MediaMsg chat={chat} />;

                case "doc":
                  return <DocMsg chat={chat} />;

                case "link":
                  return <LinkMsg chat={chat} />;

                case "reply":
                  return <ReplyMsg chat={chat} />;

                default:
                  return <TextMsg chat={chat} />;
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
