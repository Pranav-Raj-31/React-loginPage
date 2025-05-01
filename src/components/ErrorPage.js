import { useNavigate } from "react-router-dom";
function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div className="error">
            <h1>❌ Sign Up Failed!</h1>
            <p>Invalid credentials. Please try again.</p>
            <button onClick={() => navigate("/signup")}> Back to SignUp</button>
        </div>
    );
}

export default ErrorPage;
