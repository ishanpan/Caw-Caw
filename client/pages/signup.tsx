import { NextPage } from "next";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthSignUp from "../components/AuthSignUp";

interface IFormInput {
  Email: string;
  Password: string;
}

const SignUp: NextPage = () => {
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
    <div>
      <AuthSignUp
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        control={control}
        errors={errors}
      />
    </div>
  );
};

export default SignUp;
