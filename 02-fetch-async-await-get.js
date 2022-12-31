// OTRO FETCH CON GET
let url = 'https://reqres.in/api/users?page=2';


const peticion = async (ruta) => {
    const rawResponse = await fetch(ruta, {
        method: 'GET'
    });
    const content = await rawResponse.json();

    return content;
}

peticion(url)
    .then((data) => {
        console.log(data);
    });
