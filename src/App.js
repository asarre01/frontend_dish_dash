import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Client/Home";
// import Login from "./Pages/Login";
// import Signin from "./Pages/Signin";
import { AuthProvider } from "./Context/AuthContext";
import AuthGuardClient from "./Helpers/AuthGuardClient";
import ClientRouter from "./Pages/Client/ClientRouter";
import AuthRouter from "./Pages/Auth/AuthRouter";
function App() {
    return (
        <AuthProvider>
            <div className=" bg-light dark:bg-dark min-h-screen">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home></Home>} />
                        <Route
                            path="/client"
                            element={
                                <AuthGuardClient>
                                    <ClientRouter />
                                </AuthGuardClient>
                            }
                        />
                        <Route path="/auth/*" element={<AuthRouter />} />
                    </Routes>
                </Router>
            </div>
        </AuthProvider>
    );
}

export default App;
