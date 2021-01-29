import React from "react";
import { Formik, Field, Form } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { ContactContainer } from "./style";


export default function Contact() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    phone: Yup.number(),
    description: Yup.string().required("Required"),
  });
  const history = useHistory();
  
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        description: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
      }}
      >
      {({ values, errors, touched }) => (
          <ContactContainer>
            <h2>Contactános!</h2>
          <Form>
            <label>Name</label>
            <div className="inputConteiner">
              <Field
                className="input"
                type="text"
                name="name"
                placeholder="Nombre..."
              />
              {touched.name && errors.name ? <div>{errors.name}</div> : null}
            </div>
            <div className="labelIn">
                  <label>Email</label>
                  <div className="inputConteiner">
                    <Field
                      name="email"
                      type="email"
                      className="input"
                      placeholder="Mail..."
                    />
                    {touched.email && errors.email ? <div>Required</div> : null}
                  </div>
                </div>

                <div className="labelIn">
                  <label>Teléfono</label>
                  <div className="inputConteiner">
                    <Field
                      name="phone"
                      type="number"
                      className="input"
                      placeholder="Teléfono..."
                    />
                    {touched.phone && errors.phone ? <div>Required</div> : null}
                  </div>
                </div>

            <label>Description</label>
            <div className="textareaConteiner">
              <Field
                component="textarea"
                type="text"
                name="description"
                placeholder="Mensaje..."
                className="textarea"
              />

              {touched.description && errors.description ? (
                <div>{errors.description}</div>
              ) : null}
            </div>
           
            <div className="">
              <button className="" type="submit">
               Contactar
              </button>
            </div>
          </Form>
        </ContactContainer>
      )}
    </Formik>
  );
};
