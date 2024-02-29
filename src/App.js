import { Routes, Route } from "react-router-dom";
import Home from "./pages/Client/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
function App() {
    return (
        <div className=" bg-light dark:bg-dark min-h-screen">
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/Login" element={<Login></Login>} />
                <Route path="/Signin" element={<Signin></Signin>}></Route>
                <Route path="/admin" element={<Login></Login>} />
            </Routes>
        </div>
    );
}

export default App;
