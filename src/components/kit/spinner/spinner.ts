import styled from "styled-components";
import SpinnerIcon from "../../../assets/icons/spinner.svg";

export const Spinner = styled.div`
  background: var(--tertiary-content-basic-4-color);
  height: 2rem;
  width: 2rem;
  background: url("${SpinnerIcon}") no-repeat center;
  margin: 1rem auto;
  color: var(--primary-content-basic-1-color);
`;
