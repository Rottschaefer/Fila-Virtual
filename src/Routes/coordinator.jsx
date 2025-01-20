export const goTo = (navigate, path, pointer='') => {
    navigate(`${path}/${pointer}`);
};



export const goToFila = (navigate) => {
    navigate("/fila");
};

export const goToAdmin = (navigate) => {
    navigate("/admin");
};