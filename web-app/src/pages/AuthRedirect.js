import React, { Fragment, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import queryString from "query-string";

import { getTokenGoogle } from "../redux/actions/auth";

const AuthRedirect = ({ location, getTokenGoogle, isAuthenticated }) => {
  useEffect(() => {
    let url = location.search;
    let params = queryString.parse(url);
    getTokenGoogle(params);
  }, []);

  if (isAuthenticated) {
    return <Redirect to='/user' />;
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-6 '>
            <div className='h1 mt-5 text-center'>Please wait</div>
            <div className='d-flex justify-content-center'>
              <Spinner
                animation='border'
                variant='primary'
                className='align-middle'
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AuthRedirect.propTypes = {
  getTokenGoogle: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getTokenGoogle })(AuthRedirect);
