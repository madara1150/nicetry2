"use client";
import { LoginApi } from "@/app/api/login";
import { UserLogin } from "@/app/types/auth";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import Typography from "@mui/joy/Typography";

const Login = () => {
  const router = useRouter();
  const form = useForm<UserLogin>();

  const handleSubmit = form.handleSubmit(async (data) => {
    await LoginApi(data);
    router.push("/")
  });

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
          <Typography level="h3" fontWeight={600}>
            Welcome Back
          </Typography>
          <Typography level="body-md" fontWeight={200} color="neutral">
            Please enter your details
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack direction={"column"} spacing={2} mt={3}>
              <Controller
                control={form.control}
                name="email"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="email"
                    variant="standard"
                    error={!!fieldState.error}
                    helperText={!!fieldState.error}
                  />
                )}
              />
              <Controller
                control={form.control}
                name="password"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="password"
                    type="password"
                    variant="standard"
                    error={!!fieldState.error}
                    helperText={!!fieldState.error}
                  />
                )}
              />
            </Stack>

            <Button
              variant="outlined"
              color="inherit"
              size="medium"
              type="submit"
              sx={{ marginTop: 2 }}
            >
              SIGN IN
            </Button>
          </form>
        </CardContent>

        <CardActions sx={{ justifyContent: "center" }}>
          <Link href="/auth/register" variant="body2" color="inherit">
            You have account?
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Login;
