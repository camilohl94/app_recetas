import { useState } from "react";
import "./Login.css";
let urlUsuarios= 'http://localhost:3000/Usuarios'
const Login = () => {
  
  const [usuario, setUsuario] = useState('');
  const [contrasena,setContrasena] =useState('');
  const [usuarios,setUsuarios]= useState([])

  function getUsuarios(){
    fetch('http://localhost:3000/Usuarios')
    .then(response=>response.json())
    .then(json =>console.log(json))
  }
  function signIn(){
    if (usuario == 'Camilo Hernandez' && contrasena == '123456'){
        alert('Inicio de Sesion Correcto')
    }else{
        alert('Usuario o contraseña incorrectos')
    }

  }

  return (
    <form className="form" action="">
      <section>
        <div>
          <label htmlFor="usuario">Usuario</label>
          <input
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
            id="usuario"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input onChange={(e)=>{setContrasena(e.target.value)}} id="password" type="password" />
        </div>
        <button onClick={signIn} className="button" type="button">
          Iniciar Sesion
        </button>
      </section>
    </form>
  );
};

export default Login;
