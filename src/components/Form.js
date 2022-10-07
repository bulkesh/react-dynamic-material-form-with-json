import styles from './Form.module.css';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

import { createAccountFormElement } from '../utils/form-element';
import useInput from '../hooks/use-input';

const Form = () => {
    const {
        state,
        onChangeHadler,
        onBlurHandler,
        onResetHandler,
        isFormValid,
    } = useInput()

    const onSubmitHandler = event => {
        event.preventDefault();
        let formValues = {};
        for (const key in state) {
            if (Object.hasOwnProperty.call(state, key)) {
                formValues[key] = state[key].value;
            }
        }
        console.log(" formValues: ",formValues);
        onResetHandler(event);
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
                                <Grid key={index} xs={input.xs} sm={input.sm} item>
                                    <TextField className={`${styles.marginBottom} ${state[input.name]['error']?styles.error:''}`} {...input}
                                        onChange={onChangeHadler}
                                        onBlur={onBlurHandler}
                                        value={state[input.name]['value']}
                                        error={state[input.name]['error']}
                                        helperText={state[input.name]['error'] && state[input.name]['errorMessage']}
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
                                    <TextField className={`${styles.marginBottom} ${state[input.name]['error']?styles.error:''}`} {...input}
                                        onChange={onChangeHadler}
                                        onBlur={onBlurHandler}
                                        value={state[input.name]['value']}
                                        error={state[input.name]['error']}
                                        helperText={state[input.name]['error'] && state[input.name]['errorMessage']}
                                    />
                                </Grid>
                            ))
                        }

                    </Grid>

                    <Grid container spacing={1} className={styles.buttonContainer}>
                        <Grid item xs={12} align='right'>
                            <Button type='reset' variant="outlined" onClick={onResetHandler}>Reset</Button>
                            <Button type='submit' disabled={!isFormValid} variant="contained" onClick={onSubmitHandler}>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>

    )
}

export default Form;