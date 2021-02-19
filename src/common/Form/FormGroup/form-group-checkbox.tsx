import React from 'react';
import { Col, FormGroup } from 'reactstrap';

import { FormikCheckbox, FormikErrorMessage } from '../../../common/Formik';
import { FormLabel } from '../label';
import { Item } from './type';

type FormGroupCheckboxItemProps = {
  label: string,
  name: string
}

export const FormGroupCheckboxItem: React.FC<FormGroupCheckboxItemProps> = ({ label, name }) => {
  return (
    <FormGroup>
      <FormikCheckbox label={label} name={name} />
      <FormikErrorMessage name={name} />
    </FormGroup>
  );
};

type FormGroupCheckboxListItemsProps = {
  label: string,
  name: string,
  listItem: Item[],
  inline?: boolean,
  required?: boolean
}

export const FormGroupCheckboxListItems: React.FC<FormGroupCheckboxListItemsProps> = ({
  label,
  name,
  listItem,
  inline,
  required = false,
}) => {
  return (
    <FormGroup>
      <Col md="3">
        <FormLabel for={name} required={required}>
          {label}
        </FormLabel>
      </Col>
      <Col md="9">
        {listItem.map((item: Item, i: number) => {
          return (
            <FormGroup
              check
              inline={inline}
              key={`checkbox${item.value}`}
            >
              <FormikCheckbox
                id={`checkbox${i}`}
                name={name}
                label={item.label}
              />
            </FormGroup>
          );
        })}
        <FormikErrorMessage name={name} />
      </Col>
    </FormGroup>
  );
};
