import {
  FormikConsumer, getIn, useField
} from 'formik';
import React from 'react';
import Select from 'react-select';

import { Item } from '../Form/FormGroup/type';

type Props = {
  id: string,
  name: string,
  options: Item[],
  required?: boolean,
  multiple?: boolean,
  autoFocus?: boolean,
  autoComplete?: string,
  placeholder?: string,
  className?: string,
}

export const FormikMultiSelectInput: React.FC<Props> = ({
  id = '',
  name,
  options,
  required = false,
  multiple = false,
  autoFocus = true,
  autoComplete = '',
  placeholder = '',
  className = '',
}) => {
  const [
    , , helper
  ] = useField(name);
  const handleChange = (selectedOption: any) => {
    helper.setValue(selectedOption);
  };

  return (
    <FormikConsumer>
      {({
        values, initialValues, errors, touched, handleBlur
      }) => (
          <Select
            id={id}
            name={name}
            className={className}
            options={options}
            valid={!getIn(errors, name)}
            invalid={getIn(touched, name) && !!getIn(errors, name)}
            autoFocus={autoFocus}
            required={required}
            multiple={multiple}
            placeholder={placeholder}
            onChange={handleChange}
            autoComplete={autoComplete}
            onBlur={handleBlur}
            value={getIn(values, name) || getIn(initialValues, name)}
            isMulti
          />
        )}
    </FormikConsumer>
  );
};
