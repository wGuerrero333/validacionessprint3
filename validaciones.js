
// handlers
const usuario= document.getElementById("in_nombre_usuario");
const contrasena= document.getElementById("in_contrasena");
const confirmar_contrasena= document.getElementById("in_confirmar_contrasena");
const botton= document.getElementById("btn_registrar_usuario");


const patronNombre = /^[a-zA-Z]{6,30}$/g;

const patronContrasena = /^[A-Z0-9]{6,}$/g;

let registros = [];
// aqui da error el bot¡
botton.addEventListener('click', agregarRegistro)

function agregarRegistro()
{
    const usuarioValor =usuario.value;
    const contrasenaValor = contrasena.value;
    const confirmarContrasenaValor = confirmar_contrasena.value;
    const usuarioCreado = new Registros (usuarioValor,contrasenaValor,confirmarContrasenaValor);

    // hice el console.log de las expresiones regualres y todo ok
    
// console.log(patronNombre.test(usuarioValor));
// console.log(patronContrasena.test(contrasenaValor));

    if(patronNombre.test(usuarioValor))

    {     
    registros.push(usuarioCreado);
    console.log(usuarioCreado);
    console.log(registros);
    
    }
    else
    {
        console.log("Ingreso no validado")
    }
// limpio el formulario  
    usuario.value="";
    contrasena.value="";
    confirmar_contrasena.value="";
}


class Registros 
{
    constructor(usuario,contrasena,confirmar_contrasena)
    {
        this.usuario=usuario;
        this.contrasena=contrasena;
        this.confirmar_contrasena=confirmar_contrasena;
       
    }
    
}



module.exports.registros=registros;
module.exports.OrdenarArreglo=OrdenarArreglo;
module.exports.agregarRegistro=agregarRegistro;





