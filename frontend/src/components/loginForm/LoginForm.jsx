import { useContext, useState } from "react"
import axios from 'axios'
import { SessionContext } from "../../contexts/SessionContext"

export default function LoginForm() {

    const [datos, setDatos] = useState({email: "", password:""})
    const {login} = useContext(SessionContext)

    function doLogin(){
        axios.post("http://localhost:3000/api/users/login", datos)
        .then((response)=>{
            console.log(response.data)
            login({email: datos.email, token: response.data.token})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header bg-primary text-white">Inicio de Sesión</div>
                        <div class="card-body">
                            <div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                                    <input type="email" value={datos.email} onChange={(e)=> setDatos({...datos, email: e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                    <input type="password" value={datos.password} onChange={(e)=> setDatos({...datos, password: e.target.value})} class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Recuérdame</label>
                                </div>
                                <button onClick={doLogin} type="submit" class="btn btn-primary">Iniciar Sesión</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}