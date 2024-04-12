import { Route, Routes } from "react-router-dom";
import Dashbord from "../../components/Dashboard/Dashbord";
import AdminLayout from "./AdminLayout";
import GestionCategories from "../../components/Dashboard/GestionCategories";

function AdminRouter() {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route index element={<Dashbord />} />
                <Route path="/categorie" element={<GestionCategories />} />
            </Route>
        </Routes>
    );
}

export default AdminRouter;
