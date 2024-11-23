
import db from "../db.json"
import Item from "./item";


function Diario() {


    return (


        <table>

            <thead>

                <tr>
                    <th>Nome</th>
                    <th>Nota</th>
                </tr>

            </thead>

            <tbody>

                {db.alunos.map(aluno => <Item nome={aluno.nome} nota={aluno.nota} key={aluno.nome} />)}

                {db.users.map(user =><Item nome={user.nome} senha={user.senha} key={user.nome} />)}

            </tbody>

        </table>


    )
}
export default Diario;