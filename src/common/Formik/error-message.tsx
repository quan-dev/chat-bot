
import { FormikConsumer, getIn } from 'formik';
import React from 'react';
import { FormFeedback } from 'reactstrap';

type Props = {
  name: string;
  className?: string
}

export const FormikErrorMessage: React.FC<Props> = ({ name, className = '' }) => {
  return (
    <FormikConsumer>
      {({ errors }) => (
        <>
          {errors && getIn(errors, name) && (
            <FormFeedback className={className}>
              {getIn(errors, name)}
            </FormFeedback>
          )}
        </>
      )}
    </FormikConsumer>
  );
};
