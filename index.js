const form=document.getElementById ("form")
const email=document.getElementById ("inputEmail")
const telefono= document.getElementById ("inputTelefono")
const nombre=document.getElementById ("inputName")
const tbody= document.getElementById ("tbody")

// console.log (form)
// console.log (email)
// console.log (telefono)
// console.log (nombre)

let registro= []
let idEditando= null

function guardarDatos (event){
    event.preventDefault ()
    const datos={
        id: Date.now(),
        nombre: nombre.value,
        correo: email.value,
        telefono: telefono.value,
    }
    console.log(datos)

    registro.push(datos)
    guardarLs ()
    console.log (registro)
    form.reset ()
    dibujar ()
}


const dibujar= ()=> {
    obtenerLs()
    tbody.innerHTML= ""
    registro.forEach ((humano)=>{
    tbody.innerHTML+= `
    <tr>
    <td>${humano.nombre}</td>
    <td>${humano.correo}</td>
    <td>${humano.telefono}</td>
    <td>
    <button onclick="editar('${humano.id}')"class= "btn btn-info">editar</button>
    <button onclick="eliminar('${humano.id}')" class= "btn btn-danger">eliminar</button>
    </td>
    </tr>
    `
    })
}

const guardarLs= ()=> {
    localStorage.setItem("usuarios",JSON.stringify(registro))
}

const obtenerLs= ()=> {
    registro=JSON.parse(localStorage.getItem("usuarios")) || []
        
}

dibujar()

const eliminar=(id)=>{
    const indice=registro.findIndex((humano)=>humano.id==id)
    registro.splice(indice,1)
    guardarLs()
    dibujar()
}

const editar=(id)=>{
    idEditando=id
    const indice=registro.findIndex ((humano)=>humano.id==id)
    const humanoEditando=registro[indice]
    nombre.value=humanoEditando.nombre
    email.value=humanoEditando.correo
    telefono.value=humanoEditando.telefono

}

form.addEventListener("submit", guardarDatos)
