import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const UserForm = (props) => {
    //console.log("error", props.errors, "touched", props.touched);
    //console.log(props.status);
    //console.log(props);

    return (
        <Form>
            <Field type="text" name="name" placeholder="Name" />
            {props.touched.name && props.errors.name ? (
                <span className="error">{props.errors.name}</span>
            ) : null}
            <Field type="email" name="email" placeholder="Email" />
            {props.touched.email && props.errors.email ? (
                <span className="error">{props.errors.email}</span>
            ) : null}
            <Field type="password" name="password" placeholder="Password" />
            {props.touched.password && props.errors.password ? (
                <span className="error">{props.errors.password}</span>
            ) : null}
            <label htmlFor="tos">Read the TOS?:</label>
            <Field type="checkbox" name="tos" />
            {props.touched.tos && props.errors.tos ? (
                <span className="error">{props.errors.tos}</span>
            ) : null}
            <button type="submit">Create New User</button>
        </Form>
    );
};

export default withFormik({
    mapPropsToValues: (props) => {
        return {
            name: props.title || "",
            email: props.email || "",
            password: props.password || "",
            tos: props.tos || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required("Please name.")
            .min(3, "Must be at least 10 characters long!"),
        email: Yup.string().email("Please use a valid email"),
        password: Yup.string().min(3, "Must be at least 10 characters long!"),
        tos: Yup.boolean().oneOf(
            [true],
            "Must read Terms of Service to Continue"
        )
    }),
    handleSubmit: (values, formikBag) => {
        //console.log("values", values);
        //console.log("bag", formikBag);
        formikBag.props.addNewUser({
            ...values,
            id: Date.now()
        });
        formikBag.setStatus("form submitting");
        formikBag.resetForm();
    }
})(UserForm);
