//FETCH CON GET 
let url = 'https://reqres.in/api/users?page=2';

const peticion = async (ruta) => {
    const rawResponse = await fetch(ruta, {
        method: 'GET'
    });
    const content = await rawResponse.json();

    return content.data;
}

const mostrarU = async() => {

    let usuarios = await peticion(url);

    usuarios.map( user => {
        console.log(user.first_name);
    });

}

mostrarU();
