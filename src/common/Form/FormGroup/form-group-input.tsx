import React from 'react';
import { FormGroup } from 'reactstrap';

import { FormikErrorMessage, FormikInput } from '../../Formik';
import { FormLabel } from '../label';

type Props = {
  label: string,
  name: string,
  required?: boolean,
  autoFocus?: boolean,
  autoComplete?: string,
  placeholder?: string,
  className?: string,
  onBlur?: Function,
  onChange?: Function

}

export const FormGroupInputItem: React.FC<Props> = (prop) => {
  return (
    <FormGroup>
      <FormLabel for={prop.name}>{prop.label}</FormLabel>

      <FormikInput
        name={prop.name}
        onBlur={prop.onBlur || undefined}
        onChange={prop.onChange || undefined}
        required={prop.required || undefined}
        autoFocus={prop.autoFocus || undefined}
        placeholder={prop.placeholder || undefined}
      />

      <FormikErrorMessage name={prop.name} />
    </FormGroup>
  );
};
