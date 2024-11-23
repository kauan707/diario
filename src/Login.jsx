import { useState } from "react";
import Diario from "./Diario";

function Login() {
    const [autorizado, setAutorizado] = useState(true                                                                                   )
    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    const [alerta, setAlerta] = useState()



    function entrar() {
        if (nome == "kauan" && senha == "123") {
            setAutorizado(true)
        } else {
            setAlerta("usuario ou senha invalida")
            setAutorizado(false)

        }
    }

    return (
        <>
            {autorizado ?
                <Diario />
                :
                <div>
                    <p>Usuario</p>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <p>Senha</p>
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <p>{alerta}</p>
                    <button onClick={entrar}>Entrar</button>
                </div>
            }
        </>
    )
}

export default Login;