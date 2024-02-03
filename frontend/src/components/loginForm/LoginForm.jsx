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
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Inicio de Sesión</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(doLogin)}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                                    <input type="email" {...register('email',{required: true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <input type="password" {...register('password',{required: true, minLength: 8})}  className="form-control" id="exampleInputPassword1" />
                                    {errors.password?.type === 'required' && <p>La contraseña es obligatoria</p>}
                                    {errors.password?.type === 'minLength' && <p>La contraseña debe tener mas de 8 caracteres</p>}
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Recuérdame</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}