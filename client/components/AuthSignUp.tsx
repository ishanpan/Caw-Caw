import { NextPage } from "next";
import styles from "../styles/signup.module.scss";
import { Input, Spacer, Button, createTheme, Text } from "@nextui-org/react";
import Image from "next/image";
import crowLogo from "../public/303906.svg";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ReactPropTypes } from "react";

export default function AuthSignUp(props: any) {
  return (
    <div className={styles.base}>
      <div className={styles.logo}>
        <Image src={crowLogo} alt="Logo"></Image>
      </div>
      <div className={styles.box}>
        <h2 className={styles.h2Text}>Sign in to your account</h2>

        <Spacer y={1.5} />

        <form onSubmit={props.handleSubmit(props.onSubmit)}>
          <Controller
            name="Email"
            control={props.control}
            defaultValue=""
            rules={{
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
            }}
            render={({ field }) => (
              <Input
                size="xl"
                width="300px"
                labelPlaceholder="Email"
                helperText={props.errors.Email ? "Invalid Email" : ""}
                helperColor="error"
                {...field}
              />
            )}
          />

          <Spacer y={1.75} />

          <Controller
            name="Password"
            control={props.control}
            defaultValue=""
            rules={{ min: 8, required: true }}
            render={({ field }) => (
              <Input.Password
                size="xl"
                labelPlaceholder="Password"
                helperText={
                  props.errors.Password
                    ? "Minimum length of password should be 8"
                    : ""
                }
                helperColor="error"
                {...field}
              />
            )}
          />
          <Spacer y={1.75} />
          <Controller
            name="Password"
            control={props.control}
            defaultValue=""
            rules={{ min: 8, required: true }}
            render={({ field }) => (
              <Input.Password
                size="xl"
                labelPlaceholder="Confirm Password"
                helperText={
                  props.errors.Password
                    ? "Minimum length of password should be 8"
                    : ""
                }
                helperColor="error"
                {...field}
              />
            )}
          />

          <Spacer y={1.75} />

          <Button type="submit" color="secondary" size="xl">
            Sign Up
          </Button>
        </form>
        <Spacer y={1} />
        <h3 className={styles.h3Text}>
          Don&apos;t have an account? <a href="#">Sign Up</a>
        </h3>
      </div>
    </div>
  );
}
