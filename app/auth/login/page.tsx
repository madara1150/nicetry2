import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card variant="outlined" sx={{ width: 500, padding: 5 }}>
        <Typography variant="h3" fontWeight={600}>
          Welcome Back
        </Typography>
        <Typography variant="body1" fontWeight={200} color={"gray"}>
          Please enter your details
        </Typography>

        <Stack direction={"column"} spacing={2} mt={3}>
          <TextField id="standard-basic" label="usernamer" variant="standard" />
          <TextField
            type="password"
            id="standard-basic"
            label="password"
            variant="standard"
          />
        </Stack>
        <Button variant="outlined" color="inherit" sx={{ marginTop: 2 }}>
          SIGN IN
        </Button>
      </Card>
    </Container>
  );
};

export default Login;
