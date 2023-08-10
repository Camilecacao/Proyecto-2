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

function guardarDatos (event){
    event.preventDefault ()
    const datos={
        nombre: nombre.value,
        correo: email.value,
        telefono: telefono.value,
    }
    registro.push(datos)
    guardarLs ()
    console.log (registro)
    form.reset ()
    dibujar ()
}


const dibujar= ()=> {
    tbody.innerHTML= ""
    registro.forEach ((humano)=>{
    tbody.innerHTML+= `
    <tr>
    <td>${humano.nombre}</td>
    <td>${humano.correo}</td>
    <td>${humano.telefono}</td>
    <td>
    <button class= "btn btn-info">editar</button>
    <button class= "btn btn-danger">eliminar</button>
    </td>
    </tr>
    `
    })
}

const guardarLs= ()=> {
    localStorage.setItem("usuarios",JSON.stringify(registro))
}





form.addEventListener("submit", guardarDatos)
