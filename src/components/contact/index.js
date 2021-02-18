import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { ContactContainer } from "./style";
import Map from "../ubication";
import { init, send } from "emailjs-com";
init(process.env.REACT_APP_USER_ID);


export default function Contact() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Ingrese su nombre."),
    lastname: Yup.string().required("Ingrese su apellido."),
    email: Yup.string().email().required("Ingrese su email."),
    phone: Yup.number(),
    description: Yup.string().required("Ingrese su mensaje."),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        phone: "",
        description: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        var templateParams = {
          from_name: "Pampa del Río",
          to_name: values.name + " " + values.lastname,
          message: values.description,
          to_email: values.email,
        };

        send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams
        ).then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            resetForm({})
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      }}
    >
      {({ values, errors, touched }) => (
        <ContactContainer id="contacto">
          <section className="contact_form">
            <div className="title">
              <h2>Contactános!</h2>
            </div>
            <Form className="form_container">
              <div className="field name_field">
                <label>Nombre</label>
                <Field
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Nombre..."
                />
                <div className="error">
                  {touched.name && errors.name ? errors.name : null}
                </div>
              </div>
              <div className="field lastname_field">
                <label>Apellido</label>
                <Field
                  className="input"
                  type="text"
                  name="lastname"
                  placeholder="Apellido..."
                />
                <div className="error">
                  {touched.lastname && errors.lastname ? errors.lastname : null}
                </div>
              </div>
              <div className="field phone_field">
                <label>Teléfono</label>
                <Field
                  name="phone"
                  type="text"
                  className="input"
                  placeholder="Teléfono..."
                />
                <div className="error">
                  {touched.phone && errors.phone ? errors.phone : null}
                </div>
              </div>
              <div className="field email_field">
                <label>Email</label>
                <Field
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Mail..."
                />
                <div className="error">
                  {touched.email && errors.email ? errors.email : null}
                </div>
              </div>
              <div className="field message_field">
                <label>Mensaje</label>
                <Field
                  component="textarea"
                  type="text"
                  name="description"
                  placeholder="Mensaje..."
                  className="input textarea"
                />
                <div className="error">
                  {touched.description && errors.description
                    ? errors.description
                    : null}
                </div>
              </div>
              <button className="submit_btn" type="submit">
                ENVIAR
              </button>
            </Form>
          </section>
          {/* <Map
            googleMapURL={mapUrl}
            containerElement={<section className="map" />}
            mapElement={<div className="mapElement" />}
            loadingElement={<p>Cargando...</p>}
          /> */}
          <section className="map" >
          <Map />
          </section>

        </ContactContainer>
      )}
    </Formik>
  );
}
