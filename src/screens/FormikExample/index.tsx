import { FormikProvider, useFormik } from 'formik';
import { TFunction } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import * as Yup from 'yup';

import {
  FormGroupCheckboxItem, FormGroupDateInputItem, FormGroupInputItem, FormGroupMultiSelectInputItem
} from '../../common/Form/FormGroup';
import { Item } from '../../common/Form/FormGroup/type';
import FullLayout from '../../common/FullLayout';

export const validationSchema = (t: TFunction) => {
  return Yup.object({full_name: Yup.string()
      .required(t('message:required', { fieldName: t('user:user_name') })),});
};

const Home = () => {

  const { t } = useTranslation([
    'message', 'user'
  ]);

  const initialValues = { full_name: '' };

  const onSubmit = () => { };

  const validate = () => {
    return validationSchema(t);
  };

  const formikBag = useFormik({
    enableReinitialize: true,
    initialValues,
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: validate(),
    onSubmit,
  });

  const option: Item[] = [
    {label: 'example1',
      value: '1'},
    {label: 'example2',
      value: '2'},
  ];

  return (
    <FullLayout>
      <FormikProvider value={formikBag}>
        <Row>
          <Col md="6" xs="6" className="m-0">
            <FormGroupInputItem
              label="full_name"
              name="full_name"
            />
          </Col>
          <Col md="6" xs="6" className="m-0">
            <FormGroupMultiSelectInputItem label="pulldown" name="pulldow" options={option} />
          </Col>

          <Col md="6" xs="6" className="m-0">
            <div style={{ marginLeft: '30px' }}>

              <FormGroupCheckboxItem label="checkbox" name="checkbox" />
            </div>
          </Col>

          <Col md="6" xs="6" className="m-0">
            <FormGroupDateInputItem label="date" name="date" />
          </Col>

        </Row>
        <button onClick={() => formikBag.submitForm()}>Submit</button>
      </FormikProvider>
    </FullLayout>
  );
};

export default Home;