
import { FormikConsumer, getIn } from 'formik';
import React from 'react';
import { Input } from 'reactstrap';

export type FormikDateProps = {
  name: string,
  id: string,
  required?: boolean,
  autoFocus?: boolean,
  placeholder?: string,
  className?: string,
}

export const FormikDateInput: React.FC<FormikDateProps> = ({
  name,
  id,
  required = false,
  autoFocus = true,
  placeholder = '',
  className = '',
}) => {
  return (
    <FormikConsumer>
      {({
        values,
        initialValues,
        errors,
        touched,
        handleBlur,
        handleChange,
      }) => (
          <Input
            type="date"
            className={className}
            name={name}
            id={id}
            placeholder={placeholder}
            autoComplete={name}
            valid={!getIn(errors, name)}
            invalid={getIn(touched, name) && !!getIn(errors, name)}
            autoFocus={autoFocus}
            required={required}
            onChange={handleChange}
            onBlur={handleBlur}
            value={getIn(values, name) || getIn(initialValues, name)}
          />
        )}
    </FormikConsumer>
  );
};

export const FormikDateTimeInput: React.FC<FormikDateProps> = ({
  name,
  id,
  required = false,
  autoFocus = true,
  placeholder = '',
  className = '',
}) => {
  return (
    <FormikConsumer>
      {({
        values,
        initialValues,
        errors,
        touched,
        handleBlur,
        handleChange,
      }) => (
          <Input
            type="datetime-local"
            className={className}
            name={name}
            id={id}
            placeholder={placeholder}
            autoComplete={name}
            valid={!getIn(errors, name)}
            invalid={getIn(touched, name) && !!getIn(errors, name)}
            autoFocus={autoFocus}
            required={required}
            onChange={handleChange}
            onBlur={handleBlur}
            value={getIn(values, name) || getIn(initialValues, name)}
          />
        )}
    </FormikConsumer>
  );
};
