import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loginGoogle } from "../redux/actions/auth";

const Home = ({ loginGoogle, oauth }) => {
  const handleGoogleSignIn = () => {
    loginGoogle();
  };

  if (oauth) {
    window.location.href = oauth;
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='display-1 text-primary mb-3 text-center'>
          Login Page
        </div>
        <div className='row align-items-center justify-content-center'>
          <div className='col-6'>
            <Form>
              <Form.Group>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='my-2'
                ></Form.Control>
                <Form.Control
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='my-2'
                ></Form.Control>
              </Form.Group>
              <Button className='btn-block mb-3'>Login</Button>
            </Form>
            <Button
              className='btn-danger btn-block'
              onClick={handleGoogleSignIn}
            >
              Sign In with Google
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  loginGoogle: PropTypes.func.isRequired,
  oauth: PropTypes.string,
};

const mapStateToProps = (state) => ({
  oauth: state.auth.oauth,
});

export default connect(mapStateToProps, { loginGoogle })(Home);
