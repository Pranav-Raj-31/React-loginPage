import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import ErrorPage from "./components/ErrorPage";
import SuccessPage from "./components/SuccessPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
    );
}

export default App;
