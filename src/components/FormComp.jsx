import React, { useState } from "react";
import { Formik, Form, Fields, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function FormComp() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  let [data, setData] = useState([]);

  const postSchemea = yup.object().shape({
    title: yup.string().required(),
    body: yup.string().required(),
    phoneNumber: yup.number().required().positive().integer(),
  });

  return (
    <div className="formClass">
      <div className="formName">
        <h1>Form</h1>
      </div>
      <Formik
        initialValues={{ title: "", body: "", phoneNumber: "" }}
        validationSchema={postSchemea}
        validate={(values) => {
          setTitle(values.title);
          setBody(values.body);
          setPhoneNumber(values.phoneNumber);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="formCenter">
            <Form
              onSubmit={(values) => {
                values.preventDefault();
                setTitle(values.title);
                setBody(values.body);
                setPhoneNumber(values.phoneNumber);

                const o = [
                  {
                    title: title,
                    body: body,
                    phoneNumber: phoneNumber,
                  },
                ];

                setData((old) => [...old, o]);
              }}
            >
              <div className="dataInput">
                <label>Title</label>
                <Field type="text" name="title" onChange={handleChange} />
                <ErrorMessage name="title" component="div" />
              </div>

              <div className="dataInput">
                <label>Description</label>
                <Field type="text" name="body" onChange={handleChange} />
                <ErrorMessage name="body" component="div" />
              </div>

              <div className="dataInput">
                <label>Phone Number</label>
                <Field type="text" name="phoneNumber" onChange={handleChange} />
                <ErrorMessage name="phoneNumber" component="div" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                SUBMIT
              </button>
            </Form>
          </div>
        )}
      </Formik>

      <div>
        {data &&
          data.map((d, i) => (
            <div key={i}>
              <li key={i}>
                {d.title}
                {d.body}
                {d.phoneNumber}
              </li>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FormComp;
