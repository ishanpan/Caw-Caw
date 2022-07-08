import { NextPage } from "next";
import styles from "../styles/signup.module.scss";

import Auth from "../components/AuthSignIn";

const SignIn: NextPage = () => {
  return (
    <Auth
    // handleSubmit={handleSubmit}
    // onSubmit={onSubmit}
    // // control={control}
    // errors={errors}
    ></Auth>
  );
};

export default SignIn;
