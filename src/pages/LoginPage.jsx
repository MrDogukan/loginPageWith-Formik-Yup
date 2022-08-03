import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { FaLock } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  return (
    <div>
      <Container maxWidth="sm" sx={{ mt: "10rem", textAlign: "center" }}>
        <Avatar
          sx={{
            backgroundColor: "primary.main",
            m: "auto",
            width: 60,
            height: 60,
          }}
          sizes="100px"
        >
          <FaLock size="40" />
        </Avatar>
        <Typography variant="h4" align="center" mb={4} color="primary.light">
          Login
        </Typography>

        <Formik
          initialValues={{ fullName: "", email: "", password: "" }}
          validationSchema={Yup.object().shape({
            fullName: Yup.string()
              .max(20, "Must be 20 or less characters")
              .required(),
            email: Yup.string().email().required(),
            password: Yup.string()
              .min(8)
              .max(16)
              .required()
              .matches(
                /\d+/,
                "Password must include at least one decimal character"
              )
              .matches(/[a-z]+/, "Password must include sub-text character")
              .matches(/[A-Z]+/, "Password must include a big-text character")
              .matches(
                /[!,?*$&=._/]+/,
                "Password must include a special character"
              ),
          })}
          onSubmit={(values, actions) => {
            alert(`fullName: ${values.fullName}
          email: ${values.email}
        password: ${values.password}`);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({ values, handleChange, errors, touched, handleBlur }) => (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <TextField
                  label="Full Name"
                  name="fullName"
                  id="fullName"
                  type="text"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  helperText={touched.fullName && errors.fullName}
                  error={touched.fullName && Boolean(errors.fullName)}
                />
                <TextField
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  helperText={touched.email && errors.email}
                  error={touched.email && Boolean(errors.email)}
                />
                <TextField
                  label="Password"
                  name="password"
                  id="password"
                  type="password"
                  variant="outlined"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.password && errors.password}
                  error={touched.password && Boolean(errors.password)}
                />
                <Button type="submit" variant="contained" size="large">
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default LoginPage;
