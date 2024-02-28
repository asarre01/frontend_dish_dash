import { Routes, Route } from "react-router-dom";
import Home from "./pages/Client/Home";
import Login from "./pages/Login";
function App() {
    return (
        <div className=" bg-light dark:bg-dark min-h-screen">
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/Login" element={<Login></Login>} />
                <Route path="/admin" element={<Home></Home>} />
            </Routes>
        </div>
    );
}

export default App;
