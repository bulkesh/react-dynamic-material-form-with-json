import styles from './App.module.css';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

function App() {
  return (
    <Card className={styles.card}>
      <CardContent >
        <Typography variant='h5' align='center' gutterBottom color='primary'>Create an Account</Typography>
        <Typography variant='subtitle1' align='center' gutterBottom color='textSecondary'>Fill all mandatory fields and create your account.</Typography>
        <form>
          <Typography variant='subtitle1' gutterBottom>Personal Information:</Typography>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item >
              <TextField
                required
                autoComplete='off'
                placeholder='Enter First Name'
                id="firstName"
                label="First Name"
                defaultValue=""
                fullWidth
              />
            </Grid>
            <Grid xs={12} sm={6} item >
              <TextField
                required
                autoComplete='off'
                placeholder='Enter Last Name'
                id="lastName"
                label="Last Name"
                defaultValue=""
                fullWidth
              />
            </Grid>
            <Grid xs={12} sm={6} item >
              <TextField
                required
                autoComplete='off'
                placeholder='Enter E-mail Address'
                id="email"
                type='email'
                label="Email"
                defaultValue=""
                fullWidth
              />
            </Grid>
            <Grid xs={12} sm={6} item >
              <TextField
                required
                autoComplete='off'
                placeholder='Enter Phone Number with Countery code'
                id="phone"
                label="Phone Number"
                defaultValue=""
                type="number"
                fullWidth
              />
            </Grid>
          </Grid>
          <Typography variant='subtitle1' gutterBottom>Address:</Typography>

          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item >
              <TextField
                required
                autoComplete='off'
                placeholder='Street'
                id="street"
                label="Street"
                defaultValue=""
                fullWidth
              />
            </Grid>
            <Grid xs={12} sm={6} item >
              <TextField
                required
                autoComplete='off'
                placeholder='City'
                id="city"
                label="City"
                defaultValue=""
                fullWidth
              />
            </Grid>
            <Grid xs={12} sm={6} item >
              <TextField
                required
                autoComplete='off'
                placeholder='State'
                id="state"
                label="State"
                defaultValue=""
                fullWidth
              />
            </Grid>
            <Grid xs={12} sm={6} item >
              <TextField
                required
                autoComplete='off'
                placeholder='Country'
                id="country"
                label="country"
                defaultValue=""
                fullWidth
              />
            </Grid>
            <Grid xs={12} item >
              <TextField
                required
                autoComplete='off'
                placeholder='Pincode'
                id="pincode"
                label="pincode"
                defaultValue=""
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid xs={6} sm={3} item>
              <Button type='reset' variant="outlined">Reset</Button>
            </Grid>
            <Grid xs={6} sm={3} item>
              <Button type='submit' variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default App;
