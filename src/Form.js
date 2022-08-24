import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { data } from './data.js';

const NewRow = Yup.object().shape({
  nombre: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  edad: Yup.number().required('Required'),
  carrera: Yup.string().required('Required'),
  hobbie: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function Formulario() {
  return (
    <section>
      <Formik
        initialValues={{ nombre: '', edad: '', carrera: '', hobbie: '' }}
        validationSchema={NewRow}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2));
          data.push(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="nombre" />
            <ErrorMessage name="nombre" component="div" />
            <Field type="number" name="edad" />
            <ErrorMessage name="edad" component="div" />
            <Field type="text" name="carrera" />
            <ErrorMessage name="carrera" component="div" />
            <Field type="text" name="hobbie" />
            <ErrorMessage name="hobbie" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
