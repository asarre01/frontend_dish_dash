import { Route, Routes } from "react-router-dom";
import Home from "./Home";
function ClientRouter() {
    return <Routes>
        <Route index element={<Home/>}/>
    </Routes>;
}

export default ClientRouter;
