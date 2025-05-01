import { useNavigate } from "react-router-dom";

function SuccessPage() {
    const navigate = useNavigate();
    return (
        <div className="success">
            <h1>✅ Sign Up Successful!</h1>
            <p>Welcome, Pranav!</p>
            <button onClick={() => navigate("/signup")}> Back to SignUp</button>
        </div>
    );
}

export default SuccessPage;
