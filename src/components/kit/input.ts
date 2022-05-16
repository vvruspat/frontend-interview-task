import styled from "styled-components";

export const Input = styled.input`
  margin: 0;
  padding: 11px 16px 10px;
  border: none;
  outline: none;
  font-size: var(--font-size-m);
  line-height: var(--line-height-m);
  color: var(--primary-content-basic-color);
  box-shadow: inset 0 0 0 1px var(--tertiary-accent-basic-1-color);
  border-radius: 7px;

  &:hover {
    box-shadow: inset 0 0 0 1px var(--tertiary-content-basic-color);
  }

  &:focus {
    box-shadow: inset 0 0 0 1px var(--primary-accent-basic-color);
    outline: none;
  }

  &::placeholder {
    color: var(--primary-content-basic-5-color);
  }
`;
