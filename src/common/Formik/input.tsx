
import {
  FormikConsumer, getIn, useFormikContext
} from 'formik';
import React from 'react';
import { Input } from 'reactstrap';

type Props = {
  name: string,
  required?: boolean,
  autoFocus?: boolean,
  autoComplete?: string,
  placeholder?: string,
  className?: string,
  onBlur?: Function,
  onChange?: Function

}

export const FormikInput: React.FC<Props> = ({
  name,
  required = false,
  autoFocus = true,
  placeholder = '',
  className = '',
  onBlur = () => { },

}) => {
  const formik = useFormikContext();
  const handleBlur = (e: any) => {
    onBlur(e.target.value);
    formik.setFieldTouched(name, true, true);
  };

  return (
    <FormikConsumer>
      {({
        values, initialValues, errors, touched,
        handleChange
      }) => {
        return (
          <Input
            type="text"
            className={className}
            name={name}
            id={name}
            placeholder={placeholder}
            autoComplete={name}
            valid={!getIn(errors, name)}
            invalid={getIn(touched, name) && !!getIn(errors, name)}
            autoFocus={autoFocus}
            required={required}
            onChange={handleChange}
            onBlur={handleBlur}
            value={getIn(values, name) || getIn(initialValues, name) || ''}
          />
        );
      }}
    </FormikConsumer>
  );
};
