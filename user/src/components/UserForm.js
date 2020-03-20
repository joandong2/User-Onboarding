import React from "react";
import { withFormik, Form, Field } from "formik";
import { FormGroup } from "reactstrap";
import * as Yup from "yup";
import axios from "axios";

//styles
import "../styles/styles.css";

const UserForm = (props) => {
    //console.log("error", props.errors, "touched", props.touched);
    //console.log(props.status);
    //console.log(props);

    return (
        <Form>
            <FormGroup>
                <Field
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                {props.touched.name && props.errors.name ? (
                    <p className="error">{props.errors.name}</p>
                ) : null}
            </FormGroup>
            <Field type="email" name="email" placeholder="Email" />
            {props.touched.email && props.errors.email ? (
                <p className="error">{props.errors.email}</p>
            ) : null}
            <Field type="password" name="password" placeholder="Password" />
            {props.touched.password && props.errors.password ? (
                <p className="error">{props.errors.password}</p>
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
            .required("Name is required.")
            .min(8, "Must be at least 8 characters long!"),
        email: Yup.string()
            .required("Email is required.")
            .email("Please use a valid emai.l"),
        password: Yup.string()
            .required("Password is required.")
            .min(8, "Must be at least 8 characters long!"),
        tos: Yup.boolean().oneOf(
            [true],
            "Must read Terms of Service to Continue"
        )
    }),
    handleSubmit: (values, formikBag) => {
        //console.log("values", values);
        //console.log("bag", formikBag);
        if (values.email === "waffle@syrup.com") {
            formikBag.setErrors({ email: "That email is already taken" });
        } else {
            axios
                .post("https://reqres.in/api/users", values)
                .then((res) => {
                    //console.log(res);
                    formikBag.props.addNewUser({
                        ...res.data
                    });
                    formikBag.resetForm();
                })
                .catch((err) => {
                    console.log(err); // There was an error creating the data and logs to console
                    formikBag.resetForm();
                });
        }
    }
})(UserForm);
