import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Register = () => {
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
      <Card variant="outlined" sx={{ width: 500 }}>
        <CardContent sx={{ padding: 5 }}>
          <Typography variant="h3" fontWeight={600}>
            Welcome Back
          </Typography>
          <Typography variant="body1" fontWeight={200} color={"gray"}>
            Please enter your details
          </Typography>

          <Stack direction={"column"} spacing={2} mt={3}>
            <TextField
              id="standard-basic"
              label="fullname"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="username"
              variant="standard"
            />
            <TextField
              type="email"
              id="standard-basic"
              label="email"
              variant="standard"
            />
            <TextField
              type="password"
              id="standard-basic"
              label="password"
              variant="standard"
            />
          </Stack>
          <Button
            variant="outlined"
            color="inherit"
            size="medium"
            sx={{ marginTop: 2 }}
          >
            SIGN UP
          </Button>
        </CardContent>

        <CardActions sx={{ justifyContent: "center" }}>
          <Link href="/auth/login" variant="body2" color="inherit">
            You have account?
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Register;
