import React from "react";
import { Logo } from "../kit/logo";
import { Label } from "../kit/label";
import { Input } from "../kit/input";
import { Heading } from "../kit/heading";
import { Form, FormRow } from "../kit/form";
import { PrimaryButton } from "../kit/button";
import { LoginScreenRoot } from "./login-screen.styled";

export const LoginScreen: React.FC = () => (
  <LoginScreenRoot>
    <Logo />
    <section>
      <Heading>Log in</Heading>
      <Form>
        <FormRow>
          <Label htmlFor={"login"}>Email</Label>
          <Input type={"text"} placeholder={"login"} id={"login"} />
        </FormRow>
        <FormRow>
          <Label htmlFor={"password"}>Password</Label>
          <Input type={"password"} placeholder={"password"} id={"password"} />
        </FormRow>
        <FormRow>
          <PrimaryButton type={"submit"}>Log in</PrimaryButton>
        </FormRow>
      </Form>
    </section>
  </LoginScreenRoot>
);
