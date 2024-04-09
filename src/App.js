import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Client/Home";
// import Login from "./Pages/Login";
// import Signin from "./Pages/Signin";
import { AuthProvider } from "./Context/AuthContext";
import AuthGuardClient from "./Helpers/AuthGuardClient";
import ClientRouter from "./Pages/Client/ClientRouter";
function App() {
    return (
        <AuthProvider>
            <div className=" bg-light dark:bg-dark min-h-screen">
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
                    <Route path="/auth" element={<ClientRouter />} />
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;
