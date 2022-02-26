import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import {
  Box,
  Grid,
  Typography,
  InputAdornment,
  Button,
  Snackbar,
  Icon
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import './ContactUs.css';

const ContactUs = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [alert, setAlert] = useState({
    isOpen: false,
    message: '',
    type: '',
  });

  const afterSubmit = () => {
    setFullName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const onSubmit = async e => {
    e.preventDefault();
    setAlert({
      isOpen: true,
      message: 'Email Sent Successfully!',
      type: 'success',
    });

    try {
      let formdata = new FormData();
      formdata.append(
        'timestamp',
        moment(new Date()).format('Do MMM YYYY hh:mm:ss a')
      );
      formdata.append('email', email);
      formdata.append('fullname', fullName);
      formdata.append('subject', subject);
      formdata.append('message', message);

      await axios.post(process.env.REACT_APP_SCRIPT_URL, formdata);

      afterSubmit();
    } catch (err) {
      setAlert({
        isOpen: true,
        message: 'Email not sent, Please try again later!',
        type: 'error',
      });

      afterSubmit();
    }
  };

  const handleClose = () => {
    setAlert({
      ...alert,
      isOpen: false,
    });
  };

  return (
    <Box className='contactus-container' id='contactSection'>
      <Box className='contactus-inner-container'>
        <Box className='contactus-items-container'>
          <Box className='contactus-form-container'>
            <Box className='contactus-text-container'>
              <span className='contactus-line'></span>
              <Typography component='span' className='contactus-text'>
                CONTACT US
              </Typography>
            </Box>
            <Box mt={2} className='contactus-form-inner-container'>
              <ValidatorForm onSubmit={onSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextValidator
                      label='Full Name'
                      variant='outlined'
                      name='fullname'
                      fullWidth
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <Icon style={{ color: 'white' }} >person_outline</Icon>
                          </InputAdornment>
                        ),
                      }}
                      validators={['required']}
                      errorMessages={['Full name is required']}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextValidator
                      label='Email'
                      variant='outlined'
                      name='email'
                      fullWidth
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <Icon style={{ color: 'white' }} >mail_outline</Icon>
                          </InputAdornment>
                        ),
                      }}
                      validators={['required', 'isEmail']}
                      errorMessages={[
                        'Email is required',
                        'Email is not valid',
                      ]}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextValidator
                      label='Subject'
                      variant='outlined'
                      name='subject'
                      fullWidth
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <Icon style={{ color: 'white' }} >subject</Icon>
                          </InputAdornment>
                        ),
                      }}
                      validators={['required']}
                      errorMessages={['Subject is required']}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextValidator
                      label='Message'
                      name='message'
                      multiline
                      rows={5}
                      rowsMax={5}
                      variant='outlined'
                      fullWidth
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <Icon
                              style={{
                                color: 'white',
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                              }}
                            >create</Icon>
                          </InputAdornment>
                        ),
                      }}
                      validators={['required']}
                      errorMessages={['Message is required']}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button type='submit' className='contactus-send-button'>
                      Send Message{' '}
                      <i className='fas fa-arrow-right contactus-button-icon'></i>
                    </Button>
                  </Grid>
                </Grid>
              </ValidatorForm>
            </Box>
          </Box>
          <Box justifyContent="center" className='contactus-image-container'>
            <Box className='contactus-text-container'>
              <span className='contactus-line'></span>
              <Typography component='span' className='contactus-text'>
                CONTACT DETAILS
              </Typography> 
            </Box>
            <Typography  style={{display: 'inline-block'}} component='span' className='contactus-details-text-cname'>
              Wemotive Technologies
            </Typography><br/>
            <Typography style={{display: 'inline-block'}} component='span' className='contactus-details-text-office-address'>
              Registered Address:
              202, Shivsparsh H, Ambegaon Bk, Pune-411041
            </Typography><br/>
            <Typography style={{display: 'inline-block'}} component='span' className='contactus-details-text-office-address'>
              Contact: +91 8796105046
            </Typography><br/>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={alert.isOpen}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={alert.type}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;
