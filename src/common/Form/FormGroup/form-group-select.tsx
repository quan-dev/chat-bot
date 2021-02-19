import React from 'react';
import { FormGroup } from 'reactstrap';

import {FormikErrorMessage,
  FormikMultiSelectInput} from '../../../common/Formik';
import { FormLabel } from '../label';
import { Item } from './type';

type MultiSelectInputProps = {
  label: string,
  name: string,
  multiple?: boolean,
  required?: boolean,
  autoFocus?: boolean,
  options: Item[],
  placeholder?: string,
  autoComplete?: string,

}

export const FormGroupMultiSelectInputItem: React.FC<MultiSelectInputProps> = ({
  label,
  name,
  options,
  multiple = false,
  required = false,
  autoFocus,
  placeholder,
  autoComplete
}) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikMultiSelectInput
        name={name}
        id={name}
        options={options}
        multiple={multiple}
        autoFocus={autoFocus}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};
