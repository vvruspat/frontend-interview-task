import styled from "styled-components";

export const Button = styled.button`
  font-family: inherit;
  font-size: var(--font-size-m);
  line-height: 1;
  font-weight: 600;
  color: var(--primary-content-basic-color);
  border: none;
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  letter-spacing: 0.2px;
  white-space: nowrap;
  outline: none;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  transition: color 0.12s linear, background-color 0.12s linear;

  &:disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.5;
  }
`;

export const PrimaryButton = styled(Button)`
  border-radius: 10px;
  color: var(--background);
  background: var(--primary-accent-basic-2-color);

  &:hover {
    background: var(--primary-accent-basic-4-color);
  }

  &:active {
    background: var(--primary-accent-basic-gradient);
  }
`;

export const SecondaryButton = styled(Button)`
  border-radius: 10px;
  color: var(--secondary-accent-basic-2-color);
  background: var(--tertiary-content-basic-8-color);
  border: 1px solid var(--tertiary-content-basic-2-color);
  padding: 10.5px 22.5px;

  &:hover {
    background: var(--tertiary-content-basic-6-color);
  }

  &:active {
    background: var(--tertiary-content-basic-color);
  }
`;

export const OutlineButton = styled(Button)`
  border-radius: 10px;
  color: var(--primary-content-basic-color);
  background: var(--background);
  border: 1px solid var(--tertiary-content-basic-color);
  padding: 10.5px 22.5px;
  font-weight: normal;

  &:hover {
    background: var(--tertiary-content-basic-6-color);
  }

  &:active {
    background: var(--tertiary-content-basic-color);
  }
`;
