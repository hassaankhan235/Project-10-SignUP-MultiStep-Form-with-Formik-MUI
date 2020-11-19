import React, {useState} from 'react'
import "./App.css";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField'
import { Box, Typography } from "@material-ui/core";
import { Field, Form, Formik, ErrorMessage} from 'formik'
import Button from '@material-ui/core/Button'
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import MuiCheckbox  from './MuiCheckbox'
import * as yup from 'yup'

function SignUp() {
  
  interface formValuePrope {
    username: string,
    email: string,
    password: string,
    male: boolean,
    female: boolean
  }

  const [state, setState] = useState({
    male : true,
    female: true
  })
  

    return (
    <Formik 
    initialValues= {{username:'',email:'', 
                    password: '', male: true,  female: true}}
    onSubmit = {(values) => {
      console.log(values)
      values.male && values.female && alert('Na baba Na')
    }} 
      
    validationSchema={yup.object({
        username: yup.string().required('Must be filled'),
        email: yup.string().required('Must be filled'),  
        password: yup.string().required('Must be filled') 
      })
    }>

    <Form>
    
    <Grid container justify='center'  className='me'>

      <Box border={1} padding={2} 
      width="80%" >

    <Grid container justify='center'>

    <Typography color='primary' variant='h4'> Sign Up Form </Typography>
      
    <Grid item xl={12} xs={12} >
     <Field as={TextField} label = "User Name" 
      variant='outlined' style={{width:'100%', marginTop:'2%'}} 
      name = 'username'/>
      <ErrorMessage name='username' />
    </Grid>

      <Grid item xl={12} xs={12} >
      <Field as={TextField} label = "Email Address" 
      variant='outlined' style={{width:'100%', marginTop:'2%'}} 
      name = 'email'/>
      <ErrorMessage name='email'/>
      </Grid>

      <Grid item xl={12} xs={12}>
      <Field as={TextField} label = "Password" 
      variant='outlined' style={{width:'100%', marginTop:'2%'}} 
      name = 'password'/>
      <ErrorMessage name='password' />
      </Grid>

      <Grid item xl={12} xs={12} >
      <Box className='margintop'>
      <FormLabel component="legend">Select Gender</FormLabel>
      <FormGroup>
     
      <MuiCheckbox name='male'
     label = 'Male'  /> 

     <MuiCheckbox name='female'  
     label = 'Female'  /> 
     
      </FormGroup>
      </Box>
      </Grid>

      <Button type='submit' variant='contained' color = 'primary'>
       Submit </Button>
      
    </Grid>
    </Box>
    </Grid>

    </Form>
    </Formik>
  )
}

export default SignUp
