import styles from './Form.module.css';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

import { createAccountFormElement } from '../utils/form-element';
import { useState } from 'react';
//import { makeStyles } from '@mui/material/styles';
import { withStyles } from "@mui/material/styles";

const defaultState = {
    firstName: {
        value: '',
        touched: false,
        error: false,
        errorMessage: 'First Name is required'
    },
    lastName: {
        value: '',
        touched: false,
        error: false,
        errorMessage: 'Last Name is required'
    },
    email: {
        value: '',
        touched: false,
        error: false,
        errorMessage: 'E-mail is required',
    },
    phone: {
        value: '',
        touched: false,
        error: false,
        errorMessage: 'Phone is required'
    },
    street: {
        value: '',
        touched: false,
        error: false,
        errorMessage: 'Street is required'
    },
    city: {
        value: '',
        touched: false,
        error: false,
        errorMessage: 'City is required'
    },
    state: {
        value: '',
        touched: false,
        error: false,
        errorMessage: 'State is required'
    },
    country: {
        value: '',
        touched: false,
        error: false,
        errorMessage: 'Country is required'
    },
    pincode: {
        value: '',
        touched: false,
        error: false,
        errorMessage: 'Pincode is required'
    },
}
const Form = () => {
    const [formValues, setFormValue] = useState(defaultState);

    const onChangeHadler = (event) => {
        const { name, value } = event.target;
        console.log(name, " : ", value);
        setFormValue({
            ...formValues,
            [name]: {
                ...formValues[name],
                value,
                touched: true,
                error: (value.trim() !== '') ? false : true
            }
        })
    }
    const onBlurHandler = (event) => {
        const { name } = event.target;
        setFormValue({
            ...formValues,
            [name]: {
                ...formValues[name],
                touched: true
            }
        })

        console.log("formValues : ", formValues[name]);
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        const formFields = Object.keys(formValues);

        let newFormValues = { ...formValues };
        for (let index = 0; index < formFields.length; index++) {
            const currentField = formFields[index];
            const currentValue = formValues[currentField].value;

            if (currentValue === '') {
                newFormValues = {
                    ...newFormValues,
                    [currentField]: {
                        ...newFormValues[currentField],
                        error: true,
                        touched: true
                    }
                }
            }

        }
        console.log("newFormValues : ", newFormValues);
        setFormValue(newFormValues)
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
                                    <TextField className={styles.marginBottom} {...input}
                                        onChange={onChangeHadler}
                                        onBlur={onBlurHandler}
                                        error={formValues[input.name]['error']}
                                        helperText={formValues[input.name]['error'] && formValues[input.name]['errorMessage']}
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
                                    <TextField className={styles.marginBottom} {...input}
                                        onChange={onChangeHadler}
                                        onBlur={onBlurHandler}
                                        error={formValues[input.name]['error']}
                                        helperText={formValues[input.name]['error'] && formValues[input.name]['errorMessage']}
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