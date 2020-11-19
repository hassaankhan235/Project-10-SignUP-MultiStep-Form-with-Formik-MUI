import React from 'react'
import Button from "@material-ui/core/Button";
import { Field, Form, Formik } from 'formik'
import { CheckboxWithLabel } from 'formik-material-ui';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import Container from "@material-ui/core/Container";

function MuiPractice() {

    const theme = createMuiTheme({
        typography: {
          fontSize: 16
        },
        palette : {
          primary: {
           main: '#96e99a'
          }
        }
      });

  return (
    <Container maxWidth='xs' style= {{backgroundColor: 'green'}} >
    <Formik 
    initialValues = {{chkbx: '', inp: '', chb: ''}} 
    onSubmit = {(values) => console.log("Values", values)} >
    <div className="App">
    <Form>
    
    <ThemeProvider theme = {theme} >
    <Field component = {CheckboxWithLabel} type='checkbox'
     name = 'chkbx'  Label={{ label: 'Checkbox' }} color='primary'/>
    </ThemeProvider>

    <Field type='text' label='input' name='inp' />
    
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" size="large">
        Hello
      </Button>
    </ThemeProvider>

      <Field type='submit' label='submit' value='submit' />
    </Form>
    </div>
    </Formik>
    </Container>
  )
}

export default MuiPractice
