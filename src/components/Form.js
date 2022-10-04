import styles from './Form.module.css';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { createAccountFormElement } from '../utils/form-element';

const Form = () => {

    const onChangeHadler = (event) => {
        console.log(event.target.id," : ",event.target.value)
    }
    const onBlurHandler = (event) => {
        
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        //console.log("event : ",event)
    }
    return (
        <Card className={styles.card}>
            <CardContent >
                <Typography variant='h5' align='center' gutterBottom color='primary'>Create an Account</Typography>
                <Typography variant='subtitle1' align='center' gutterBottom color='textSecondary'>Fill all mandatory fields and create your account.</Typography>
                <form>
                    <Typography variant='subtitle1' gutterBottom>Personal Information:</Typography>
                    <Grid container spacing={1}>
                        {
                            createAccountFormElement.slice(0, 4).map((input, index) => (
                                <Grid key={index} xs={input.xs} sm={input.sm} item >
                                    <TextField {...input} 
                                        onChange={onChangeHadler}
                                        onBlur={onBlurHandler}
                                    />
                                </Grid>
                            ))
                        }

                    </Grid>
                    <Typography variant='subtitle1' gutterBottom>Address:</Typography>
                    <Grid container spacing={1}>
                        {
                            createAccountFormElement.slice(4, createAccountFormElement.length).map((input, index) => (
                                <Grid key={index} xs={input.xs} sm={input.sm} item >
                                    <TextField {...input} 
                                        onChange={onChangeHadler}
                                        onBlur={onBlurHandler}
                                    />
                                </Grid>
                            ))
                        }

                    </Grid>

                    <Grid container spacing={1} className={styles.buttonContainer}>
                        <Grid item xs={12} align='right'>
                            <Button type='reset' variant="outlined">Reset</Button>
                            <Button type='submit' variant="contained" onClick={onSubmitHandler}>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}

export default Form;