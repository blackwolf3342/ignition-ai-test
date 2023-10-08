'use client'

import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import Link from 'next/link';
export default function SignUpForm() {
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    subscribe: false,
    submit: null,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("* This email address is invalid")
      .max(255)
      .required("* This email address is required"),
    firstName: Yup.string().required("* Cannot be empty"),
    lastName: Yup.string().required("* Cannot be empty"),
    password: Yup.string()
      .min(6, "* 6 characters required")
      .max(255)
      .required("* Password is required"),
  });

  const onSubmit = (values: typeof initialValues, { setSubmitting }: FormikHelpers<typeof initialValues>)=>{
    setSubmitting(true);

    setTimeout(()=> {
      console.log('Sign in....')

      setSubmitting(false);
    }, 1000)
  }


  return (<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>{
    ({
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
      values
    }) => (
      <form noValidate onSubmit={handleSubmit} className="signup__form form">
        <div className="form__inputs">
          <div className="form__row block">
            <div className="form__block">
              <label >First Name</label>
              <input 
                type="text"
                placeholder="First Name" 
                name='firstName'
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName ? <span className="form__error">{errors.firstName}</span> : <span className="form__error-space"></span>}
            </div>
            <div className="form__block">
              <label>Last Name</label>
              <input 
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName ? <span className="form__error">{errors.lastName}</span> : <span className="form__error-space"></span>}
            </div>
          </div>
          <div className="form__row">
            <label >Email</label>
            <input 
              type="text"
              placeholder="Jane@gmail.com"
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email ? <span className="form__error">{errors.email}</span> : <span className="form__error-space"></span>}

          </div>
          <div className="form__row">
            <label >Password</label>
            <input 
              type="password"
              placeholder="Jane@gmail.com"
              name='password' 
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password ? <span className="form__error">{errors.password}</span> : <span className="form__error-space"></span>}

          </div>
          <div className="form__row form__checkbox">
            <input
             type="checkbox" id="subscribe"
             checked={values.subscribe}
             value='true'
             onChange={handleChange}
             />
            <label htmlFor="subscribe">Subscribe to our monthly newsletter</label>
          </div>
        </div>
        <div className="form__disclaimer">
          <p>By clicking below you agree to our <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link></p>
        </div>
        <button className="btn" type="submit" disabled={isSubmitting}>Sign up</button>
        <div className="form__basement">
          <p>Already have an account? <Link href="/login"> Log in</Link></p>
        </div>
      </form>
    )
  }</Formik>); 
}