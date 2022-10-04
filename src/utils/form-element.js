export const createAccountFormElement = [
    {
        autoComplete: 'off', placeholder: 'Enter First Name', id: "firstName",
        name: "firstName", label: "First Name", size: 'small', defaultValue: "",
        fullWidth: true, required: true, xs: 12, sm: 6,margin:"none" 

    },
    {
        autoComplete: 'off', placeholder: 'Enter Last Name', id: "lastName",
        name: "lastName", label: "Last Name", size: 'small', defaultValue: "",
        fullWidth: true, required: true, xs: 12, sm: 6,

    },
    {
        autoComplete: 'off', placeholder: 'Enter E-mail', id: "email",
        name: "email", label: "E-mail", type: "email", size: 'small', defaultValue: "",
        fullWidth: true, required: true, xs: 12, sm: 6, 
        validators:{
            required: true, 
            isEmail: false
        }
    },
    {
        autoComplete: 'off', placeholder: 'Phone Number', id: "phone",
        name: "phone", label: "Phone", type: "number", size: 'small', defaultValue: "",
        fullWidth: true, required: true, xs: 12, sm: 6,

    }

    ,
    {
        autoComplete: 'off', placeholder: 'Street', id: "street",
        name: "street", label: "Street", size: 'small', defaultValue: "",
        fullWidth: true, required: true, xs: 12, sm: 6,

    }
    ,
    {
        autoComplete: 'off', placeholder: 'City', id: "city",
        name: "city", label: "City", size: 'small', defaultValue: "",
        fullWidth: true, required: true, xs: 12, sm: 6,

    }
    ,
    {
        autoComplete: 'off', placeholder: 'State', id: "state",
        name: "state", label: "State", size: 'small', defaultValue: "",
        fullWidth: true, required: true, xs: 12, sm: 6,

    }
    ,
    {
        autoComplete: 'off', placeholder: 'Country', id: "country",
        name: "country", label: "Country", size: 'small', defaultValue: "",
        fullWidth: true, required: true, xs: 12, sm: 6,

    }
    ,
    {
        autoComplete: 'off', placeholder: 'Pincode', id: "pincode",
        name: "pincode", label: "Pincode", type: "number", size: 'small', defaultValue: "",
        fullWidth: true, required: true, xs: 12, sm: 12,

    }
]