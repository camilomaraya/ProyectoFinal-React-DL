import { Link } from "react-router-dom";

//FALTA DARLE ESTILO

function NotFound(){

    return (
            <div>
                <h1>Uff parece que te has perdido</h1>

                <Link>
                    Aqui puedes volver al inicio {":)"}
                </Link>
            </div>
        )
}

export default NotFound;