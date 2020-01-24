import React from 'react';
import { Form, Field, withFormik } from 'formik';

function UserForm() {
    return (
        <Form>
            <Field type="text" name="name" placeholder="Name" />
            <Field type="text" name="email" placeholder="Email" />
            <Field type="text" name="password" placeholder="Password" />
            <Field type="checkbox" name="termsOfService" />
            <button type="submit">Submit</button>
        </Form>
    )
};

export default UserForm;