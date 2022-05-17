import styled from "styled-components";
import { SecondaryButton } from "../../../kit";
import PositiveIcon from "../../../../assets/icons/positive.svg";
import NegativeIcon from "../../../../assets/icons/negative.svg";
import NeutralIcon from "../../../../assets/icons/neutral.svg";

export const FeedbackItemThemeStyled = styled(SecondaryButton)`
  border: 0 none;
  padding: 0.5rem 0.625rem;
  color: var(--secondary-text-color);
  font-size: var(--font-size-s);
  line-height: var(--line-height-s);

  &:before {
    content: " ";
    display: block;
    width: 1rem;
    height: 1rem;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 0.5rem;
  }
`;

export const FeedbackItemThemePositiveButton = styled(FeedbackItemThemeStyled)`
  background-color: rgba(37, 177, 73, 0.1);
  &:before {
    background-image: url(${PositiveIcon});
  }
`;

export const FeedbackItemThemeNeutralButton = styled(FeedbackItemThemeStyled)`
  background-color: rgba(37, 177, 73, 0.1);
  &:before {
    background-image: url(${NeutralIcon});
  }
`;

export const FeedbackItemThemeNegativeButton = styled(FeedbackItemThemeStyled)`
  background-color: rgba(238, 48, 116, 0.08);
  &:before {
    background-image: url(${NegativeIcon});
  }
`;
