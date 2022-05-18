import React, {
  useCallback,
  useEffect,
  useRef,
  KeyboardEvent,
  useState,
} from "react";
import ReactDOM from "react-dom";
import {
  DownArrowStyled,
  DropdownItemStyled,
  DropdownStyled,
  DropdownWrapperStyled,
  SelectWrapperStyled,
  SelectStyled,
} from "./select.styled";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Array<SelectOption>;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: SelectOption) => void;
};

export const Select = ({
  options,
  placeholder = "select",
  defaultValue = "",
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectOption | undefined>(
    options.find((opt) => opt.value === defaultValue),
  );
  const [highlighted, setHighlighted] = useState(
    options.findIndex((opt) => opt.value === defaultValue),
  );

  const ref = useRef<HTMLDivElement>(null);

  const onItemClicked = useCallback((option: SelectOption) => {
    setSelected(option);
    setIsOpen(false);
  }, []);

  const handleKeydown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (event.key === "ArrowDown") {
        !isOpen && setIsOpen(true);
        setHighlighted(Math.min(highlighted + 1, options.length - 1));
      } else if (event.key === "ArrowUp") {
        setHighlighted(Math.max(highlighted - 1, 0));
      } else if (event.key === "Enter") {
        setIsOpen(false);
        setSelected(options[highlighted]);
      } else if (event.key === "Escape") {
        setIsOpen(false);
      }
    },
    [options, highlighted, isOpen],
  );

  const handleClickOutside = useCallback(
    (event: Event) => {
      if (
        isOpen &&
        event.target instanceof HTMLDivElement &&
        !ReactDOM.findDOMNode(ref.current)?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    },
    [isOpen, ref],
  );

  const handleSelectClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    selected && onChange?.(selected);
  }, [selected, onChange]);

  return (
    <SelectWrapperStyled
      ref={ref}
      onKeyDown={handleKeydown}
      role="listbox"
      data-testid="select-wrapper"
    >
      <SelectStyled
        isOpen={isOpen}
        onClick={handleSelectClick}
        data-testid="select-button"
      >
        {selected ? selected.label : placeholder}
        <DownArrowStyled />
      </SelectStyled>

      <DropdownWrapperStyled>
        <DropdownStyled
          isOpen={isOpen}
          role="list"
          data-testid="select-dropdown"
        >
          {options.map((opt, index) => (
            <DropdownItemStyled
              highlighted={highlighted === index}
              selected={selected?.value === opt.value}
              key={opt.value}
              onClick={() => onItemClicked(opt)}
              aria-label={opt.label}
              role="listitem"
            >
              {opt.label}
            </DropdownItemStyled>
          ))}
        </DropdownStyled>
      </DropdownWrapperStyled>
    </SelectWrapperStyled>
  );
};
