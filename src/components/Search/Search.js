import { alpha, styled } from "@mui/material";

const Search = styled("div")(({ theme }) => {
    return {
      position: "relative",
      borderRadius: "20px",
      backgroundColor: alpha(theme.palette.background.default, 1),
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
    };
  });
  
  export default Search