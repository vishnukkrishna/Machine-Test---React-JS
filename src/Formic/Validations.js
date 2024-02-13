import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().trim().email().required("Please enter your email id"),
  password: Yup.string().trim().min(4).required("Please enter password"),
});

export const RegisterSchema = Yup.object({
  username: Yup.string().trim().min(3).required("Please enter your username"),
  email: Yup.string().trim().email().required("Please enter your email id"),
  password: Yup.string().trim().min(6).required("Please enter password"),
});
