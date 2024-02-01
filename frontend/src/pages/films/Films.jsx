import { useContext } from "react"
import { SessionContext } from "../../contexts/SessionContext"

export default function Films(){
    const {user} = useContext(SessionContext)
    //axios.get(`http://localhost:3000/api/films?token=${user.token}`)
    return(
        <>
            <h2>Películas</h2>
        </>
    )
}