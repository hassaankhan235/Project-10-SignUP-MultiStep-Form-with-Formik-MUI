import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Field , FieldInputProps} from 'formik';


interface MuiCheckboxProps {
    name: string,
    label: string
}

const MuiCheckbox = (props : MuiCheckboxProps) =>  {
    const {name,  label} = props

interface testprops extends FieldInputProps<boolean>{
    name: string,
    checked: boolean
    checkboxState: boolean,
    label: string,
}
    const MuiCheckboxTemplate  = (props: testprops )  => {
        return(
        <FormControlLabel
        control={<Checkbox checked={props.value} onChange={props.onChange} 
        color='primary'
        name={name} value= {props.value} onBlur= {props.onBlur}/>} label={label} 
      />
        )
    }

  return (
    <div>
      <Field as={MuiCheckboxTemplate}
      name = {name} label = {label} /> 
    </div>
  )
}

export default MuiCheckbox
