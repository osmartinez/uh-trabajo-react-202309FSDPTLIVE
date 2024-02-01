export default function SignupForm(){

    return(
        <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-primary text-white">Registro</div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputName" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="exampleInputName"/>
              </div>
              <button type="submit" class="btn btn-primary">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}