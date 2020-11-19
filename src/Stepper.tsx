import React from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SignUp from './SignUp';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Success from './Success'

const getSteps = () => {
        return ['Sign Up First', 'Create an ad group', 'Create an ad'];
      }

      const getStepContent = (stepIndex : number) => {
        switch (stepIndex) {
          case 0:
            return <SignUp />;
          case 1:
            return <Success />;
          case 2:
            return 'This is the bit I really care about!';
          default:
            return 'Unknown stepIndex';
        }
      }
function MyStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };
      
    return (
    <div>
    
    <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography >All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (

         <Grid container justify='center'>
            
            <Grid item xl={12} xs={12} >
                {getStepContent(activeStep)}
            </Grid>

            <Grid container justify='center' >
              <Box className='margintop'>
              <Grid item xl={2} >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
              </Grid>
              </Box>
            </Grid>
          </Grid>
        )}
      </div>


    </div>
  )
}

export default MyStepper