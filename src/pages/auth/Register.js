import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../sections/auth /AuthSocial";
import RegisterForm from "../../sections/auth /RegisterForm";

const Register = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h4">Get Started with ChatApp</Typography>
      <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
        <Typography variant="body2"> Already have an Account ?</Typography>

        <Link to="/auth/login" component={RouterLink}>
          Login
        </Link>
      </Stack>
      <RegisterForm/>
      <AuthSocial />
    </Stack>
  );
};

export default Register;
