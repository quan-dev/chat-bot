import React from 'react';

import { InputComponent } from './styles';

export type Props = {
  handleOnChange?: (event: any) => void;
  handleOnFocus?: (event: any) => void;
  handleOnBlur?: (event: any) => void;
};

const Input: React.FC<Props> = React.memo(
  ({
    handleOnChange, handleOnFocus, handleOnBlur, ...props
  }) => {
    const [
      currentValue, setCurrentValue
    ] = React.useState('GROUP');

    const handleChange = React.useCallback(
      async (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        const { value } = event.target;

        setCurrentValue(value);

        if (handleOnChange) {
          handleOnChange(value);
        }
      },
      [
        handleOnChange
      ],
    );

    const handleFocus = React.useCallback(
      async (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        const { value } = event.target;

        if (handleOnFocus) {
          handleOnFocus(value);
        }
      },
      [
        handleOnFocus
      ],
    );

    const handleBlur = React.useCallback(
      async (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        const { value } = event.target;

        if (handleOnBlur) {
          handleOnBlur(value);
        }
      },
      [
        handleOnBlur
      ],
    );

    return (
      <InputComponent
        {...props}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={currentValue}
      />
    );
  },
);

export default Input;
