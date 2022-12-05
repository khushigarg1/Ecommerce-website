import { async } from "@firebase/util";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password != confirmPassword) {
            alert("password doesnot match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/invalid-email' ||
                error.code === 'auth/user-disabled' ||
                error.code === 'auth/user-not-found') {
                alert("You have created an account already using this email");
            }
            // else if (error.code = 'auth/invalid-email') {
            //     alert("wrong email");
            // }
            else if (error.code === 'auth/wrong-password') {
                alert("password should be atleast 6 characters");
            }
            else {
                console.log('user creation encountered an error', error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div>
            <h1> Sign up with your email and apssword</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input
                    type='text'
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <label>Email</label>
                <input
                    type='email'
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <label>Password</label>
                <input
                    type='password'
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <label>Confirm Password</label>
                <input
                    type='password'
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;