import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import InputValidation from "../shared/InputValidation"

export default function SignupForm(){

    const [datos, setDatos] = useState({email: "", password:"", name: ""})
    const navigate = useNavigate()

    function onSignup(){
      axios.post("http://localhost:3000/api/users/signup", datos)
      .then((response)=>{
        navigate("/login")
      })
      .catch((err)=>{
        console.log(err)
      })
    }


    return(
        <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-primary text-white">Registro</div>
          <div class="card-body">
            <div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                <InputValidation rules={[{text: 'el formato de mail no es valido', fn: (p)=>p.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) !== null}]} value={datos.email} onChange={(e)=> setDatos({...datos, email: e.target.value })} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <InputValidation rules={[{text: 'longitud menor que 8', fn: (p)=>p.length>=8}, {text: 'no contiene @', fn: (p)=>p.includes("@")}]} type="password" value={datos.password} onChange={(e)=> setDatos({...datos, password: e.target.value })}></InputValidation>
              </div>
              <div class="mb-3">
                <label for="exampleInputName" class="form-label">Nombre</label>
                <input value={datos.name} onChange={(e)=> setDatos({...datos, name: e.target.value })} type="text" class="form-control" id="exampleInputName"/>
              </div>
              <button onClick={onSignup} type="submit" class="btn btn-primary">Registrarse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}