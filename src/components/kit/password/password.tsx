import React, { useState } from "react";
import {
  HidePasswordButton,
  PasswordStyled,
  PasswordWrapperStyled,
  ShowPasswordButton,
} from "./password.styled";

export const Password = ({ ...inputProps }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <PasswordWrapperStyled>
      <PasswordStyled {...inputProps} type={isVisible ? "text" : "password"} />
      {isVisible ? (
        <ShowPasswordButton onClick={() => setIsVisible(!isVisible)} />
      ) : (
        <HidePasswordButton onClick={() => setIsVisible(!isVisible)} />
      )}
    </PasswordWrapperStyled>
  );
};
