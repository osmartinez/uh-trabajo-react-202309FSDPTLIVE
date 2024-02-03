import { useContext, useState } from "react"
import axios from 'axios'
import { SessionContext } from "../../contexts/SessionContext"
import {useForm} from "react-hook-form"


export default function LoginForm() {

    const { register, handleSubmit, formState: {errors}} = useForm()

    const {login} = useContext(SessionContext)

    function doLogin(datos){
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
                            <form onSubmit={handleSubmit(doLogin)}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                                    <input type="email" {...register('email',{required: true})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                    <input type="password" {...register('password',{required: true, minLength: 8})}  class="form-control" id="exampleInputPassword1" />
                                    {errors.password?.type === 'required' && <p>La contraseña es obligatoria</p>}
                                    {errors.password?.type === 'minLength' && <p>La contraseña debe tener mas de 8 caracteres</p>}
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Recuérdame</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}