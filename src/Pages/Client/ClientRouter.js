import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Panier from "./Panier";
import ClientLayout from "./ClientLayout";
function ClientRouter() {
    return (
        <Routes>
            <Route  element={<ClientLayout/>}>
                <Route index element={<Home />} />
                <Route path="/panier" element={<Panier />} />
            </Route>
        </Routes>
    );
}

export default ClientRouter;
