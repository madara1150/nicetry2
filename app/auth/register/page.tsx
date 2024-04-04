"use client"
import React from "react";
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
import { Controller, useForm } from "react-hook-form";

const Register = () => {
  const form = useForm({
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data);
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
          <Typography variant="h3" fontWeight={600}>
            Welcome Back
          </Typography>
          <Typography variant="body1" fontWeight={200} color="gray">
            Please enter your details
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack direction="column" spacing={2} mt={3}>
              <Controller
                control={form.control}
                name="fullname"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Full Name"
                    variant="standard"
                    error={!!fieldState.error}
                    helperText={!!fieldState.error}
                  />
                )}
              />

              <Controller
                control={form.control}
                name="username"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="username"
                    variant="standard"
                    error={!!fieldState.error}
                    helperText={!!fieldState.error}
                  />
                )}
              />
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
              type="submit"
              variant="outlined"
              color="inherit"
              size="medium"
              sx={{ marginTop: 2 }}
            >
              SIGN UP
            </Button>
          </form>
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
