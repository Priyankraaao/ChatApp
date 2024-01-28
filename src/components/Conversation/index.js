import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} weight="auto">
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          overflow: "scroll",
          height:"100%"
        }}
      >
        <Message menu={true} />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
