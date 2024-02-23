import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
    
    return (
        <div className=" bg-light dark:bg-dark h-screen">
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/Login" element={<Login></Login>} />
            </Routes>
        </div>
    );
}

export default App;
