import { NextPage } from "next";
import styles from "../styles/signup.module.scss";
import { Input, Spacer, Button, createTheme, Text } from "@nextui-org/react";
import Image from "next/image";
import crowLogo from "../public/303906.svg";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Auth from "../components/AuthSignIn";

interface IFormInput {
  Email: string;
  Password: string;
}

const SignIn: NextPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <Auth
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      control={control}
      errors={errors}
    ></Auth>
  );
};

export default SignIn;
