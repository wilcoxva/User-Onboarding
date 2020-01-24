import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";

function UserForm({ errors, touched, values, status }) {
    return (
        <Form>
            <Field type="text" name="name" placeholder="Name" />
            {touched.name && errors.name && <p>{errors.name}</p>}

            <Field type="text" name="email" placeholder="Email" />
            {touched.email && errors.email && <p>{errors.email}</p>}

            <Field type="text" name="password" placeholder="Password" />
            {touched.password && errors.password && <p>{errors.password}</p>}

            <Field type="checkbox" name="termsOfService" value="values.termsOfService" />
            {touched.termsOfService && errors.termsOfService && <p>{errors.termsOfService}</p>}

            <button type="submit">Submit</button>
        </Form>
    )
};

const FormikUserForm = withFormik({
    mapPropsToValues({ name }) {
      return {
        name: name || "",
        email: "",
        password: "",
        termsOfService: false,
      };
    },
  
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please fill this in!"),
        email: Yup.string().required("Please fill this in!"),
        password: Yup.string().required("Please fill this in!"),
        termsOfService: Yup.bool()
      })
  
    // handleSubmit(values, { setStatus, resetForm }) {
    //   console.log("Submitting form:", values);
  
    //   axios
    //     .post("https://reqres.in/api/users/", values)
    //     // just put in a url you want data from
    //     .then(res => {
    //       console.log("Success:", res);
    //       setStatus(res.data);
    //       resetForm();
    //     })
    //     // do stuff with whatever gets returned
    //     .catch(err => {
    //       console.log("Error:", err.response);
    //     });
    //   // if there's an error, handle it
    // }
  })(UserForm);

export default FormikUserForm;