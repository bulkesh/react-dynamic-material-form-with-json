import styles from './Form.module.css';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

import { createAccountFormElement, validator } from '../utils/form-element';
import { useCallback, useState } from 'react';

const defaultState = {
    firstName: {
        value: '',
        touched: false,
        error: false,
        rules: [
            {
                test: (value) => {
                    return value.trim() !== '';
                },
                message: 'First name is required',
            },
        ],
        errorMessage: ''
    },
    lastName: {
        value: '',
        touched: false,
        error: false,
        rules: [
            {
                test: (value) => {
                    return value.trim() !== '';
                },
                message: 'Last name is required',
            },
        ],
        errorMessage: ''
    },
    email: {
        value: '',
        touched: false,
        error: false,
        rules: [
            {
                test: (value) => {
                    return value.trim() !== '';
                },
                message: 'Email is required',
            },
            {
                test: (value) => {
                    const pattern = /^\S+@\S+\.\S+$/;
                    return pattern.test(value);
                },
                message: 'Please enter valid email address',
            },
        ],
        errorMessage: ''
    },
    phone: {
        value: '',
        touched: false,
        error: false,
        rules: [
            {
                test: (value) => {
                    return value.trim() !== '';
                },
                message: 'Phone number is required',
            },
            {
                test: (value) => {
                    const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                    return pattern.test(value);
                },
                message: 'Please enter valid phone number',
            },
        ],
        errorMessage: ''
    },
    street: {
        value: '',
        touched: false,
        error: false,
        rules: [
            {
                test: (value) => {
                    return value.trim() !== '';
                },
                message: 'Street is required',
            },
        ],
        errorMessage: ''
    },
    city: {
        value: '',
        touched: false,
        error: false,
        rules: [
            {
                test: (value) => {
                    return value.trim() !== '';
                },
                message: 'City is required',
            },
        ],
        errorMessage: ''
    },
    state: {
        value: '',
        touched: false,
        error: false,
        rules: [
            {
                test: (value) => {
                    return value.trim() !== '';
                },
                message: 'State is required',
            },
        ],
        errorMessage: ''
    },
    country: {
        value: '',
        touched: false,
        error: false,
        rules: [
            {
                test: (value) => {
                    return value.trim() !== '';
                },
                message: 'Country is required',
            },
        ],
        errorMessage: ''
    },
    pincode: {
        value: '',
        touched: false,
        error: false,
        rules: [
            {
                test: (value) => {
                    return value.trim() !== '';
                },
                message: 'Pincode is required',
            },
            {
                test: (value) => {
                    return value.trim().length === 6;
                },
                message: 'Pincode length must be 6',
            },
        ],
        errorMessage: ''
    },
}
const Form = () => {
    const [formValues, setFormValue] = useState(defaultState);

    const setValueAndValidation = (e) => {
        const { name, value } = e.target;
        let validate = {
            touched: false,
            error: false,
            errorMessage: ''
        };
        formValues[name].rules.map((rule) => {
            if(validate.error !== true){
                if (!rule.test(value)) {
                    validate.errorMessage = rule.message;
                    validate.error = true;
                    validate.touched = true;
                } else {
                    validate.errorMessage = '';
                    validate.error = false;
                }
            }
        });
        setFormValue({
            ...formValues,
            [name]: {
                ...formValues[name],
                value,
                ...validate
            }
        });

    }

    const onChangeHadler = (e) => {
        setValueAndValidation(e)
    }
    const onBlurHandler = (e) => {
        setValueAndValidation(e)
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