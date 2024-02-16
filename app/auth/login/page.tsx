import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
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
        <Stack direction={"column"} spacing={2}>
          <TextField id="standard-basic" label="usernamer" variant="standard" />
          <TextField
            type="password"
            id="standard-basic"
            label="password"
            variant="standard"
          />
        </Stack>
      </Card>
    </Container>
  );
};

export default Login;
