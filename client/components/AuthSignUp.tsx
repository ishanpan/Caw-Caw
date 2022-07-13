import styles from "../styles/signup.module.scss";
import { Input, Spacer, Button } from "@nextui-org/react";
import Image from "next/image";
import crowLogo from "../public/303906.svg";
import * as yup from "yup";
import { useFormik } from "formik";
import Link from "next/link";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function AuthSignUp(props: any) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const sendVal = async () => {
        const res = await fetch("http://localhost:3001/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
          }),
        });
        const b = await res.json();
        localStorage.setItem("token", b.access_token);
        console.log(b);
      };

      sendVal();
    },
  });

  return (
    <div className={styles.base}>
      <div className={styles.logo}>
        <Image src={crowLogo} alt="Logo"></Image>
      </div>
      <div className={styles.box}>
        <h2 className={styles.h2Text}>Sign up for a new account</h2>
        <Spacer y={1.75} />
        <form onSubmit={formik.handleSubmit}>
          <Input
            size="xl"
            width="300px"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
          />
          <Spacer y={1.35} />
          <Input.Password
            size="xl"
            id="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
          />
          <Spacer y={1.35} />
          <Input.Password
            size="xl"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : ""
            }
          />
          <Spacer y={1.5} />
          <Button type="submit" color="error" size="xl">
            Sign In
          </Button>
        </form>
        <Spacer y={1} />
        <h3 className={styles.h3Text}>
          Already have an account? <Link href="/signin">Sign In</Link>
        </h3>
      </div>
    </div>
  );
}
