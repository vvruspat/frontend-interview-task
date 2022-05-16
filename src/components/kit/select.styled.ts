import styled from 'styled-components';
import DownArrowIcon from "../../assets/icons/caret.svg";
import SelectedIcon from "../../assets/icons/selected.svg";
import { OutlineButton } from './button';

export const SelectWrapperStyled = styled.div`
  min-width: 235px;
  display: flex;
  flex-direction: column;
`;

type SelectStyledProps = {
  isOpen: boolean;
};

export const SelectStyled = styled(OutlineButton)<SelectStyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom-left-radius: ${({ isOpen }) => isOpen ? 0 : '10px'};
  border-bottom-right-radius: ${({ isOpen }) => isOpen ? 0 : '10px'};
`;

export const DownArrowStyled = styled.div`
  background: url(${DownArrowIcon}) no-repeat center center;
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.5rem;
`;

export const DropdownWrapperStyled = styled.div`
  position: relative;
`;

type DropdownStyledProps = {
  isOpen: boolean;
};

export const DropdownStyled = styled.div<DropdownStyledProps>`
  position: absolute;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: var(--background);
  border: 1px solid var(--tertiary-accent-basic-1-color);
  border-top: 0 none;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  box-sizing: border-box;
`;

type DropdownItemStyledProps = {
  selected: boolean;
  highlighted: boolean;
};

export const DropdownItemStyled = styled.div<DropdownItemStyledProps>`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid var(--tertiary-content-basic-4-color);

  background: ${({ highlighted }) => highlighted ? 'var(--tertiary-content-basic-6-color)' : 'transparent'};

  &:hover {
    background: var(--tertiary-content-basic-6-color)
  }

  &:after {
    content: ' ';
    display: ${({ selected }) => selected ? 'inline-block' : 'none'};
    width: 1rem;
    height: 1rem;
    background: url(${SelectedIcon}) no-repeat center center;
    margin-left: 0.5rem;
  }
`;
