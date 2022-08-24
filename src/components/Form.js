import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import '../sass/Form.scss';
import { data } from '../data.js';

const NewRow = Yup.object().shape({
  nombre: Yup.string()
    .min(2, 'Ingresa 2 o más caracteres!')
    .max(50, 'Too Long!')
    .required('*Campo requerido.'),
  edad: Yup.number().required('*Campo requerido.'),
  carrera: Yup.string().required('*Campo requerido.'),
  hobbie: Yup.string()
    .min(2, 'Ingresa 2 o más caracteres!')
    .max(50, 'Too Long!')
    .required('*Campo requerido.'),
});

export default function Formulario() {
  const navigate = useNavigate();

  return (
    <section>
      <Formik
        initialValues={{ nombre: '', edad: '', carrera: '', hobbie: '' }}
        validationSchema={NewRow}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2));
          data.push(values);
          setSubmitting(false);
          Swal.fire({
            title: 'Genial!',
            text: 'Registro insertado con éxito!',
            icon: 'success',
          });
          navigate('/');
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="nombre" placeholder="Nombre" />
            <ErrorMessage name="nombre" component="div" />
            <Field type="number" name="edad" placeholder="Edad" />
            <ErrorMessage name="edad" component="div" />
            <Field type="text" name="carrera" placeholder="Carrera" />
            <ErrorMessage name="carrera" component="div" />
            <Field type="text" name="hobbie" placeholder="Hobbie" />
            <ErrorMessage name="hobbie" component="div" />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-dark"
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
