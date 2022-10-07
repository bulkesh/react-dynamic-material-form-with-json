import { useReducer } from "react";

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
                message: 'Phone number must be 10 digits',
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
                message: 'Pincode length must be 6 digits',
            },
        ],
        errorMessage: ''
    },
}

const actions = {
    INPUT: 'INPUT',
    BLUR: 'BLUR',
    RESET: 'RESET'
}
const setValueAndValidation = (state, target) => {
    const { name, value } = target;
    let validate = {
        touched: false,
        error: false,
        errorMessage: '',
    };
    state[name].rules.forEach((rule) => {
        if (validate.error !== true) {
            if (!rule.test(value)) {
                validate.errorMessage = rule.message;
                validate.error = true;
            } else {
                validate.errorMessage = '';
                validate.error = false;
            }
            validate.touched = true;
        }

    });
    return validate;
}
const inputReducer = (state, { type, value: target }) => {

    switch (type) {
        case actions.INPUT:
        case actions.BLUR:
            const { name, value } = target;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    ...setValueAndValidation(state, target),
                    value: value,
                }
            }

        case actions.RESET:
            return defaultState;
        default:
            return {
                ...state,
                [name]: {
                    ...state[name],
                }
            }

    }
}
const useInput = () => {
    const [state, dispatch] = useReducer(inputReducer, defaultState);
    let isFormValid = false;

    for (let key in state) {
        if ((state[key].touched && state[key].error) || (!state[key].touched && !state[key].error)) {
            isFormValid = false;
            break;
        } else {
            isFormValid = true;
        }
    }

    const onChangeHadler = (e) => {
        dispatch({ type: actions.INPUT, value: e.target });
    }

    const onBlurHandler = (e) => {
        dispatch({ type: actions.BLUR, value: e.target });
    }

    const onResetHandler = (e) => {
        dispatch({ type: actions.RESET });
    }
    return {
        state,
        isFormValid,
        onChangeHadler,
        onBlurHandler,
        onResetHandler,
    }

}
export default useInput;