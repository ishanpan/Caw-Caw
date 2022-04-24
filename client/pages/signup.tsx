import { NextPage } from "next";
import styles from "../styles/signup.module.scss";
import { Input, Spacer, Button, createTheme, Text } from "@nextui-org/react";
import Image from "next/image";
import crowLogo from "../public/303906.svg";

const SignUp: NextPage = () => {
  return (
    <div className={styles.base}>
      <div className={styles.logo}>
        <Image src={crowLogo} alt="Logo"></Image>
      </div>
      <div className={styles.box}>
        <h2 className={styles.h2Text}>Sign in to your account</h2>
        <Spacer y={1.75} />
        <Input size="xl" labelPlaceholder="Email" />
        <Spacer y={2} />
        <Input.Password
          size="xl"
          labelPlaceholder="Password"
          initialValue="nextui123"
        />
        <Spacer y={1.75} />
        <Button color="secondary" size="xl">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
