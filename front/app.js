
function obtenerUsuarios(){

    fetch("https://apitienda.herokuapp.com/productos/select")
    .then((response,reject) => {
        return response.json()
    }).then(function(json){
        console.log(json);
        armarTabla(json);
    });
}

function armarTabla(data){
    var table = document.getElementById("tablebody");
    table.innerHTML = "";
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        //table.innerHTML  = "";
        table.innerHTML =  table.innerHTML + "<tr><td>"+ element.item +"</td> <td>"+ element.name +"</td> <td>"+ element.description +"</td> <td>"+ element.price +"</td> <td>"+ element.stock +"</td></tr>"
    }
}
/*

function registrarUsuario(){


    var object = {};

    //Convierto un formulario HTML en un formulario de javascript
    const formulario = new FormData(document.getElementById("formData"));
    
    //Armo el objeto
    formulario.forEach(function(value,key){
        object[key] = value
    });
    
    //Convertimos un objeto javascript a json.
    var json = JSON.stringify(object);


    console.log(json);

    //Peticion al servidor
    var serverResponse = fetch('http://192.168.1.6:9000/productos/create',{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        body: json
    });

    //Obtenemos la respuesta de la promesa
    serverResponse.then((response,reject) => {
        console.log(response);
        alert("Usuario registrado exitosamente");
    }).catch((error) => {
        console.log(error);
    });
}
*/