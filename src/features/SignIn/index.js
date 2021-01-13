import React from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import InputField from "custom-fields/InputField";
import { Button, FormGroup } from "reactstrap";
import { signInWithGoogle } from "firebase/utils";
import * as Yup from "yup";

SignIn.propTypes = {};

function SignIn(props) {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  return (
    <div className="fulPageForm">
      <h2>LOGIN</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("Submit: ", values)}
      >
        {(formikProps) => {
          // do something here ...

          const { values, errors, touched } = formikProps;
          console.log("Inputed Text", { values, errors, touched });

          return (
            <Form>
              <FastField
                name="username"
                component={InputField}
                label="Username"
                placeholder="E.g email@domain.com"
              />
              <FastField
                name="password"
                component={InputField}
                label="Password"
                placeholder="E.g 123@#$!Abc"
              />

              <FormGroup>
                <Button type="submit" color="primary">
                  Add to album
                </Button>
              </FormGroup>
              <FormGroup>
                <Button outline color="primary" onClick={signInWithGoogle}>
                  Sign in with Google Account
                </Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default SignIn;
