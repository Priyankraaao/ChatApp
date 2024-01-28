import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../sections/auth /AuthSocial";
import LoginForm from "../../sections/auth /LoginForm";

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Login to Our ChatApp</Typography>
        <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
          <Typography variant="body2">New User?</Typography>

          <Link to="/auth/register" component={RouterLink}>
            Create an Account
          </Link>
        </Stack>
        {/* form  */}

        <LoginForm />

        {/* auth social */}

        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
