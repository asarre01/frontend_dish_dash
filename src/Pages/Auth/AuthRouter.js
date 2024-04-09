import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signin from "./Signin";

function AuthRouter() {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<Signin />} />
        </Routes>
    );
}

export default AuthRouter;
