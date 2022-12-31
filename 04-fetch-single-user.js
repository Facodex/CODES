let urlSingleUser = 'https://reqres.in/api/users/2';

async function request (url) {

    const datos = await fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });

    const user = await datos.json()

    return user.data;
}

let parrafo = document.querySelector('#test');

async function showSingleUser(){
    let singleUser = await request(urlSingleUser);
    console.log(singleUser)
    parrafo.innerHTML = `${singleUser.first_name} ${singleUser.last_name} - ${singleUser.email}`;
}

showSingleUser();