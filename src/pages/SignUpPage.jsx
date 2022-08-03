import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { FaLock } from "react-icons/fa";
import { Formik } from "formik";
import { signUpSchema } from "../components/signUpSchema";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
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
          validationSchema={signUpSchema}
          onSubmit={(values, actions) => {
            alert(`
            fullName: ${values.fullName}
            email: ${values.email}
            password: ${values.password}`);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => <SignUpForm {...props} />}
        ></Formik>
      </Container>
    </div>
  );
};

export default SignUpPage;
