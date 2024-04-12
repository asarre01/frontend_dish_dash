import React from "react";
import HeaderAdmin from "../../components/header/HeaderAdmin";
import { Outlet } from "react-router-dom";
function AdminLayout() {
    return (
        <div className="flex w-full min-h-screen">
            <HeaderAdmin></HeaderAdmin>

            <Outlet />
        </div>
    );
}

export default AdminLayout;
