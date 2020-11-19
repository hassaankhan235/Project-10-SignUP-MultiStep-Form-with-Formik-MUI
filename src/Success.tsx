import React from 'react'
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core';
import Box from "@material-ui/core/Box";

function Success() {
  return (
    <Grid container justify='center'>
      <Typography variant='h4' color='primary'>
          <Box m={2}>
           Signing Up Successful.
          </Box> 
      </Typography>
    </Grid>
  )
}

export default Success
