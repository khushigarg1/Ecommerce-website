import { signInWithGooglePopup } from "../../utils/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    };
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>SignIn with Google Popup</button>
        </div>
    )
}

export default SignIn;