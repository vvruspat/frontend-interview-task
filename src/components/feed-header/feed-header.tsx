import React, { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/login/loginSlice";
import { Logo, SecondaryButton } from "../kit";
import { FeedHeaderStyled } from "./feed-header.styled";

export const FeedHeader = () => {
  const dispatch = useAppDispatch();

  const onLogoutClick = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <FeedHeaderStyled>
      <Logo />
      <SecondaryButton onClick={onLogoutClick}>Log out</SecondaryButton>
    </FeedHeaderStyled>
  );
};
