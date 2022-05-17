import styled from "styled-components";
import { Input } from "../input";
import EyeOpenedIcon from "../../../assets/icons/eye-opened.svg";
import EyeClosedIcon from "../../../assets/icons/eye-closed.svg";

export const PasswordWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
`;

export const PasswordStyled = styled(Input)`
  padding: 11px 32px 10px 16px;
  flex-grow: 1;
`;

const PasswordButton = styled.button`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 8px;
  top: calc(50% - 8px);
  border: none 0;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
`;

export const HidePasswordButton = styled(PasswordButton)`
  -webkit-mask: url(${EyeOpenedIcon}) no-repeat 50% 50%;
  mask: url(${EyeOpenedIcon}) no-repeat 50% 50%;
  background-color: var(--secondary-accent-basic-6-color);

  &:hover {
    background-color: var(--primary-accent-basic-7-color);
    transition: background-color 0.2s ease-in-out;
  }
  &:active {
    background-color: var(--primary-accent-basic-7-color);
    transition: background-color 0.2s ease-in-out;
  }
`;

export const ShowPasswordButton = styled(PasswordButton)`
  -webkit-mask: url(${EyeClosedIcon}) no-repeat 50% 50%;
  mask: url(${EyeClosedIcon}) no-repeat 50% 50%;
  background-color: var(--tertiary-accent-basic-color);

  &:hover {
    background-color: var(--secondary-accent-basic-5-color);
    transition: background-color 0.2s ease-in-out;
  }
  &:active {
    background-color: var(--secondary-accent-basic-6-color);
    transition: background-color 0.2s ease-in-out;
  }
`;
