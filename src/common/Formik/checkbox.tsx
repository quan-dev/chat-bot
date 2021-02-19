import { FormikConsumer, getIn } from 'formik';
import React from 'react';
import { Input, Label } from 'reactstrap';

type Props = {
  label: string,
  id?: string,
  name: string,
  required?: boolean,
  className?: string,
}

export const FormikCheckbox: React.FC<Props> = ({
  label,
  id,
  name,
  required = false,
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
          <>
            <Input
              type="checkbox"
              className={className}
              id={id}
              name={name}
              label={label}
              style={{width: '20px',
                height: '20px',}}
              required={required}
              valid={!getIn(errors, name)}
              invalid={getIn(touched, name) && !!getIn(errors, name)}
              onChange={handleChange}
              onBlur={handleBlur}
              value={getIn(values, name) || getIn(initialValues, name)}
            />
            <Label for={id} className="form-check-label" style={{ marginLeft: '7px' }}>
              {label}
            </Label>
          </>
        )}
    </FormikConsumer>
  );
};
