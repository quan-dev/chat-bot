import React from 'react';
import { FormGroup } from 'reactstrap';

import {
  FormikDateInput,
  FormikDateTimeInput,
  FormikErrorMessage,
} from '../../../common/Formik';
import { FormLabel } from '../label';

export type FormikDateProps = {
  label: string,
  name: string,
  required?: boolean,
  autoFocus?: boolean,
  placeholder?: string,
  className?: string,
}

export const FormGroupDateInputItem: React.FC<FormikDateProps> = ({
  label, name, required = false
}) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikDateInput name={name} id={name} />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};

export const FormGroupDateTimeInputItem: React.FC<FormikDateProps> = ({
  label,
  name,
  required = false,
}) => {
  return (
    <FormGroup>
      <FormLabel for={name} required={required}>
        {label}
      </FormLabel>

      <FormikDateTimeInput name={name} id={name} />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};
