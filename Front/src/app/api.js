function api() {
       const getEntreesDuJour = () => {
            return fetch("http://localhost:8001/api/entreesdujour", {
                type: "GET",
       }).then((res) => res.json());
    };
    return{
        getEntreesDuJour,
    };

}

export default api();