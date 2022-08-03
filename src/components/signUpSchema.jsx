import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  fullName: Yup.string().max(20, "Must be 20 or less characters").required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8)
    .max(16)
    .required()
    .matches(/\d+/, "Password must include at least one decimal character")
    .matches(/[a-z]+/, "Password must include sub-text character")
    .matches(/[A-Z]+/, "Password must include a big-text character")
    .matches(/[!,?*$&=._/]+/, "Password must include a special character"),
});
