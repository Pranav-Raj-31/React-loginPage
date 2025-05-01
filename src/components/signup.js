import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.username) errors.username = "Username is required!";
        if (!values.email) errors.email = "Email is required!";
        else if (!emailRegex.test(values.email)) errors.email = "Invalid email format!";
        if (!values.password) errors.password = "Password is required!";
        else if (values.password.length < 4) errors.password = "Password too short!";
        if (values.password !== values.confirmPassword) errors.confirmPassword = "Passwords do not match!";

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            const { username, email, password } = formValues;

            // credential check
            if (
                username.toLowerCase() === "pranav" &&
                email.toLowerCase() === "pranav@email.com" &&
                password === "123456"
            ) {
                navigate("/success");
            } else {
                navigate("/error");
            }
        }
    };

    return (
        <div className="container">
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit} className="ui form">
                <div className="field">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formValues.username}
                        onChange={handleChange}
                        placeholder="Choose a username"
                    />
                    <p>{formErrors.username}</p>
                </div>

                <div className="field">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <p>{formErrors.email}</p>
                </div>

                <div className="field">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    <p>{formErrors.password}</p>
                </div>

                <div className="field">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                    />
                    <p>{formErrors.confirmPassword}</p>
                </div>

                <button className="fluid ui button blue" type="submit">
                    Submit
                </button>
            </form>
            <p style ={{ marginTop: "1rem", textAlign: "center"}}>
                Already have an account? <Link to="/login"> Login </Link>
            </p>
        </div>
    );
}

export default Signup;
