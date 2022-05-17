import styled from "styled-components";
import { TSize } from "../../../types/size.type";

type TextProps = {
  center?: boolean;
  size?: TSize;
};

const getFontSize = (size?: TSize) => {
  switch (size) {
    case "small":
      return "var(--font-size-s)";
    case "medium":
      return "var(--font-size-m)";
    case "large":
      return "var(--font-size-l)";
    default:
      return "var(--font-size-m)";
  }
};

const getLineHeight = (size?: TSize) => {
  switch (size) {
    case "small":
      return "var(--line-height-s)";
    case "medium":
      return "var(--line-height-m)";
    case "large":
      return "var(--line-height-l)";
    default:
      return "var(--line-height-m)";
  }
};

export const Text = styled.div<TextProps>`
  width: 100%;
  padding: 0;
  margin: 0.5rem 0;
  text-align: ${(props) => (props.center ? "center" : "left")};
  font-size: ${(props) => getFontSize(props.size)};var(--font-size-s);
  line-height: ${(props) => getLineHeight(props.size)};var(--line-height-s);
  font-weight: 400;
`;
