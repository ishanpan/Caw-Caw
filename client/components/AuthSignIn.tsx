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
          credentials: "include",
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
        <h2 className={styles.h2Text}>Sign in to your account</h2>

        <Spacer y={1.5} />

        <form onSubmit={formik.handleSubmit}>
          <Input
            size="xl"
            width="300px"
            id="email"
            name="email"
            placeholder="Email"
            // value={formik.values.email}
            onChange={formik.handleChange}
            // helperText={formik.touched.email && formik.errors.email}
            color="error"
          />

          <Spacer y={1} />

          <Input.Password
            size="xl"
            id="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            // helperText={formik.touched.password && formik.errors.password}
          />

          <Spacer y={1.5} />

          <Button type="submit" color="error" size="xl">
            Sign In
          </Button>
        </form>
        <Spacer y={1} />
        <h3 className={styles.h3Text}>
          Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
        </h3>
      </div>
    </div>
  );
}
