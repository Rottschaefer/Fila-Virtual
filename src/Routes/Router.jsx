import {Routes, Route } from "react-router-dom";
import TelaInicial from "../Telas/TelaInicial/TelaInicial";
import FilaPage from "../Telas/FilaPage/FilaPage";

export const Router = () => {
    return (
            <Routes>
                <Route index element={<TelaInicial />} />
                <Route path="/fila/:pointer" element={<FilaPage />} />
                <Route path="/admin" element={<h1>Admin Page</h1>} />
            </Routes>
    );
};