import styles from "../styles/signup.module.scss";
import { Input, Spacer, Button, createTheme, Text } from "@nextui-org/react";
import Image from "next/image";
import crowLogo from "../public/303906.svg";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function AuthSignIn(props: any) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
          }),
        });
        const b = await res.json();
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
        <h2 className={styles.h2Text}>Sign in to your account</h2>

        <Spacer y={1.5} />

        <form onSubmit={formik.handleSubmit}>
          <Input
            size="xl"
            width="300px"
            id="email"
            name="email"
            labelPlaceholder="Email"
            // value={formik.values.email}
            onChange={formik.handleChange}
            helperText={formik.touched.email && formik.errors.email}
            helperColor="error"
          />

          <Spacer y={1.75} />

          <Input.Password
            size="xl"
            id="password"
            name="password"
            labelPlaceholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            // error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Spacer y={1.75} />

          <Button type="submit" color="secondary" size="xl">
            Sign In
          </Button>
        </form>
        <Spacer y={1} />
        <h3 className={styles.h3Text}>
          Don&apos;t have an account? <a link="/signup">Sign Up</a>
        </h3>
      </div>
    </div>
  );
}
